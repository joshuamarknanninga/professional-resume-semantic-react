import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <article className={styles.card}>
      <img src={project.image} alt={`${project.title} screenshot`} className={styles.image} />
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.techStack}>
          {project.technologies.map(tech => (
            <span key={tech} className={styles.techBadge}>{tech}</span>
          ))}
        </div>
        <div className={styles.links}>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
