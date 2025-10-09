import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        {/* Background Image Behind Card */}
        <img src="/Images/about.png" alt="Gurkamal" className="about-bg-image" />

        <div className="about-card">
  {/* Education */}
  <div className="about-block">
    <div className="about-header">
      <img src="/Icons/whiteIcons/gravity-ui--graduation-capwhite.svg" alt="Education Icon" width="40" height="40" />
      <h3>Education</h3>
    </div>
    <ul className="about-list">
      <li>
        <strong>12th (Non-Medical)</strong> – Triple M Public School, Hoshiarpur
        <span className="about-year">(2021)</span>
      </li>
      <li>
        <strong>B.Tech (ECE)</strong> – Guru Nanak Dev University, Amritsar
        <span className="about-year">(2025)</span>
      </li>
      <li>
        <strong>M.Tech (CSE)</strong> – Chandigarh University, Chandigarh
        <span className="about-year">(2027)</span>
      </li>
    </ul>
  </div>

  {/* Internship */}
  <div className="about-block">
    <div className="about-header">
      <img src="/Icons/whiteIcons/uis--briefcasewhite.svg" alt="Internship Icon" width="40" height="40" />
      <h3>Internship</h3>
    </div>
    <ul className="about-list">
      <li>
        Full Stack Developer Intern at <strong>Khaira IT Solutions, Mohali</strong> –
        6 months of hands-on experience with React & Node.js
        Offered a full-time role post-internship. (<a href="#" target="_blank" rel="noopener noreferrer">Click to view offer letter</a>).
      </li>
    </ul>
  </div>

  {/* Traits */}
  <div className="about-traits">
    <span><img src="/Icons/whiteIcons/fluent--brain-circuit-24-regularwhite.svg" alt="Quick Learner" width="24" /> Quick Learner</span>
    <span><img src="/Icons/whiteIcons/fluent--people-team-28-regularwhite.svg" alt="Team Player" width="24" /> Team Player</span>
    <span><img src="/Icons/whiteIcons/system-uicons--lightbulb-onwhite.svg" alt="Problem Solver" width="24" /> Problem Solver</span>
  </div>
</div>

      </div>
    </section>
  );
}

export default About;
