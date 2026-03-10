const express = require("express");
const path = require("path");
const User = require("./models/userSchema");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session")
const { MongoStore } = require("connect-mongo");
const nodemailer = require('nodemailer')
const crypto = require("crypto")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const dbURI = "mongodb://127.0.0.1:27017/folium";
const createConnection = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("Connection successful")
  } catch (err) {
    console.log(err);
  }
}

createConnection();

const sessionStore = MongoStore.create({
  mongoUrl: dbURI,
})

// Middleware
app.use(express.json());
app.use(session({
  secret: process.env.SECRET,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  }
}))
app.use(passport.initialize())
app.use(passport.session())

const getHash = (salt, password) => {
  const hashedString = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
  return hashedString
}

const validator = (salt, hash, password) => {
  const hashedPassword = getHash(salt, password)
  return hashedPassword === hash
}

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return done(null, false, { message: "User not found" });
    }

    const isValid = validator(user.salt, user.hash, password);
    if (!isValid) {
      return done(null, false, { message: "Wrong Password" });
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user)
})
// Basic route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


app.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error', error: err.message });
    }
    if (!user) {
      return res.status(401).json({ message: 'User does not exist' });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Login failed', error: err.message });
      }
      return res.json({ message: 'Login successful', user: { username: user.username, email: user.email } });
    });
  })(req, res, next);
});

app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const salt = crypto.randomBytes(32).toString('hex')
    const hash = getHash(salt, password)
    await User.create({ username, email, salt, hash }); // Using passwordHash as per schema
    console.log(`User created: ${username}`);
    res.json({ message: 'Signup successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
});


app.post('/api/forgot-password', async (req, res) => {
  // console.log(req.body);
  const { email } = req.body;
  console.log(typeof (req.body));
  const user = User.findOne({ email })
  if (!user) {
    res.status(401).json({ message: 'The email is not registered!' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  })


  const recoveryToken = crypto.randomBytes(32).toString('hex');
  user.recoveryToken = recoveryToken;
  user.recoveryExpires = Date.now() + 60 * 60 * 1000;
  await user.save();

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Recover your Folium account',
    text: `Recover your Folium account by clicking on the link below: 
    http://localhost:5173/forgot-password/${recoveryToken}
    This link will expire in 1 hour.
    If you did not request this email, please ignore it.
    `
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(401).json({ message: error })
      console.log(error)
    } else {
      res.status(200).json({ message: info.response })
    }
  })

  console.log("Mail sent")
})

app.post('/api/isAuthenticated', (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ message: "Request Authenticated", success: true })
  } else {
    res.status(401).json({ message: "Unauthorized", success: false })
  }
})

app.post('/api/forgot-password/:token', async (req, res) => {
  const token = req.params
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (!user) {
    res.status(401).json({ message: "That user is not registered! " })
  }
  if (user.recoveryToken !== token) {
    res.status(401).json({ message: "Invalid Token" })
  }
  if (user.recoveryExpires < Date.now()) {
    user.recoveryToken = null;
    await user.save()
    res.status(401).json({ message: "Token Expired" })
  }

  const salt = crypto.randomBytes(32).toString('hex')
  const hash = getHash(salt, password)
  user.salt = salt
  user.hash = hash
  user.recoveryToken = null
  user.recoveryExpires = null
  await user.save()
  res.status(200).json({ message: "Password reset successful" })
})

app.post('/api/logout', async (req, res) => {
  try {
    req.logout((err) => {
      if (err) {
        return next(err)
      }
      res.json({ message: "Logout successful", success: true })

    })
  } catch (err) {
    res.json({ message: err.message, success: false })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
