import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar glass">
      <div className="nav-brand">
        <h2>Folium</h2>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/" className="nav-link">
            To-Do
          </a>
        </li>
        <li className="nav-item">
          <a href="/todos" className="nav-link">
            Completed
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
