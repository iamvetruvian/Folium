import { User } from 'lucide-react';
import FloatingLines from '../FloatLines';
import './AuthForm.css';

const AuthForm = ({ title, leftContent, children }) => {
    return (
        <div className="auth-page-wrapper">
            <FloatingLines enabledWaves={["top", "bottom"]} lineCount={20} />
            <div className="auth-page-split">
                <div className="auth-left-side">
                    <div className="left-side-content">
                        {leftContent}
                    </div>
                </div>
                <div className="auth-right-side">
                    <div className="login-container">
                        <h1>{title}</h1>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
