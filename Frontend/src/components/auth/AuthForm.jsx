import Hyperspeed from '../Hyperspeed';
import './AuthForm.css';

const AuthForm = ({ title, children }) => {
    return (
        <div className="auth-page-wrapper">
            <Hyperspeed />
            <div className="login-container">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    );
};

export default AuthForm;
