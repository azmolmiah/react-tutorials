import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1 style={{ marginTop: "3rem", display: "block" }}>Hello.</h1>

      <h3>I am a Javascript developer or want to be.</h3>
      <p>
        Need a developer <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default index
