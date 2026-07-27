import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaPalette } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaPalette />,
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Responsive Design', level: 88 },
        { name: 'UI/UX', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaCode />,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'Python', level: 65 },
        { name: 'REST API', level: 80 },
        { name: 'Authentication', level: 70 }
      ]
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Firebase', level: 70 },
        { name: 'Database Design', level: 80 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: <FaTools />,
      skills: [
        { name: 'Git/GitHub', level: 88 },
        { name: 'VS Code', level: 90 },
        { name: 'Docker', level: 60 },
        { name: 'Linux', level: 70 },
        { name: 'Figma', level: 75 }
      ]
    }
  ];

  const softSkills = [
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Leadership',
    'Time Management',
    'Adaptability'
  ];

  const languages = [
    { name: 'Indonesian', level: 'Native' },
    { name: 'English', level: 'Intermediate' }
  ];

  return (
    <motion.section
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="skills-container">
        <h1>Skills & Expertise</h1>
        <p className="section-subtitle">Keahlian yang telah saya kuasai dan terus dikembangkan</p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h2>{category.title}</h2>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-name-level">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.section
          className="soft-skills-section"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Soft Skills</h2>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="soft-skill-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="languages-section"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Languages</h2>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <h3>{lang.name}</h3>
                <p>{lang.level}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.section>
  );
}

export default Skills;
