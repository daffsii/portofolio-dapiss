import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-container">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Selamat Datang di Portfolio Saya</h2>
            <p>
              Nama saya Dapiss, seorang pelajar SMK yang passionate tentang teknologi dan programming.
              Saya memiliki keahlian dalam web development, mobile development, dan UI/UX design.
            </p>
            <p>
              Sejak awal perjalanan saya di dunia teknologi, saya telah berusaha untuk terus belajar,
              berkembang, dan menciptakan solusi yang bermanfaat melalui kode yang berkualitas.
            </p>
            <p>
              Saya percaya bahwa teknologi adalah alat yang powerful untuk mengubah dunia menjadi lebih baik.
              Mari kita berkolaborasi dan menciptakan sesuatu yang luar biasa bersama!
            </p>
          </div>

          <div className="about-info">
            <div className="info-box">
              <h3>📚 Pendidikan</h3>
              <p>SMK [Nama Sekolah]</p>
              <p>Program Keahlian: [Program]</p>
              <p>Tahun: [Tahun]</p>
            </div>

            <div className="info-box">
              <h3>🎯 Fokus</h3>
              <p>✓ Web Development</p>
              <p>✓ Mobile Apps</p>
              <p>✓ UI/UX Design</p>
            </div>

            <div className="info-box">
              <h3>🏆 Prestasi</h3>
              <p>✓ [Prestasi 1]</p>
              <p>✓ [Prestasi 2]</p>
              <p>✓ [Prestasi 3]</p>
            </div>
          </div>
        </div>

        <div className="timeline">
          <h2>Journey Saya</h2>
          <div className="timeline-items">
            <motion.div
              className="timeline-item"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2024</h3>
                <p>Memulai perjalanan di dunia programming</p>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2025</h3>
                <p>Menyelesaikan berbagai project dan sertifikasi</p>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2026</h3>
                <p>Terus berinovasi dan berkontribusi pada teknologi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
