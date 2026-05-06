import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/GregoryTrevor/react-portfolio-template" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GregoryTrevor/react-portfolio-template" target="_blank" rel="noreferrer"><h2>Personal Portfolio Website</h2></a>
                <p>Designed and developed a fully responsive personal portfolio website using React, TypeScript and SCSS. Features dark/light mode, smooth scroll animations and a modern UI showcasing my skills, work history and projects.</p>
            </div>
            <div className="project">
                <a href="https://github.com/GregoryTrevor" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GregoryTrevor" target="_blank" rel="noreferrer"><h2>IT Troubleshooting Guide</h2></a>
                <p>A web-based IT troubleshooting reference guide built with HTML, CSS and JavaScript. Covers common hardware, software and network issues with step-by-step resolutions based on real-world experience at the Nigerian Ports Authority.</p>
            </div>
            <div className="project">
                <a href="https://github.com/GregoryTrevor" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GregoryTrevor" target="_blank" rel="noreferrer"><h2>UI Design Landing Page</h2></a>
                <p>A modern, visually compelling product landing page designed and built from scratch using HTML5, CSS3 and JavaScript. Demonstrates UI/UX principles including typography, colour theory, layout composition and responsive design.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
