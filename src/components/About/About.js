import React from 'react';
import styles from './About.module.css';
import profileImage from '../../assets/images/profile.jpg'; // Ensure you have this image

const About = () => {
  return (
    <section aria-labelledby="about-heading" className={styles.about}>
      <h2 id="about-heading">About Me</h2>
      <img src={profileImage} alt="Your Name" className={styles.profileImage} />
      <p>
        [Your personal bio goes here. Talk about your background, interests, and what drives you in your career.]
      </p>
      <a href="/resume.pdf" download className={styles.downloadButton}>Download Resume</a>
    </section>
  );
};

export default About;
