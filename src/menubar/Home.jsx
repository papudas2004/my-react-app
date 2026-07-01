import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import universityImg from "../assets/university.jpg";

const Home = () => {
  return (
    <div className="home-container">
      {/* 1. Moderate Hero Section with Text Overlay */}
      <header className="hero-section">
        <div className="hero-image-wrapper">
          <img src={universityImg} alt="University Campus" class="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <span className="hero-badge">Welcome to Your Next Chapter</span>
          <h1 className="hero-title">
            Empower Your Future With <span className="text-gradient">Quality Education</span>
          </h1>
          <p className="hero-subtitle">
            Access world-class courses, expert-led training, and dedicated placement assistance to launch your career.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="hero-btn btn-filled">Explore Courses</Link>
            <Link to="/register" className="hero-btn btn-outlined">Join Now</Link>
          </div>
        </div>
      </header>

      {/* 2. Mini Feature Highlights Grid */}
      <section className="highlights-section">
        <div className="highlight-card">
          <div className="highlight-icon">💻</div>
          <h3>Online Learning</h3>
          <p>Learn at your own pace with lifetime access to materials.</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">💼</div>
          <h3>Placement Support</h3>
          <p>Get resume reviews and exclusive interview opportunities.</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">📚</div>
          <h3>Digital Library</h3>
          <p>Access hundreds of textbooks and programming cheat sheets.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
