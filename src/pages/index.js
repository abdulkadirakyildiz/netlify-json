import React from "react"
import { graphql, Link } from "gatsby"

const Home = ({ data }) => {
  return (
    <div>
      {data.allAlldataJson.nodes.map(item => (
        <ul> 
          <i>
            <Link style={{textDecoration: 'none',color: 'inherit'}} to={item.slug}>
            <div>{item.name}</div>
            <img src={item.image.publicURL} style={{height:50,width:50,margin:'auto 0px'}} alt="images" />
            </Link>
          </i>
        </ul>
      ))}
    </div>
  )
}

export const query = graphql`
  {
    allAlldataJson {
      nodes {
        name
        slug
        image {
          publicURL
        }
      }
    }
  }
`
export default Home
