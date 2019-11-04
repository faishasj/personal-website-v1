import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"


export const BackgroundImage = ({ image, className, top, bottom, left, right }) => (
  <Img
    className={ className }
    fixed={ image }
    style={{ position: 'fixed',
            zIndex: -1,
            top: top ? 0 : 'auto',
            bottom: bottom ? 0 : 'auto',
            left: left ? 0 : 'auto',
            right: right ? 0 : 'auto' }}
  />
)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      spiro1: file(relativePath: { eq: "hypo.png" }) {
        childImageSharp {
          fixed(width: 297, height: 287) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      spiro2: file(relativePath: { eq: "epi.png" }) {
        childImageSharp {
          fixed(width: 267, height: 294) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      spiro3: file(relativePath: { eq: "epi2.png" }) {
        childImageSharp {
          fixed(width: 559, height: 203) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <>
      <Header/>
      <BackgroundImage image={data.spiro1.childImageSharp.fixed} className="partially-hidden-bg" bottom left/>
      <BackgroundImage image={data.spiro2.childImageSharp.fixed} className="partially-hidden-bg" top right/>
      <BackgroundImage image={data.spiro3.childImageSharp.fixed} className="hidden-bg" bottom right/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

BackgroundImage.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout