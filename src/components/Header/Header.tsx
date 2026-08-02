import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">TaskFlow</div>

        <nav className="navigation" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
