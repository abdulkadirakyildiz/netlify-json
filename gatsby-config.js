module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,     
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/content/images/`,     
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
  ],
}


// { 
//   resolve: `gatsby-transformer-json`,
//   options: {
//     typeName: ({ node }) => (
//       console.log(node))
//      // node.name.charAt(0).toUpperCase() + node.name.slice(1))
//   }
// },



// { 
//   resolve: `gatsby-transformer-json`,
//   options: {
//     typeName: ({ node, object, isArray }) => {
//       if (isArray) {
//         return node.name.charAt(0).toUpperCase() + node.name.slice(1);
//       } else {
//         return _.upperFirst(_.camelCase(`${path.basename(node.dir)}`))
//       }
//     }
//   }
// },
