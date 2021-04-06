const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  //netlify için imagenin yolunda sıkıntı çıkıyordu onu burdan müdahele ederek değiştiriyoruz...
  if (node.internal.type === `Alldata`) {
      const imageRelativePath = node.image.replace("src/content", "..")
      createNodeField({
        node,
        name: `image`,
        value: imageRelativePath,
      })
  }

  if (node.internal.mediaType === `application/json`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
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
      allAlldataJson {
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
        product: node,
      },
    })
  })
}
