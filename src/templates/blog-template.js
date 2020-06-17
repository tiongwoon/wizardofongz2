import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import SEO from "../components/seo"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
     <SEO title={post.frontmatter.shorttitle} />
      <div>
        <h1 className="secondary-title-font normal-text-yellow centering">{post.frontmatter.title}</h1>
        <h4 className="date-on-post normal-text-red centering">
          Posted on {post.frontmatter.date}
        </h4>
        {/* This gets the actual text from the markdown */}
        <div className="normal-text-yellow essay-container" dangerouslySetInnerHTML={{ __html: post.html }} /> 
      </div>
      <Link to="/writings"><div className="back-button">Back to list</div></Link>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        shorttitle
      }
    }
  }
`
