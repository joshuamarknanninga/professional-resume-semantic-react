// src/components/common/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import useDarkMode from '../../hooks/useDarkMode';
import styles from './Header.module.css'; // Using CSS Modules for scoped styling

const Header = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <header className={styles.header}>
      <h1>Joshua Mark Nanninga</h1>
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className={styles.themeToggle}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
};

export default Header;
