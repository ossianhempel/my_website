// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle={"Home Page"}>
        <p>I'm making this by following the Gatsby tutorial</p>
        <StaticImage 
          alt='Cute cat chilling' 
          src='../images/cute_cat.jpeg'
          />
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage