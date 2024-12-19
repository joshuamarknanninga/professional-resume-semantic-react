// src/components/common/Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import useDarkMode from '../../hooks/useDarkMode';
import Button from './Button';

const Navbar = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <div className={styles.logo}>
        <NavLink to="/">YourLogo</NavLink>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" end activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={styles.active}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName={styles.active}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={styles.active}>
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
