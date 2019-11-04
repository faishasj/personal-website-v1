import React from "react"
import PropTypes from "prop-types"

import HighlightedLink from "./highlighted-link"
import { COLOURS } from "../constants.js"
import "./header.css"


const NavItem = ({ children, emoji, link, colour }) => {
  return (
    <li class="nav-item">
      <span style={{ cursor: 'default' }}>{ emoji }&nbsp;</span>
      <HighlightedLink
        link={ link }
        colour={ colour }
      >
        { children }
      </HighlightedLink>
    </li>
  );
}

const Header = () => (
  <ul class="navbar">
    <li class="site-name">
      <a href="/">faisha.dev</a>
    </li>
    <NavItem 
      emoji="&#127968;"
      link="/"
      colour={ COLOURS.highlightGreen }
    >
      readme
    </NavItem>
    <NavItem
      emoji="&#128221;"
      link="/changelog"
      colour={ COLOURS.highlightBlue }
    >
      changelog
    </NavItem>
    <NavItem
      emoji="&#128640;"
      link="/projects"
      colour={ COLOURS.highlightPink }
    >
      projects
    </NavItem>
    <NavItem
      emoji="👩‍💻"
      link="https://faishasj.github.io/blog"
      colour={ COLOURS.highlightOrange }
    >
      blog
    </NavItem>
  </ul>
)

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  emoji: PropTypes.string,
  link: PropTypes.string,
  colour: PropTypes.string,
}

export default Header
