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
                <span className="info-number">3+</span>
                <span className="info-label">Years Experience</span>
              </div>
              <div className="info-item">
                <span className="info-number">MS</span>
                <span className="info-label">Information Technology</span>
              </div>
            </div>
          </div>
          
        </div>
        
       
        <div className="about-right-side">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              I am a passionate Full Stack Software Engineer with a Master's degree in Information Technology and over 5+ years of experience designing, developing, and deploying scalable applications across cloud, web, and mobile platforms. My expertise spans modern frameworks, cloud technologies, and DevOps practices.
            </p>
            <p>
              I specialize in building robust microservices, high-performance UIs, and data-intensive workflows using Python, React, FastAPI, and cloud platforms like GCP. I'm also proficient in CI/CD automation, infrastructure as code, and agile delivery methodologies.
            </p>
          </div>

          <div className="technical-skills-section">
            <h3 className="section-subtitle">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-item"><i className="fab fa-java"></i><span>Java</span></div>
              <div className="skill-item"><i className="fab fa-angular"></i><span>Angular</span></div>
              <div className="skill-item"><i className="fab fa-react"></i><span>React.js</span></div>
              <div className="skill-item"><i className="fab fa-python"></i><span>Python</span></div>
              <div className="skill-item"><i className="fas fa-code"></i><span>TypeScript</span></div>
              <div className="skill-item"><i className="fab fa-js-square"></i><span>JavaScript</span></div>
              <div className="skill-item"><i className="fab fa-node-js"></i><span>Node.js</span></div>
              <div className="skill-item"><i className="fab fa-docker"></i><span>Docker</span></div>
              <div className="skill-item"><i className="fab fa-aws"></i><span>AWS</span></div>
              <div className="skill-item"><i className="fab fa-google"></i><span>Google Cloud</span></div>
              <div className="skill-item"><i className="fas fa-server"></i><span>Kubernetes</span></div>
              <div className="skill-item"><i className="fas fa-database"></i><span>PostgreSQL</span></div>
              <div className="skill-item"><i className="fab fa-css3-alt"></i><span>CSS</span></div>
              <div className="skill-item"><i className="fab fa-html5"></i><span>HTML</span></div>
              <div className="skill-item"><i className="fas fa-leaf"></i><span>Spring Boot</span></div>
              <div className="skill-item"><i className="fas fa-code"></i><span>Spring MVC</span></div>
              <div className="skill-item"><i className="fas fa-database"></i><span>Hibernate</span></div>
              <div className="skill-item"><i className="fab fa-node-js"></i><span>Express.js</span></div>
              <div className="skill-item"><i className="fas fa-file-code"></i><span>Pug</span></div>
              <div className="skill-item"><i className="fab fa-js"></i><span>jQuery</span></div>
              <div className="skill-item"><i className="fas fa-cubes"></i><span>Redux</span></div>
              <div className="skill-item"><i className="fab fa-bootstrap"></i><span>Bootstrap</span></div>
              <div className="skill-item"><i className="fab fa-css3-alt"></i><span>Tailwind</span></div>
              <div className="skill-item"><i className="fab fa-aws"></i><span>AWS EC2</span></div>
              <div className="skill-item"><i className="fab fa-aws"></i><span>AWS Lambda</span></div>
              <div className="skill-item"><i className="fab fa-aws"></i><span>AWS IAM</span></div>
              <div className="skill-item"><i className="fas fa-server"></i><span>AEM</span></div>
              <div className="skill-item"><i className="fas fa-network-wired"></i><span>HTTP / REST</span></div>
              <div className="skill-item"><i className="fab fa-github"></i><span>GitHub</span></div>
              <div className="skill-item"><i className="fab fa-jenkins"></i><span>Jenkins</span></div>
              <div className="skill-item"><i className="fas fa-tasks"></i><span>Jira</span></div>
              <div className="skill-item"><i className="fas fa-database"></i><span>MongoDB</span></div>
              <div className="skill-item"><i className="fas fa-database"></i><span>MySQL</span></div>
              <div className="skill-item"><i className="fas fa-database"></i><span>PostgreSQL</span></div>
              <div className="skill-item"><i className="fas fa-laptop-code"></i><span>VSCode</span></div>
              <div className="skill-item"><i className="fas fa-file-code"></i><span>JSON</span></div>
              <div className="skill-item"><i className="fas fa-sync-alt"></i><span>React Query</span></div>
            </div>
          </div>
          
          
          
          
        </div>
      </div>
    </section>
  );
};

export default About; 