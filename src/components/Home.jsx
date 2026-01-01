import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import backgroundVideo from '../videos/Backgroundvedio.mp4';
import animImg from '../images/myphoto.jpeg';

const Home = () => {
  const animRef = useRef(null);

  const handleMove = (e) => {
    const el = animRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX ?? (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY ?? (e.touches && e.touches[0].clientY)) - rect.top;
    const halfW = rect.width / 2;
    const halfH = rect.height / 2;
    const dx = (x - halfW) / halfW; // -1 .. 1
    const dy = (y - halfH) / halfH; // -1 .. 1
    const maxDeg = 8; // max tilt
    const rx = (-dy * maxDeg).toFixed(2);
    const ry = (dx * maxDeg).toFixed(2);
    el.style.setProperty('--rx', `${rx}deg`);
    el.style.setProperty('--ry', `${ry}deg`);
    el.style.setProperty('--scale', '1.03');
    el.style.setProperty('--glow', '1');
  };

  const handleLeave = () => {
    const el = animRef.current;
    if (!el) return;
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
    el.style.setProperty('--scale', '1');
    el.style.setProperty('--glow', '0.0');
  };

  return (
    <section className="home" id="home">
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="home-inner">
        <div className="content-overlay" tabIndex="0">
        <h1>Mounika Muttalooru</h1>
        <h2>Full Stack Software Engineer</h2>
        <p>
        Full Stack Software Engineer with 5+ years of experience designing, developing, and deploying scalable applications across cloud, web, and mobile platforms. Skilled in Python,Java, React, Angular, Restfull APIs, FastAPI, AWS, GCP, Docker, Kubernetes, Terraform, and CI/CD (Jenkins, GitLab, SonarQube). Experienced with PostgreSQL, BigQuery, delivering high-quality, data-driven solutions that optimize operations and enable large-scale decision making.
        </p>
        <div className="cta-buttons">
          
          <Link to="/contact" className="btn btn-outline-light">
            Get In Touch
          </Link>
        </div>
        </div>

        <div
          className="home-animation"
          ref={animRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          onTouchMove={handleMove}
          onTouchEnd={handleLeave}
        >
          <img src={animImg} alt="Mounika portrait" tabIndex="0" />
        </div>
      </div>
    </section>
  );
};

export default Home; 