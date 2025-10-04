import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-text">
                        <p className="footer-copyright">
                            © {currentYear} <span className="neon-pink">SAM LUPTON</span>. All rights reserved.
                        </p>
                        <p className="footer-tagline">
                            Built with <span className="neon-green">React</span> and lots of <span className="neon-glow">coffee</span> ☕
                        </p>
                    </div>

                    <div className="footer-links">
                        <a href="#home" className="footer-link">HOME</a>
                        <a href="#about" className="footer-link">ABOUT</a>
                        <a href="#projects" className="footer-link">PROJECTS</a>
                        <a href="#contact" className="footer-link">CONTACT</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <p className="footer-message">
                        Thanks for visiting! Let's connect and build something amazing together. 🚀
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
