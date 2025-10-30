import { Link } from 'react-router-dom';
import './Home.css';
import backgroundVideo from '../videos/Backgroundvedio.mp4';

const Home = () => {
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
      
      <div className="content-overlay">
        <h1>Mounika Muttalooru</h1>
        <h2>Full Stack Software Engineer</h2>
        <p>
        Full Stack Software Engineer with 3+ years of experience designing, developing, and deploying scalable applications across cloud, web, and mobile platforms. Skilled in Python,Java, React, FastAPI, GCP, Docker, Kubernetes, Terraform, and CI/CD (Jenkins, GitLab, SonarQube). Experienced with PostgreSQL, BigQuery, delivering high-quality, data-driven solutions that optimize operations and enable large-scale decision making.
        </p>
        <div className="cta-buttons">
          <Link to="/resume" className="btn btn-primary">
            Resume
          </Link>
          <Link to="/contact" className="btn btn-outline-light">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home; 