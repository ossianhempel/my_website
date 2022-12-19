import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle={"About Me"}>
        <p>Hi there, I'm, Ossian, the creator of this site.</p>
      </Layout>
    </main>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage