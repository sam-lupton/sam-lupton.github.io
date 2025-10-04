import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'AI-Powered E-commerce Platform',
            description: 'A full-stack e-commerce solution with machine learning recommendations, real-time analytics, and automated inventory management.',
            image: '🛒',
            technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB'],
            category: 'web',
            github: '#',
            demo: '#'
        },
        {
            id: 2,
            title: 'Real-time Chat Application',
            description: 'A scalable chat application with WebSocket support, file sharing, and end-to-end encryption.',
            image: '💬',
            technologies: ['React', 'Socket.io', 'Express', 'Redis', 'Docker'],
            category: 'web',
            github: '#',
            demo: '#'
        },
        {
            id: 3,
            title: 'Machine Learning Model API',
            description: 'RESTful API for serving machine learning models with automatic scaling and monitoring capabilities.',
            image: '🤖',
            technologies: ['Python', 'FastAPI', 'AWS', 'Docker', 'Kubernetes'],
            category: 'ml',
            github: '#',
            demo: '#'
        },
        {
            id: 4,
            title: 'Mobile Fitness Tracker',
            description: 'Cross-platform mobile app for fitness tracking with social features and data visualization.',
            image: '📱',
            technologies: ['React Native', 'Firebase', 'Chart.js', 'Redux'],
            category: 'mobile',
            github: '#',
            demo: '#'
        },
        {
            id: 5,
            title: 'Blockchain Voting System',
            description: 'Secure and transparent voting system built on blockchain technology with smart contracts.',
            image: '⛓️',
            technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
            category: 'blockchain',
            github: '#',
            demo: '#'
        },
        {
            id: 6,
            title: 'Data Visualization Dashboard',
            description: 'Interactive dashboard for analyzing and visualizing complex datasets with real-time updates.',
            image: '📊',
            technologies: ['D3.js', 'React', 'Python', 'PostgreSQL', 'Redis'],
            category: 'data',
            github: '#',
            demo: '#'
        }
    ];

    const categories = [
        { key: 'all', label: 'ALL' },
        { key: 'web', label: 'WEB' },
        { key: 'ml', label: 'ML/AI' },
        { key: 'mobile', label: 'MOBILE' },
        { key: 'blockchain', label: 'BLOCKCHAIN' },
        { key: 'data', label: 'DATA' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title neon-glow">MY PROJECTS</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="project-filters">
                    {categories.map(category => (
                        <button
                            key={category.key}
                            className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category.key)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <div className="project-emoji">{project.image}</div>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} className="project-link" aria-label="View on GitHub">
                                            <span>GitHub</span>
                                        </a>
                                        <a href={project.demo} className="project-link" aria-label="View Demo">
                                            <span>Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title neon-pink">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
