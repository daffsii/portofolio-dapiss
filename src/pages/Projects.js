import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Website portfolio interaktif yang dibuat dengan React dan CSS modern',
      technologies: ['React', 'CSS3', 'Framer Motion'],
      category: 'web',
      link: '#',
      github: 'https://github.com/daffsii',
      image: '🌐'
    },
    {
      id: 2,
      title: 'Todo App',
      description: 'Aplikasi task management dengan fitur add, edit, delete, dan filter',
      technologies: ['React', 'LocalStorage', 'JavaScript'],
      category: 'web',
      link: '#',
      github: 'https://github.com/daffsii',
      image: '✓'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Aplikasi cuaca real-time menggunakan API OpenWeather',
      technologies: ['React', 'API', 'CSS'],
      category: 'web',
      link: '#',
      github: 'https://github.com/daffsii',
      image: '🌤️'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce sederhana dengan shopping cart dan checkout',
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      link: '#',
      github: 'https://github.com/daffsii',
      image: '🛒'
    },
    {
      id: 5,
      title: 'Mobile Chat App',
      description: 'Aplikasi chat real-time untuk mobile dengan Firebase',
      technologies: ['React Native', 'Firebase', 'JavaScript'],
      category: 'mobile',
      link: '#',
      github: 'https://github.com/daffsii',
      image: '💬'
    },
    {
      id: 6,
      title: 'Task Management Dashboard',
      description: 'Dashboard manajemen proyek dengan drag-drop dan real-time updates',
      technologies: ['React', 'Redux', 'UI Library'],
      category: 'web',
      link: '#',
      github: 'https://github.com/daffsii',
      image: '📊'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="projects-container">
        <h1>My Projects</h1>
        <p className="section-subtitle">Koleksi project-project terbaik yang telah saya kerjakan</p>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Semua
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </button>
          <button
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
