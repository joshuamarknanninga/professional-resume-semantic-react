// src/components/Layout/Layout.js

import React from 'react';
import Navbar from '../common/StyledNavbarEmotion';
import Footer from '../common/Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
