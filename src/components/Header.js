import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <span className="neon-glow">SAM</span>
                        <span className="neon-pink">LUPTON</span>
                    </div>

                    <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                        <ul className="nav-list">
                            <li><button onClick={() => scrollToSection('home')} className="nav-link">HOME</button></li>
                            <li><button onClick={() => scrollToSection('about')} className="nav-link">ABOUT</button></li>
                            <li><button onClick={() => scrollToSection('projects')} className="nav-link">PROJECTS</button></li>
                            <li><button onClick={() => scrollToSection('contact')} className="nav-link">CONTACT</button></li>
                        </ul>
                    </nav>

                    <button
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
