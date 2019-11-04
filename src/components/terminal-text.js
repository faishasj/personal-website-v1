import React from "react"
import PropTypes from "prop-types"

import "./terminal-text.css"


const TerminalText = ({ children, command, style }) => (
  <div style={ style }>
    <p 
      class="command"
      style={{ width: (command.length * 10 - 5).toString() + 'px' }}
    >
      { command }
    </p>
      <div class="children">
          { children }
          <p class="caret">$ </p>
      </div>
  </div>
);

TerminalText.propTypes = {
  children: PropTypes.node.isRequired,
  command: PropTypes.string,
  style: PropTypes.object,
}

export default TerminalText