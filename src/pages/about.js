import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { FaMedium, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa"

export default function About({ data }) {
  return (
    <Layout>
      <SEO title="About Me" />
      <h1 className="secondary-title-font normal-text-yellow">About Me</h1>
      <hr/>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="a pop art photo of the wizard"
      />
      <p className="essay-container normal-text-yellow">
        Hey, my name is Tiong Woon and above is a photo of me in pop art style
        (my hair is darker in real life). I am a Malaysian of Chinese descent.
        My main passions are reading,{" "}
        <a target="blank" href="https://www.mixcloud.com/zandder/">
          <span style={{ fontWeight: "900", color: "#FEF8D6" }}>DJ-ing</span>
        </a>
        , football (Manchester United diehard fan here), and running. I mainly
        read non-fictions about philosophy, human history, mental models, and
        anything from Nassim Taleb, Naval Ravikant, Robert Greene, Yuval Noah
        Harari, and Mark Manson. I started this blog as a medium to share my
        thoughts on a range of topics such as philosophy, tech, and personal
        development. I also want to exercise my web development skills and what
        better way than to build something for yourself ;). Feel free to reach
        out to me via the channels below.
      </p>
      <a
        className="social-link-icon"
        target="blank"
        aria-label="Link to Medium profile"
        href="https://medium.com/@ongtiongwoon"
      >
        <FaMedium />
      </a>
      <a
        className="social-link-icon"
        aria-label="Link to email the author"
        href="mailto:ongtiongwoon@gmail.com"
      >
        <FaEnvelope />
      </a>
      <a
        className="social-link-icon"
        target="blank"
        aria-label="Link to Linkedin profile"
        href="https://www.linkedin.com/in/tiong-woon-ong-ab731613b/"
      >
        <FaLinkedinIn />
      </a>
      <a
        className="social-link-icon"
        target="blank"
        aria-label="Link to Twitter profile"
        href="https://twitter.com/wizardofongz"
      >
        <FaTwitter />
      </a>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "face.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 306, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
