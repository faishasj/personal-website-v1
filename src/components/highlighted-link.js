import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./highlighted-link.css"

const setHoverTrue = (setHoverFunc) => () => setHoverFunc(true);

const setHoverFalse = (setHoverFunc) => () => setHoverFunc(false);

const HighlightedLink = ({ children, link, colour }) => {
  const [hover, setHover] = useState(false);
  return (
    link.startsWith("https") ? (
      <a 
      onMouseEnter={ setHoverTrue(setHover) }
      onMouseLeave={ setHoverFalse(setHover) }
        href={ link } 
        className={ hover ? "hover" : null }
        style={ hover ? { backgroundColor: colour }
                      : { color: colour }}
      >
        { children }
      </a>
    ) : (
      <Link 
      onMouseEnter={ setHoverTrue(setHover) }
      onMouseLeave={ setHoverFalse(setHover) }
        to={ link } 
        className={ hover ? "hover" : null }
        style={ hover ? { backgroundColor: colour }
                      : { color: colour }}
        activeStyle={{ backgroundColor : colour, 
                       color : 'black',
                       textDecoration: 'none',
                       fontWeight : '600' }}
      >
        { children }
      </Link>
    )
  );
}

HighlightedLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  colour: PropTypes.string,
}

export default HighlightedLink