// src/components/Experience/Experience.js

import React from 'react';
import styles from './Experience.module.css';
import experiencesData from '../../utils/experiencesData';

const Experience = () => {
  return (
    <section aria-labelledby="experience-heading" className={styles.experience}>
      <h2 id="experience-heading">Experience & Education</h2>
      <div className={styles.timeline}>
        {experiencesData.map((exp) => (
          <div key={exp.id} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>{exp.title}</h3>
              <h4>{exp.subtitle}</h4>
              <span className={styles.date}>{exp.date}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
