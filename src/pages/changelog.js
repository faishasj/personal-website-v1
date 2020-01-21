import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TerminalText from "../components/terminal-text"
import { COLOURS } from "../constants.js"
import "./changelog.css"


const TimelineGroup = ({ children, version }) => (
  <div class="timeline-group">
    <div class="circle"></div>
    <div class="version">{ version }</div>
    { children }
  </div>
);

const TimelineItem = ({ children, tag }) => (
  <table class="timeline-item">
    <td>
      <span
        style={{
          ...{ color: 'black', fontWeight: '700', borderRadius: '10px'}, 
          ...(tag === "Life Event" ? { backgroundColor: COLOURS.highlightBlue } : null),
          ...(tag === "Education" ? { backgroundColor: COLOURS.highlightOrange } : null),
          ...(tag === "Career" ? { backgroundColor: COLOURS.highlightPink } : null),
          ...(tag === "Personal" ? { backgroundColor: COLOURS.highlightGreen } : null),
        }}
      >
        &nbsp;{ tag }&nbsp;
      </span>&nbsp;
    </td>
    <td>
      { children }
    </td>
  </table>
);

const ChangelogPage = () => (
  <Layout>
    <SEO title="changelog"/>
    <div class="changelog-container">
      <TerminalText command="$ cat changelog.md">
        <div class="timeline">
        <TimelineGroup version="v20.1.0">
            <TimelineItem tag="Career">Brought on to continue working as an AR/VR developer and making 
            exciting and valuable XR applications at Monash University. 💡</TimelineItem>
          </TimelineGroup>
          <TimelineGroup version="v19.7.6">
            <TimelineItem tag="Education">Interned at Monash University as an AR/VR developer, 
              prototyping innovative and ethical XR applications for educators and researchers. 🚀<br/><br/>
              In another project, planned, managed, user-tested and implemented the overhaul of the organisation’s 
              intranet system to a more modern, user-friendly and productive system within a small team of three. 👩‍💻</TimelineItem>
          </TimelineGroup>
          <TimelineGroup version="v19.6.0">
            <TimelineItem tag="Career">Became a web crawling analyst at Jora, keeping more than 
              25,000 crawlers running for Jora's job search engine. 🕷🔍</TimelineItem>
          </TimelineGroup>
          <TimelineGroup version="v19.5.0">
            <TimelineItem tag="Career">Was invited to deliver a lecture on Version Control Software and 
                Git to final year students, as a second year student, at Monash. 😎</TimelineItem>
            <TimelineItem tag="Personal">Joined Monash Connected Autonomous Vehicles as 
            a software engineer working on the car's path planning algorithm. 🏎</TimelineItem>
          </TimelineGroup>
          <TimelineGroup version="v18.10.0">
            <TimelineItem tag="Personal">Became Tech Officer at Monash diversIT, 
              an initiative to support underrepresented students in tech. 🌈👩‍💻</TimelineItem>
          </TimelineGroup>
          <TimelineGroup version="v18.2.2">
            <TimelineItem tag="Education">Started Bachelor of Computer Science Advanced (Hons) at Monash University. 🏫</TimelineItem>
            <TimelineItem tag="Life Event">Moved from KL to Melbourne, Australia. G'day! 🛫</TimelineItem>
            <TimelineItem tag="Education">Graduated high school in KL, Malaysia. 🎓</TimelineItem>
          </TimelineGroup>
          <TimelineGroup version="v15.9.0">
            <TimelineItem tag="Personal">Impulsively dropped out of GCSE History and switched 
              to Computer Science. Found a lifelong passion, hobby and career. 😍</TimelineItem>
          </TimelineGroup>
          <TimelineGroup version="v0.7.13">
            <TimelineItem tag="Life Event">Hello, World! 👼</TimelineItem>
          </TimelineGroup>
        </div>
      </TerminalText>
    </div>
  </Layout>
);

TimelineGroup.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
}

TimelineItem.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
}

export default ChangelogPage
