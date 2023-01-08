// Step 1: Import React
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import Card from '../components/card.js'
import { 
  mainContent,
  mainContentUpperLeft,
  mainContentUpperRight,
  mainContentMiddle,
  mainContentMiddleLeft,
  mainContentMiddleMiddle,
  mainContentMiddleRight,
  mainContentLowerLeft,
  mainContentLowerRight,
  portrait,
} from './index.module.css'


// // Step 2: Define your component
const IndexPage = ({ data }) => {
  // const { date, title, slug } = data.mdx.frontmatter;

  return (
    <main>
      <Layout pageTitle={"Hey There!"}>
        <div className={mainContent}>
            <div className={mainContentUpperLeft}>
              <p>I'm Ossian. </p>
              <p>During the day, I'm a Programmatic Specialist at GroupM with a Master's Degree in Business Administration: Marketing.</p>
              <p>During the night, I'm self-studying web development and data science.</p>
              <p>This site is a sandbox for me to experiment with web development, digital marketing, and writing. Hopefully, I will also put up some projects and potentially build out a portfolio here.</p>
            </div>
            <div className={mainContentUpperRight}>
              <StaticImage 
              // imgClassName={portrait}
              className={portrait}
              alt='Self-portrait' 
              src='../images/me_groupm_color.jpeg'
              />
            </div>
            <div className={mainContentMiddle}>
              <div className={mainContentMiddleLeft}>
                <Card>
                  <p>Title: {data.mdx.frontmatter.title}</p>
                  children test

                </Card>
              </div>
              <div className={mainContentMiddleMiddle}>
                <Card></Card>
              </div>
              <div className={mainContentMiddleRight}>
                <Card></Card>
              </div>
            </div>
            <div className={mainContentLowerLeft}>
              Content
            </div>
            <div className={mainContentLowerRight}>
              Content
            </div>

        </div>
      </Layout>
    </main>
  )
};

export const query = graphql`
  query MyQuery {
    mdx(frontmatter: {title: {eq: "My First Post"}}) {
      frontmatter {
        date
        title
        slug
      }
    }
  }
`



// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage