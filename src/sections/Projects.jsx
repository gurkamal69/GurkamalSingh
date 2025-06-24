import React from 'react';
import '../styles/projects.css';

const projects = [
  {
    title: 'GlintHive',
    categories: ['Social Marketing', 'Designing'],
    image: '/Images/glinthive.png',
    link: 'https://www.glinthivecreations.com/',
  },
  {
    title: 'Trucking',
    categories: ['Load', 'Real Estate'],
    image: '/Images/projects.png',
    link: 'https://trucking.example.com',
  },
  {
    title: 'VitaPlates',
    categories: ['Meal Planner', 'Exercise'],
    image: '/Images/vitaplates.png',
    link: 'https://vita-plates-7cvu.vercel.app/',
  },
  {
    title: 'Gurkamal',
    categories: ['Website', 'Portfolio'],
    image: '/Images/portfolio.png',
    link: 'https://portfolio.gurkamal.com',
  },
];

const RecentProjects = () => {
  return (
    <section className="recent-projects" id="projects">
      <div className="header">
        <h2 className="about-title">Recent Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-tags">
              {project.categories.map((tag, idx) => (
                <span className="tag" key={idx}>{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-arrow">
              ↗
            </a>
            <h3 className="project-title">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;