import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'


const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle={"About Me"}>
        <p>Hi there, I'm, Ossian, the creator of this site.</p>
      </Layout>
    </main>
  )
}


export const Head = () => <Seo title="About Me" />
export default AboutPage