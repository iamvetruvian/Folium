import AuthForm from "@/components/auth/AuthForm"
import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const formHandler = (formData) => {
    const username = formData.get('username')
    const password = formData.get('password')
}

export default function Recovery() {
    return (
        <AuthForm
            title="Recover Password"
            leftContent={
                <>
                    <Avatar className="h-32 w-32 mb-8 bg-white/10 border border-white/20">
                        <AvatarImage src="https://avatar.vercel.sh/128" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <h1>Reset Password</h1>
                    <p>Secure your account with a new password.</p>
                </>
            }
        >
            <form action={formHandler} className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Username" />
                <label htmlFor="password">New Password</label>
                <input type="password" id="password" name="password" placeholder="New Password" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                <button type="submit">Recover</button>
            </form>
        </AuthForm>
    )
}