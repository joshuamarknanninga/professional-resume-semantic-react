import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import projectsData from '../../utils/projectsData'; // Create this data file

const Projects = () => {
  return (
    <section aria-labelledby="projects-heading" className={styles.projects}>
      <h2 id="projects-heading">Projects</h2>
      <div className={styles.projectGrid}>
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
