import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <h1>About this project</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  )
}

export const Head = () => <title>About</title>

export default AboutPage