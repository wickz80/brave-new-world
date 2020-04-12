import * as React from "react"
import Layout from "../components/layouts/layout"
import ArticleListItem from "../components/article/article-list-item"
import { graphql } from "gatsby"
import SEO from "../components/utils/seo"

export const queryArticles = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
            author
          }
        }
      }
    }
  }
`

export interface ArchiveProps {
  data: {
    allMdx: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              date: string
              path: string
              title: string
              author: string
            }
          }
        }
      ]
    }
  }
}

const Archive: React.FunctionComponent<ArchiveProps> = ({ data }: ArchiveProps) => (
  <Layout>
    <SEO title="archive" />
    {data.allMdx.edges.map((article, i) => (
      <>
        <ArticleListItem {...article.node.frontmatter} key={article.node.id} />
        {i < data.allMdx.edges.length - 1 && <hr />}
      </>
    ))}
  </Layout>
)

export default Archive
