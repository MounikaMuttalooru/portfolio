import { useMemo, useState } from 'react';
import './Projects.css';
import img1 from '../images/onPageLoadingWebflow.png';
import img2 from '../images/WebFlowComponents.png';
import img3 from '../images/hotelBooking.avif';
import img4 from '../images/filmClub.jpg';
import img5 from '../images/portfolio.png';

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'onPageLoadingWebflow',
      image: img1,
      description: 'Developed using Webflow plus GSAP to create smooth on-page loading animations.',
      techs: ['WebFlow', 'GSAP', 'HTML', 'CSS'],
      github: 'https://github.com/MounikaMuttalooru',
      live: ''
    },
    {
      id: 2,
      title: 'WebFlowComponents',
      image: img2,
      description: 'Custom component development in Webflow with advanced interactions and responsive design.',
      techs: ['WebFlow', 'GSAP', 'HTML', 'CSS', 'JS'],
      github: 'https://github.com/MounikaMuttalooru',
      live: ''
    },
    {
      id: 3,
      title: 'hotelBooking',
      image: img3,
      description: 'Booking system using React.js and Java backend with MongoDB; implemented GET/fetch methods and Bootstrap UI.',
      techs: ['React', 'MongoDB', 'Bootstrap', 'Node.js'],
      github: 'https://github.com/MounikaMuttalooru',
      live: 'https://hotelroommanagement.netlify.app/'
    },
    {
      id: 4,
      title: 'filmClub',
      image: img4,
      description: 'A film club web app with curated lists and reviews, built with modern web tools.',
      techs: ['Angular', 'TypeScript', 'CSS', 'Netlify'],
      github: 'https://github.com/MounikaMuttalooru',
      live: 'https://filmclubbybabuji.netlify.app/'
    },
    {
      id: 5,
      title: 'portfolio',
      image: img5,
      description: 'Personal portfolio site showcasing projects and skills, deployed on Netlify.',
      techs: ['React', 'CSS', 'Netlify'],
      github: 'https://github.com/MounikaMuttalooru',
      live: 'https://mounikamuttalooruportfolio.netlify.app/'
    }
  ];

  const techList = useMemo(() => {
    const set = new Set();
    projects.forEach(p => p.techs.forEach(t => set.add(t)));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = selectedTech === 'All' ? projects : projects.filter(p => p.techs.includes(selectedTech));

  return (
    <div className="projects container mt-5 mb-5">
      <h2 className="projects-title text-center mb-4">My Projects</h2>

      <div className="tech-filters text-center mb-4">
        {techList.map(t => (
          <button
            key={t}
            className={`tech-chip ${selectedTech === t ? 'active' : ''}`}
            onClick={() => setSelectedTech(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="row">
        {filtered.map(p => (
          <div key={p.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card project-card h-100">
              <div className="project-image-wrapper">
                <img src={p.image} alt={p.title} className="card-img-top project-image" />
                <div className="overlay">
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noreferrer" className="overlay-link" aria-label="GitHub">
                      <i className="fab fa-github fa-2x"></i>
                    </a>
                  ) : null}
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer" className="overlay-link" aria-label="Live site">
                      <i className="fas fa-external-link-alt fa-2x"></i>
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>
                <div className="project-techs">
                  {p.techs.map(t => (
                    <span key={t} className="badge bg-secondary tech-badge me-1 mb-1">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
