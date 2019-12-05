import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "Do MMM YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <p>Posts will show here later</p>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(fm => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${fm.node.slug}`}>
              <h2>{fm.node.title}</h2>

              <p>{fm.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
