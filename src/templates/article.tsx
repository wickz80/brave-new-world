
import * as React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layouts/layout";
import SEO from "../components/utils/seo";

interface ArticleProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        date: string,
        path: string,
        title: string
      }
    }
  }
}

export default ({ data }: ArticleProps) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h5>{new Date(frontmatter.date).toLocaleDateString(
          "en-US",
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }
        )}
        </h5>
        <br />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`