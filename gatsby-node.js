const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  // console.log(node);
  const { createNodeField } = actions
  if (node.internal.mediaType === `application/json`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    console.log(node)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allAlldataJson{
        nodes {
          image {
            publicURL
          }
          slug
          categories
          currency
          description
          price
          name
          rating
          related_products
        }
      }
    }
  `)

  result.data.allAlldataJson.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/JsonTemplate.js`),
      context: {
        //slug: node.slug,
        product: node
      },
    })
  })
}
