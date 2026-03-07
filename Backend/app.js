const express = require("express");
const path = require("path");
const userSchema = require("./models/userSchema");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const dbURI = "mongodb://127.0.0.1:27017/folium";
const createConnection = async () => {
	try{
		await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
		console.log("Connection successful")
	}catch(err){
		console.log(err);
	}
}

createConnection();

// Middleware
app.use(express.json());

// const User = mongoose.model("User", userSchema);


// Basic route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`Username: ${username}, Password: ${password}`);
  res.json({ message: 'Login successful' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
