import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaRocket, FaGraduationCap } from 'react-icons/fa';
import './Home.css';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="home-container">
        <motion.div className="home-content" variants={itemVariants}>
          <h1 className="home-title">
            Halo, saya <span className="name">Dapiss</span> 👋
          </h1>
          <p className="home-subtitle">
            Pelajar SMK yang passionate tentang teknologi, programming, dan inovasi digital
          </p>
          <p className="home-description">
            Saya berfokus pada pengembangan web dan aplikasi mobile dengan teknologi modern.
            Mari kita ciptakan sesuatu yang luar biasa bersama!
          </p>

          <div className="home-buttons">
            <Link to="/projects" className="btn btn-primary">
              Lihat Project <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Hubungi Saya
            </Link>
          </div>
        </motion.div>

        <motion.div className="home-hero" variants={itemVariants}>
          <div className="hero-image">
            <div className="hero-circle">💻</div>
          </div>
        </motion.div>
      </div>

      <motion.section className="features" variants={containerVariants}>
        <h2>Kenapa Memilih Saya?</h2>
        <div className="features-grid">
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">
              <FaCode />
            </div>
            <h3>Clean Code</h3>
            <p>Saya menulis kode yang rapi, mudah dipahami, dan mengikuti best practices</p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">
              <FaRocket />
            </div>
            <h3>Fast & Efficient</h3>
            <p>Mengoptimalkan performa untuk memberikan pengalaman pengguna terbaik</p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">
              <FaGraduationCap />
            </div>
            <h3>Always Learning</h3>
            <p>Terus belajar dan mengikuti perkembangan teknologi terbaru</p>
          </motion.div>
        </div>
      </motion.section>
    </motion.section>
  );
}

export default Home;
