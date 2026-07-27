import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dapiss</h3>
            <p>Pelajar SMK dengan passion di bidang teknologi</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/#/">Home</a></li>
              <li><a href="/#/about">About</a></li>
              <li><a href="/#/projects">Projects</a></li>
              <li><a href="/#/skills">Skills</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-links">
              <a href="https://github.com/daffsii" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FaInstagram />
              </a>
              <a href="mailto:muhammaddaffaislami26@gmail.com" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Dapiss. All rights reserved.</p>
          <p>Dibuat dengan ❤️ menggunakan React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
