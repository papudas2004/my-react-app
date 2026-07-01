import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Check if user is authenticated (Optional helper for conditional rendering)
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <nav className="classic-navbar">
      {/* Brand Logo Anchor */}
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-accent">Edu</span>Hub
        </Link>
      </div>

      {/* Main Core Navigation Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/Contact-List">Contact List</Link></li>
      </ul>

      {/* Conditional Authentication Action Actions */}
      <div className="navbar-actions">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="nav-btn btn-secondary">Sign In</Link>
            <Link to="/register" className="nav-btn btn-primary">Register</Link>
          </>
        ) : (
          <button className="nav-btn btn-logout" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
