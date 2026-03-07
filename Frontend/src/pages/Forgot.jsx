import AuthForm from '../components/auth/AuthForm';

export default function Forgot() {
  return (
    <AuthForm title="Password Recovery">
      <form className="login-form">
        <label htmlFor="email">Enter registered email</label>
        <input type="email" id="email" placeholder="Email" required />
        <button type="submit">Reset Password</button>
      </form>
    </AuthForm>
  );
}