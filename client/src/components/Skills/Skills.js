// src/components/Skills/Skills.js

import React from 'react';
import styles from './Skills.module.css';
import skillsData from '../../utils/skillsData';

const Skills = () => {
  return (
    <section aria-labelledby="skills-heading" className={styles.skills}>
      <h2 id="skills-heading">Skills</h2>
      <div className={styles.skillsContainer}>
        {skillsData.map((skill) => (
          <div key={skill.id} className={styles.skillItem}>
            <h3>{skill.name}</h3>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${skill.level}%` }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
