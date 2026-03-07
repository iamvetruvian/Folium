import AuthForm from '../components/auth/AuthForm';
import { Link } from 'react-router-dom';
import Divider from '../components/ui/Divider';

export default function Signup() {
  return (
    <AuthForm title="SignUp for Folium">
      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Username" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" required />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" placeholder="Confirm Password" required />
        <button type="submit">SignUp</button>
        <Divider label="OR" />
        <Link to="/login"><button type="button" className="sign-up-btn">Already have an account? Login</button></Link>
      </form>
    </AuthForm>
  );
}
