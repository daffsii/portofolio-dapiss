import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'muhammaddaffaislami26@gmail.com',
      link: 'mailto:muhammaddaffaislami26@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'WhatsApp',
      value: '+62 812-3456-7890',
      link: 'https://wa.me/6281234567890'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Indonesia',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: 'https://github.com/daffsii', label: 'GitHub' },
    { icon: <FaLinkedin />, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaInstagram />, link: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <p className="section-subtitle">Hubungi saya untuk diskusi, kolaborasi, atau pertanyaan apapun</p>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Contact Information</h2>
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="info-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h3>Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="social-icon"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Send Me a Message</h2>

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>

            {submitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Terima kasih! Pesan Anda telah diterima. Saya akan segera meresponnya.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
