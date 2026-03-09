import AuthForm from '../components/auth/AuthForm';
import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const formHandler = async (formData) => {
  const email = formData.get('email')
  const response = await fetch('http://localhost:5000/api/forgot-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
  const data = await response.json()
  console.log(data)
}

export default function Forgot() {
  return (
    <AuthForm
      title="Password Recovery"
      leftContent={
        <>
          <Avatar className="h-32 w-32 mb-8 bg-white/10 border border-white/20">
            <AvatarImage src="https://avatar.vercel.sh/128" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h1>Forgot Password?</h1>
          <p>No worries! Enter your email and we'll send you reset instructions.</p>
        </>
      }
    >
      <form action={formHandler} className="login-form">
        <label htmlFor="email">Enter registered email</label>
        <input type="email" name="email" id="email" placeholder="Email" required />
        <button type="submit">Reset Password</button>
      </form>
    </AuthForm>
  );
}