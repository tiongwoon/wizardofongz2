import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from '../components/seo'
import { graphql } from 'gatsby'

export default function Writings({ data }) {
  return (
    <Layout>
        <SEO title="Writings" />
      <h1 className="secondary-title-font normal-text-yellow">Writings</h1>
      <p className="tertiary-title-font ">My thoughts and curiosities including but not limited to decentralisation, philosophy and personal development.</p>
      <hr/>
      {data.allMarkdownRemark.edges.map(post => (
        <div className="list-container" key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted on {post.node.frontmatter.date}
          </small>
          &nbsp; &nbsp; &nbsp;<Link to={post.node.frontmatter.path}><span>Read More</span></Link>
          <br />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark
    (sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date
            title
            path
          }
        }
      }
    }
  }
`
