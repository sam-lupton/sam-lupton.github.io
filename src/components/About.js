import React from 'react';
import './About.css';

const About = () => {
    const skills = [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Python', level: 88 },
        { name: 'Node.js', level: 82 },
        { name: 'Machine Learning', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 78 },
        { name: 'Git', level: 85 }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title neon-glow">ABOUT ME</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <div className="about-card">
                            <h3 className="card-title neon-pink">WHO I AM</h3>
                            <p>
                                I'm a passionate developer with a love for creating innovative solutions
                                and exploring new technologies. With a background in both software development
                                and machine learning, I enjoy tackling complex problems and turning ideas into reality.
                            </p>
                        </div>

                        <div className="about-card">
                            <h3 className="card-title neon-green">WHAT I DO</h3>
                            <p>
                                I specialize in full-stack development, machine learning, and cloud technologies.
                                I'm always learning new frameworks and tools to stay current with the latest
                                industry trends and best practices.
                            </p>
                        </div>

                        <div className="about-card">
                            <h3 className="card-title neon-glow">MY GOALS</h3>
                            <p>
                                I'm constantly seeking opportunities to grow and contribute to meaningful projects.
                                My goal is to use technology to solve real-world problems and make a positive impact
                                through innovative solutions.
                            </p>
                        </div>
                    </div>

                    <div className="skills-section">
                        <h3 className="skills-title neon-pink">TECHNICAL SKILLS</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-header">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percentage">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
