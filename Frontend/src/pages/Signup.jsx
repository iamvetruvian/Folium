import AuthForm from '../components/auth/AuthForm';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '../components/ui/Divider';
import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import PageTransition from '../components/ui/PageTransition';



export default function Signup() {

  const navigate = useNavigate();
  const formHandler = async (formData) => {
    const username = formData.get('username')
    const password = formData.get('password')
    const email = formData.get('email')
    const confirmPassword = formData.get('confirmPassword')
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email })
      })

      const data = await response.json()
      if (response.ok) {
        navigate('/login')
      } else {
        console.error(data)
      }
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <PageTransition>
      <AuthForm
        title="SignUp for Folium"
        leftContent={
          <>
            <Avatar className="h-32 w-32 mb-8 bg-white/10 border border-white/20">
              <AvatarImage src="https://avatar.vercel.sh/128" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1>Create Account</h1>
            <p>Join us and start organizing your life with Folium.</p>
          </>
        }
      >
        <form action={formHandler} className="login-form">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="Username" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" required />
          <label htmlFor="confirm-password" name="confirmPassword">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm Password" required />
          <button type="submit">SignUp</button>
          <Divider label="OR" />
          <Link to="/login"><button type="button" className="sign-up-btn">Already have an account? Login</button></Link>
        </form>
      </AuthForm>
    </PageTransition>
  );
}
