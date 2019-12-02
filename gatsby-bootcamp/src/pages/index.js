import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const index = () => {
  return (
    <Layout>
      <div>
        <h1 style={{ marginTop: "3rem", display: "block" }}>Hello.</h1>

        <h3>I am a Javascript developer or want to be.</h3>
        <p>
          Need a developer <Link to="/contact">Contact Me</Link>
        </p>
      </div>
    </Layout>
  )
}

export default index
