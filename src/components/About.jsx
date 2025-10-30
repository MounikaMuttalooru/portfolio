import React from 'react';
import './About.css';
import profilePic from '../images/myphoto.jpeg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-left-side">
          <div className="about-image-container">
            <div className="image-wrapper">
              <img src={profilePic} alt="Mounika" className="profile-image" />
              <div className="image-overlay"></div>
            </div>
            <div className="floating-info">
              <div className="info-item">
                <span className="info-number">3</span>
                <span className="info-label">Years Experience</span>
              </div>
              <div className="info-item">
                <span className="info-number">MS</span>
                <span className="info-label">Information Technology</span>
              </div>
            </div>
          </div>
          
          <div className="education-highlight">
            <h3>Education</h3>
            <div className="education-item">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="education-details">
                <h4>Master of Science in Information Technology</h4>
                <p className="education-institution">St.Fransis College NY</p>
                <p className="education-year">Aug2023 -  May2025</p>
              </div>
            </div>
          </div>
        </div>
        
       
        <div className="about-right-side">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              I am a passionate Full Stack Software Engineer with a Master's degree in Information Technology and over 3 years of experience designing, developing, and deploying scalable applications across cloud, web, and mobile platforms. My expertise spans modern frameworks, cloud technologies, and DevOps practices.
            </p>
            <p>
              I specialize in building robust microservices, high-performance UIs, and data-intensive workflows using Python, React, FastAPI, and cloud platforms like GCP. I'm also proficient in CI/CD automation, infrastructure as code, and agile delivery methodologies.
            </p>
          </div>
          
          <div className="skills-highlight">
            <div className="skill-category">
              <h3>Programming & Scripting</h3>
              <div className="skill-tags">
                <span>Python</span>
                <span>Java</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Frontend & Backend</h3>
              <div className="skill-tags">
                <span>React</span>
                <span>Next.js</span>
                <span>FastAPI</span>
                <span>Node.js</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <div className="skill-tags">
                <span>GCP</span>
                <span>Docker</span>
                <span>Jenkins</span>
                <span>Terraform</span>
              </div>
            </div>
          </div>
          
          <div className="about-cta">
            <a href="/resume" className="download-cv">
              Download CV
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 