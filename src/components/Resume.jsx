import React from 'react';
import './Resume.css';
import MouniResume from '../images/MounikaResume.pdf'

const Resume = () => {
  const education = [
    {
      id: 1,
      degree: 'M.S in Information Technology',
      school: 'St. Fransis College, Brooklyn, NY, U.S.A.',
      period: '05/2025'
    }
  ];

  const experience = [
    {
      id: 1,
      company: 'PLATEAU GRP',
      position: 'Software Engineer',
      period: 'Nov 2023 - Present',
      description: [
        'Designed and implemented robust software solutions using object-oriented programming principles and scripting languages to address complex business requirements',
        'Built and maintained microservice architectures within containerized environments, ensuring scalability and performance optimization',
        'Managed project tasks and defects using Jira, maintaining clear documentation and prioritizing issues based on business impact',
        'Conducted comprehensive testing of web-based applications to ensure functionality, performance, and security compliance',
        'Developed responsive front-end interfaces with modern web technologies, focusing on optimal user experience across devices',
        'Established CI/CD pipelines using Jenkins and GitLab to automate build, test, and deployment processes',
        'Integrated and optimized development workflows with NPM, Cypress.io, esbuild, and Bun to enhance developer productivity',
        'Configured and maintained Apache Tomcat servers and leveraged Maven for dependency management and build automation',
        'Implemented code quality gates through SonarQube analysis, addressing technical debt and ensuring codebase sustainability',
        'Participated in agile ceremonies including sprint planning, daily stand-ups, and retrospectives to ensure continuous delivery',
        'Created wireframes and interactive mockups tailored to multiple user personas, translating business requirements into intuitive interfaces',
        'Utilized UX design tools including Sketch and InVision to prototype and iterate on application designs based on user feedback',
        'Integrated secure data workflows between cloud environments while maintaining compliance with data protection standards',
        'Applied Test-Driven Development practices to create maintainable, well-tested code with high coverage metrics',
        'Automated security scanning using Fortify within the CI/CD pipeline to identify and remediate vulnerabilities early',
        'Implemented infrastructure as code using Ansible to provision and configure consistent development environments',
        'Wrote and maintained comprehensive unit tests using JUnit5 to ensure code reliability and facilitate refactoring'
      ],
      technologies: [
        'Jenkins','GitLab','NPM','Cypress.io','esbuild','Bun','Apache Tomcat','Maven','SonarQube','Ansible','JUnit5','React','Sketch','InVision','TDD'
      ]
    },
    {
      id: 2,
      company: 'Guac',
      position: 'Software Engineer',
      period: 'Aug 2021 - Jul 2023',
      description: [
        'Developed and maintained efficient ETL pipelines processing billions of data rows daily using Python, ensuring timely and accurate data flow throughout the application ecosystem',
        'Architected and implemented customer-facing features for web applications using React, Next.js, and TypeScript, enhancing user experience and product functionality',
        'Applied advanced state management patterns to maintain data consistency across multiple concurrent user sessions in real-time environments',
        'Optimized front-end performance for handling large, complex datasets through code splitting and lazy loading techniques',
        'Collaborated with design and product teams to translate business requirements into technical implementations with clean, maintainable code',
        'Leveraged GCP services and BigQuery to create scalable data solutions that supported analytics and reporting features',
        'Implemented responsive UI components following design system guidelines, ensuring consistent user experience across different devices',
        'Contributed to infrastructure as code using Terraform and Docker, streamlining deployment processes and environment consistency',
        'Debugged and resolved complex technical issues across the full stack, from database queries to front-end rendering',
        'Wrote comprehensive unit and integration tests to maintain code quality and prevent regressions',
        'Participated in code reviews, providing constructive feedback to maintain code quality standards',
        'Built and maintained RESTful APIs using FastAPI, focusing on performance and developer experience',
        'Contributed to React Native mobile application development, extending key platform features to iOS and Android users',
        'Optimized PostgreSQL database queries and schema design to improve application performance',
        'Mentored junior developers on best practices in TypeScript development and React component architecture'
      ],
      technologies: [
        'Python','FastAPI','React','Next.js','TypeScript','GCP','BigQuery','Terraform','Docker','PostgreSQL','React Native'
      ]
    }
  ];

  const skills = [
    {
      category: 'Programming & Scripting',
      items: ['Python','Java','TypeScript','JavaScript','SQL','Shell Scripting']
    },
    {
      category: 'Frontend Development',
      items: ['React','Next.js','React Native','HTML5','CSS3','Sketch','InVision']
    },
    {
      category: 'Backend Development',
      items: ['FastAPI','Apache Tomcat','Node.js','Maven','JUnit5']
    },
    {
      category: 'Microservices & Containers',
      items: ['Docker','Kubernetes']
    },
    {
      category: 'Cloud & Data Platforms',
      items: ['Google Cloud Platform (GCP)','BigQuery','PostgreSQL']
    },
    {
      category: 'DevOps & CI/CD',
      items: ['Jenkins','GitLab CI/CD','Terraform','Ansible','NPM','Bun','esbuild']
    },
    {
      category: 'Testing & QA',
      items: ['Cypress.io','Test-Driven Development (TDD)','Unit Testing','Integration Testing','SonarQube','Fortify Security Scanning']
    },
    {
      category: 'Version Control & Collaboration',
      items: ['Git','Jira','Agile/Scrum']
    },
    {
      category: 'Design & UX',
      items: ['Wireframing','Prototyping','UX Design','Responsive UI Development']
    }
  ];

  const certifications = [
    'Full Stack Developer Certificate – Apna College (In Progress)'
  ];

  return (
    <div className="resume">
      <div className="container py-5">
        <h2 className="text-center mb-5">Resume</h2>
        
        <div className="resume-header text-center mb-5">
          <h1 className="display-4 fw-bold">Mounika Muttalooru</h1>
          <p className="lead">Full Stack Software Engineer</p>
          <div className="contact-info">
            <p><i className="fas fa-envelope me-2"></i> MounikaMouni.5577@gmail.com</p>
            <p><i className="fas fa-phone me-2"></i> +1 9048217685</p>
            <p><i className="fas fa-map-marker-alt me-2"></i> USA</p>
          </div>
          <div className="mt-3">
            <a href={MouniResume} className="btn btn-primary btn-lg" download>
              <i className="fas fa-download me-2"></i>Download Resume
            </a>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8">
            <div className="resume-section mb-5">
              <h3 className="section-title">Professional Summary</h3>
              <p className="section-content">
                Full Stack Software Engineer with 5 years of experience designing, developing, and deploying scalable applications across cloud, web, and mobile platforms. Skilled in building robust microservices, high-performance UIs, and data-intensive workflows using modern frameworks and cloud technologies. Expertise in CI/CD automation, infrastructure as code, and agile delivery. Adept at collaborating across cross-functional teams, optimizing system performance, and ensuring security compliance through automated testing and vulnerability scanning.
              </p>
            </div>
            
            <div className="resume-section mb-5">
              <h3 className="section-title">Work Experience</h3>
              {experience.map(item => (
                <div key={item.id} className="resume-item mb-4">
                  <div className="item-header">
                    <h4 className="item-title">{item.position}</h4>
                    <h5 className="item-subtitle">{item.company}</h5>
                    <p className="item-period">{item.period}</p>
                  </div>
                  {Array.isArray(item.description) ? (
                    <ul className="item-description-list">
                      {item.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    item.description ? <p className="item-description">{item.description}</p> : null
                  )}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="technologies mb-3">
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="resume-section mb-5">
              <h3 className="section-title">Education</h3>
              {education.map(item => (
                <div key={item.id} className="resume-item">
                  <div className="item-header">
                    <h4 className="item-title">{item.degree}</h4>
                    <h5 className="item-subtitle">{item.school}</h5>
                    <p className="item-period">{item.period}</p>
                  </div>
                  {item.description && <p className="item-description">{item.description}</p>}
                  {item.gpa && <p className="item-gpa"><strong>GPA:</strong> {item.gpa}</p>}
                </div>
              ))}
            </div>

            {certifications.length > 0 && (
              <div className="resume-section">
                <h3 className="section-title">Certifications</h3>
                <ul className="item-achievements">
                  {certifications.map((cert, idx) => (
                    <li key={idx}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="col-lg-4">
            <div className="resume-section">
              <h3 className="section-title">Technical Skills</h3>
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group mb-4">
                  <h4 className="skill-category">{skillGroup.category}</h4>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;