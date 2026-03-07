import AuthForm from '../components/auth/AuthForm';
import BlurWordRotator from '../components/ui/BlurWordRotator';
import { Link } from 'react-router-dom';
import Divider from '../components/ui/Divider';

export default function Login() {
  const formHandler = async (formData) => {
    const username = formData.get('username');
    const password = formData.get('password');
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <AuthForm
      title={<>Login to <BlurWordRotator words={["Productivity", "Efficiency", "Discipline", "Folium"]} /></>}
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
  );
}