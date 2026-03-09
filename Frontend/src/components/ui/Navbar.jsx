import './Navbar.css';
import { Link } from 'react-router-dom';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverBody } from './popover.jsx';
import { Avatar, AvatarImage, AvatarFallback } from './avatar.jsx';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const navigate = useNavigate()
  const logout = async () => {
    const response = await fetch('http://localhost:5000/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await response.json()
    console.log(data)
    if (data.success) {
      localStorage.removeItem('token')
      navigate('/login')
    }
  }

  return (
    <nav className="navbar glass">
      <div className="nav-left">
        <Link to="/" className="nav-brand">
          <h2>Folium</h2>
        </Link>
      </div>

      <div className="nav-center">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </div>

      <div className="nav-right">
        {props.loginBtn === true ? (
          <Link to="/login">
            <button className="login-btn glass">Login</button>
          </Link>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <button className="avatar-trigger">
                <Avatar>
                  <AvatarImage src="https://avatar.vercel.sh/128" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </button>
            </PopoverTrigger>
            <PopoverContent className="glass profile-popover" align="end">
              <PopoverHeader>
                <PopoverTitle>Account</PopoverTitle>
              </PopoverHeader>
              <PopoverBody>
                <div className="popover-menu">
                  <Link to="/profile">Profile Settings</Link>
                  <hr className="popover-divider" />
                  <button className="logout-link" onClick={logout}>Logout</button>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
