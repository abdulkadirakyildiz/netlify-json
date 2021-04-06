import React from "react"
export default function JsonTemplate({ pageContext: { product} }) {//propsu pageCeontext harici veremiyroz... data olmuyor mesela
 // const product = data.allAlldataJson.nodes[0]  //Bu şekilde aşağıdaki grapql ile almış oluyoruz. Ancak aşağıdaki daha mantıklı ve masrafsız
// const { product } = pageContext; //gatsby-node dan CreatePage methodundan gelen props u almış olduk.
 //console.log(product)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={product.image.publicURL}
        style={{ height: 100, width: 100 }}
        alt="product image"
      />
      <div style={{marginTop:15}}>{product.name}</div>
      <div style={{marginTop:15, width:200}}>{product.description}</div>
      <div style={{marginTop:15}}>{product.price+" "+product.currency}</div>
      <div style={{marginTop:15}}>{product.rating}</div>
      <div style={{marginTop:15}}>{product.categories.map(item=><b key={item}>{item+"   "}</b>)}</div>
      <div style={{marginTop:15}}>{product.related_products.map(item=><b key={item}>{item+"   "}</b>)}</div>
      
    </div>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     allAlldataJson(filter: { slug: { eq: $slug } }) {
//       nodes {
//         image {
//           publicURL
//         }
//         slug
//         categories
//         currency
//         description
//         price
//         name
//         rating
//         related_products
//       }
//     }
//   }
// `
