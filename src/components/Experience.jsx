import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'PLATEAU GRP',
      position: 'Software Engineer',
      period: 'FEB 2024 - Present',
      description: 'Designed and implemented robust software solutions using object-oriented programming principles and scripting languages. Built and maintained microservice architectures within containerized environments. Established CI/CD pipelines using Jenkins and GitLab. Integrated development workflows with NPM, Cypress.io, esbuild, and Bun. Implemented code quality gates through SonarQube analysis and automated security scanning using Fortify.',
      technologies: ['Jenkins', 'GitLab', 'NPM', 'Cypress.io', 'esbuild', 'Bun', 'Apache Tomcat', 'Maven', 'SonarQube', 'Ansible', 'JUnit5', 'React', 'Sketch', 'InVision', 'TDD']
    },
    {
      id: 2,
      company: 'Guac',
      position: 'Software Engineer',
      period: 'FEB 2022 - Jul 2023',
      description: 'Developed and maintained efficient ETL pipelines processing billions of data rows daily using Python. Architected customer-facing features for web applications using React, Next.js, and TypeScript. Leveraged GCP services and BigQuery to create scalable data solutions. Contributed to infrastructure as code using Terraform and Docker. Built and maintained RESTful APIs using FastAPI and contributed to React Native mobile application development.',
      technologies: ['Python', 'FastAPI', 'React', 'Next.js', 'TypeScript', 'GCP', 'BigQuery', 'Terraform', 'Docker', 'PostgreSQL', 'React Native']
    }
  ];

  return (
    <div className="experience">
      <div className="container py-5">
        <h2 className="text-center mb-5">Work Experience</h2>
        <div className="row">
          {experiences.map(exp => (
            <div key={exp.id} className="col-lg-6 mb-4">
              <div className="card experience-card h-100">
                <div className="card-body">
                  <h3 className="card-title company">{exp.company}</h3>
                  <h4 className="position">{exp.position}</h4>
                  <p className="period text-muted">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                  <div className="technologies mt-3">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 