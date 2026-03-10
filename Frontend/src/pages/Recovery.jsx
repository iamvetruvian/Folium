import AuthForm from "@/components/auth/AuthForm"
import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { useParams } from "react-router-dom";



export default function Recovery() {

    const formHandler = async (formData) => {
    const username = formData.get('username')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')
    const params = useParams()
    const token = params.token
    const response = await fetch('/api/forgot-password/' + token, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, confirmPassword, token })
    })
    const data = await response.json()
    console.log(data)
}


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