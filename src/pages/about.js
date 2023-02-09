import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <h1>This project</h1>
      <p>...is all about som toys and stuffed animals.</p>
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage