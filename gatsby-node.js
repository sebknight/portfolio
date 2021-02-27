// const Promise = require('bluebird')
// const path = require('path')

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const blogPost = path.resolve('./src/components/Work.jsx')
//     resolve(
//       graphql(
//         `
//           {
//             allContentfulProject {
//               edges {
//                 node {
//                  id
//                  title
//                  description
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }

//         const projects = result.data.allContentfulProject.edges
//         posts.forEach(post => {
//           createPage({
//             path: `/blog/${post.node.slug}/`,
//             component: blogPost,
//             context: {
//               slug: post.node.slug,
//             },
//           })
//         })
//       })
//     )
//   })
// }
