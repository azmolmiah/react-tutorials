import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        repudiandae iure ducimus fugit labore saepe ullam. Dolorum, minima
        tempore consequuntur corporis expedita, doloremque deleniti esse placeat
        soluta illum rerum. Porro.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum
        architecto autem incidunt maiores officia omnis explicabo neque
        veritatis placeat.
      </p>
      <Link to="/contact">Contact Me</Link>
    </Layout>
  )
}

export default AboutPage
