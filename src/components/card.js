import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  card,
  
} from './card.module.css'

const Card = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className={card}>

      <h2>Title Placeholder</h2>
      {children}
    </div>
    
      
    
  )

  
  
}

export default Card