import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Photi: An Image Generation App",
      description:
        "From the early days of image gen, a Streamlit app implementing DALL-E with photo editing features.",
      image: "🎨",
      technologies: ["Python", "Streamlit", "DALL-E"],
      category: "gen",
      github: "https://github.com/sam-lupton/photi",
    },
    {
      id: 2,
      title: "Compromeets: Find The Best Meeting Point",
      description: `Plug in you and your friends' postcodes and the type of venue (e.g. theatre, sports pub). 
        The app will suggest a fair, highly-rated meeting point between you. Uses open-source mapping/transit data
         and routing engines. Restricted to London (for now).`,
      image: "📍",
      technologies: [
        "React",
        "Python",
        "FastAPI",
        "Node.js",
        "Google API",
        "Docker",
      ],
      category: "web",
      github: "https://github.com/sam-lupton/compromeets",
    },
    {
      id: 3,
      title: "The Mix, The Master And The Model: Capstone Project",
      description: `Final project for General Assembly DS bootcamp in 2019. Uses Spotify API to scrape the song data of all
         Billboard top 100 songs. Then trained a random forest model to predict which decade the song came from,
         using trends like mastering and song length.`,
      image: "🤖",
      technologies: [
        "Python",
        "Data Science",
        "Spotify API",
        "Jupyter Notebook",
      ],
      category: "ml",
      github: "https://github.com/sam-lupton/sl-capstone",
    },
  ];

  const categories = [
    { key: "all", label: "ALL" },
    { key: "web", label: "WEB" },
    { key: "ml", label: "ML/AI" },
    { key: "gen", label: "Gen AI" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title neon-glow">MY PROJECTS</h2>
          <div className="section-divider"></div>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${
                activeFilter === category.key ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      className="project-link"
                      aria-label="View on GitHub"
                    >
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      className="project-link"
                      aria-label="View Demo"
                    >
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
