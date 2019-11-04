import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter,  faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TerminalText from "../components/terminal-text"
import "./index.css"


const ReadmePage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="readme" />
      <div class="readme-container">
        <div class="left">
          <div class="profile-pic">
              <Img fixed={data.image.childImageSharp.fixed} alt="Faisha"/>
          </div>
          <div class="bio-snippet">
            <p class="title">Faisha Surjatin</p>
            <p class="caption">Computer science undergrad and AR/VR developer at Monash University. All-round computer science nerd. Not a web dev.</p>
            <div class="socials">
              <a href="https://github.com/faishasj"><FontAwesomeIcon icon={faGithub}/></a>&nbsp;
              <a href="https://twitter.com/faishasj"><FontAwesomeIcon icon={faTwitter}/></a>&nbsp;
              <a href="https://www.linkedin.com/in/faisha-surjatin/"><FontAwesomeIcon icon={faLinkedin}/></a>&nbsp;
              <a href="mailto:faisha@faisha.dev"><FontAwesomeIcon icon={faEnvelope}/></a>
            </div>
          </div>
        </div>
        <div class="right">
          <TerminalText command="$ cat readme.md">
            <p>Hello, World! My name is Faisha and I am a programmer and computer science undergrad.</p>
            <p>I'm into all things tech, electronics, autonomous cars, and diversity in tech. And if you can't tell, I really like spirographs.</p>
            <p>When I’m not deep into having an existential crisis, I’m starting another side project that will inevitably be forgotten.</p>
          </TerminalText>
        </div>
      </div>
    </Layout>
  );
}

export default ReadmePage
