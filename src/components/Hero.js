import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    const texts = [
        'Data Scientist',
        'Full Stack Developer',
        'Machine Learning Engineer',
        'Creative Problem Solver',
        'Tech Enthusiast'
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && currentText === texts[textIndex]) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            } else {
                setCurrentText(
                    isDeleting
                        ? texts[textIndex].substring(0, currentText.length - 1)
                        : texts[textIndex].substring(0, currentText.length + 1)
                );
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, textIndex, texts]);

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            <span className="neon-glow">HELLO, I'M</span>
                            <br />
                            <span className="neon-pink">SAM LUPTON</span>
                        </h1>
                        <div className="hero-subtitle">
                            <span className="typing-text">{currentText}</span>
                            <span className="cursor">|</span>
                        </div>
                        <p className="hero-description">
                            Welcome to my digital space! I'm passionate about creating innovative solutions
                            and exploring the intersection of technology and creativity.
                        </p>
                        <div className="hero-buttons">
                            <button
                                className="btn btn-primary"
                                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                            >
                                VIEW MY WORK
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            >
                                GET IN TOUCH
                            </button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="geometric-shape shape-1"></div>
                        <div className="geometric-shape shape-2"></div>
                        <div className="geometric-shape shape-3"></div>
                        <div className="floating-elements">
                            <div className="floating-element element-1">💻</div>
                            <div className="floating-element element-2">⚡</div>
                            <div className="floating-element element-3">🚀</div>
                            <div className="floating-element element-4">🎯</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
