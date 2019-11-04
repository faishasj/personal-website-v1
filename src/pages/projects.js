import React from "react"
import PropTypes from "prop-types"

import TerminalText from "../components/terminal-text"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { COLOURS } from "../constants"
import "./projects.css"

import SpirographImage from "../images/spiro_cap.gif"
import CPParticlesImage from "../images/cpparticles.gif"

const Project = ({ children, image, title, link, colour }) => (
  <a href={ link }>
    <div class="project" style={{ border: '3px solid ' + colour }}>
      <img
        src={ image }
      />
      <div
        class="title"
        style={{ padding: '2px 10px 2px 10px',
                  backgroundColor: colour, 
                  textDecoration: 'none',
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'black'}}
      >
        { title }
      </div>
      <div class="description">
        { children }
      </div>
    </div>
  </a>
);

const ProjectsPage = () => (
  <Layout>
    <SEO title="projects"/>
    <div class="projects-container">
      <TerminalText command="$ ls projects">
        <div class="row">
          <Project
            image={ CPParticlesImage }
            title="cpparticles"
            link="https://github.com/faishasj/cpparticles"
            colour={ COLOURS.highlightOrange }
          >
            <p>A very basic 2D physics engine written in C++ with included SFML 
            demo programs.</p><p>Includes rigid body dynamics, soft body dynamics 
            (using the mass-spring model) and collision detection.</p>
          </Project>
          <Project
            image={ SpirographImage }
            title="spirograph"
            link="https://faishasj.github.io/spirograph/"
            colour={ COLOURS.highlightBlue }
          >
            <p>A web app for visualising hypotrochoids and epitrochoids.</p>
            <p>Sit back and admire plain and simple maths without the fiddly-ness 
            of a real Spirograph toy.</p><p>Much pretty. Such colour.</p>
          </Project>
        </div>
      </TerminalText>
    </div>
  </Layout>
);

Project.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  colour: PropTypes.string,
}

export default ProjectsPage
