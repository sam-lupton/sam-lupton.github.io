import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'EMAIL',
            value: 'sam.lupton@example.com',
            link: 'mailto:sam.lupton@example.com'
        },
        {
            icon: '📱',
            title: 'PHONE',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: '📍',
            title: 'LOCATION',
            value: 'San Francisco, CA',
            link: '#'
        },
        {
            icon: '💼',
            title: 'LINKEDIN',
            value: 'linkedin.com/in/samlupton',
            link: 'https://linkedin.com/in/samlupton'
        }
    ];

    const socialLinks = [
        { name: 'GitHub', icon: '🐙', url: 'https://github.com/sam-lupton' },
        { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/samlupton' },
        { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/samlupton' },
        { name: 'Instagram', icon: '📷', url: 'https://instagram.com/samlupton' }
    ];

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title neon-glow">GET IN TOUCH</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">
                        Ready to collaborate? Let's create something amazing together!
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3 className="contact-info-title neon-pink">CONTACT INFORMATION</h3>

                        <div className="contact-info-grid">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="contact-info-item"
                                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                >
                                    <div className="contact-icon">{info.icon}</div>
                                    <div className="contact-details">
                                        <h4 className="contact-detail-title">{info.title}</h4>
                                        <p className="contact-detail-value">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="social-links">
                            <h4 className="social-title neon-green">FOLLOW ME</h4>
                            <div className="social-grid">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                    >
                                        <span className="social-icon">{social.icon}</span>
                                        <span className="social-name">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3 className="form-title neon-pink">SEND MESSAGE</h3>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="5"
                                    required
                                    className="form-textarea"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="submit-success">
                                    <span className="success-icon">✓</span>
                                    Message sent successfully!
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
