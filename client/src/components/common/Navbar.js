// src/components/common/Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import useDarkMode from '../../hooks/useDarkMode';
import Button from './Button';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <div className={styles.logo}>
        <NavLink to="/">YourLogo</NavLink>
        <img src={logo} alt="Your Company Logo" className={styles.logoImage} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <Button onClick={toggleTheme} variant="secondary">
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </Button>
    </nav>
  );
};

export default Navbar;
