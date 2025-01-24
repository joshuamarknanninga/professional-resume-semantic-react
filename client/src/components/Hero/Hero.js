import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section aria-labelledby="hero-heading" className={styles.hero}>
      <h1 id="hero-heading">Hi, I'm Your Name</h1>
      <p>Front-End Developer specializing in React</p>
      <a href="/projects" className={styles.ctaButton}>View My Work</a>
    </section>
  );
};

export default Hero;
