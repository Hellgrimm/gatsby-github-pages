import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from "../../components/Layout"
import * as styles from "../../styles/characters.module.css"
import Img from "gatsby-image"

export default function Characters({ data }) {
  console.log(data)
  const characters = data.allMarkdownRemark.nodes

  return (
    <Layout>
    <div className={styles.characters}>
        <h2>Characters Page</h2>
        <div className={styles.projects}>
          {characters.map(character =>(
            <Link to = {"/characters/" + character.frontmatter.slug} key={character.id}>
              <div>
                <Img fluid={character.frontmatter.thumb.childImageSharp.fluid}/>
                <h3>{character.frontmatter.title}</h3>
                <p>{character.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
    </Layout>
  );
}

//exports page query
export const query = graphql`
query CharactersPage {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "characters"}}}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`