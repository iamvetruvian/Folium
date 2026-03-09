import AuthForm from '../components/auth/AuthForm';
import BlurWordRotator from '../components/ui/BlurWordRotator';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '../components/ui/Divider';
// import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import PageTransition from '../components/ui/PageTransition';

export default function Login() {
  const navigate = useNavigate();

  const formHandler = async (formData) => {
    const username = formData.get('username');
    const password = formData.get('password');
    console.log(`${username}, ${password}`)
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        navigate('/dashboard');
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <PageTransition>
      <AuthForm
        title={<>Login to <BlurWordRotator words={["Productivity", "Efficiency", "Discipline", "Folium"]} /></>}
        leftContent={
          <>
            <Avatar className="h-32 w-32 mb-8 bg-white/10 border border-white/20">
              <AvatarImage src="https://avatar.vercel.sh/128" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1>Welcome Back!</h1>
            <p>We're so excited to see you again!</p>
          </>
        }
      >
        <form action={formHandler} className="login-form">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Username" required />
          <div className='for-password'>
            <label htmlFor="password">Password</label>
            <Link to="/forgot-password" title="Forgot?" className="forgot-password">Forgot?</Link>
          </div>
          <input type="password" id="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <Divider label="OR" />
          <button type="button" className="google-login">Login with Google</button>
          <Link to="/signup"><button type="button" className="sign-up-btn">Sign Up</button></Link>
        </form>
      </AuthForm>
    </PageTransition>
  );
}