// Skills.jsx
import React from 'react';
import '../styles/skills.css';

function Skills() {
  const frontend = ["HTML", "CSS", "Bootstrap", "JavaScript", "React"];
  const backend = ["Node.js", "Express.js", "MySQL"];
  const tools = ["Postman", "Vercel"];
  // const frontend = ["HTML", "CSS", "Bootstrap", "React"];
  // const programming= ["Java", "JavaScript", "MySQL"];
  // const tools = ["Postman", "Vercel"];

  const renderSkill = (skill, index) => (
    <div className="pill-container" key={index}>
      <svg width="160" height="50" viewBox="0 0 160 50" className="pill-border">
        <rect x="1" y="1" width="158" height="48" rx="25" className="pill-bg" />
        <rect x="1" y="1" width="158" height="48" rx="25" className="pill-highlight" />
      </svg>
      <span className="pill-text">{skill}</span>
    </div>
  );

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-left">
          <img src="/Images/transparent_1750749562_7772.svg" alt="Skills Visual" className="skills-img" />
        </div>

        <div className="skills-right">
          <p className="subtitle">What I Know</p>
          <h2 className="section-title">Skills</h2>
          <p className="skills-description">
            Here are some of the technologies and tools I’ve worked with while building full-stack web applications and projects.
          </p>

          <div className="skills-list">{frontend.map(renderSkill)}</div>
          <div className="skills-list">{backend.map(renderSkill)}</div>
{/*           <div className="skills-list">{programming.map(renderSkill)}</div> */}
          <div className="skills-list">{tools.map(renderSkill)}</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
