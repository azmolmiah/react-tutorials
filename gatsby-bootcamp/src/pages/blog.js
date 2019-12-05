import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show here later</p>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(fm => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${fm.node.fields.slug}`}>
              <h2>{fm.node.frontmatter.title}</h2>

              <p>{fm.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
