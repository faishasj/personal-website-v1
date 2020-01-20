import React from "react"

import HighlightedLink from "./highlighted-link"
import "./footer.css"


const Footer = () => (
  <div class="footer">
    <p>Built with <HighlightedLink link="https://www.gatsbyjs.org/" colour="silver">Gatsby</HighlightedLink><br></br>
    Hosted on <HighlightedLink link="https://pages.github.com/" colour="silver">GitHub Pages</HighlightedLink></p>
  </div>
);

export default Footer