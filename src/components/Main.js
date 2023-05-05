// import React from "react";
// import Posts from "./Posts";
// // import postData from "./data/posts.json";
// import images from "../images/index";

// function Main({ postData }) {
//   // console.log(postData);

//   // this function is to lowercase and (split) remove any white spaces to ensure that locations match
//   // function imgLocation(postData) {}

//   // console.log(images[imgLocation]);

//   // function PostByLocation() {
//   let postCounts = {};
//   for (let post of postData) {
//     postCounts[post.location] = postCounts[post.location] + 1 || 1;
//   }

//   const tableRows = [];
//   for (let location in postCounts) {
//     tableRows.push(
//       <tr key={location}>
//         <th scope="row">{location}</th>
//         <td className="text-center">
//           <span className="badge text-bg-secondary">
//             {postCounts[location]}
//           </span>
//         </td>
//       </tr>
//     );
//   }

//   //   return (
//   //     <div className="col-12 col-lg-4">
//   //       <h2>
//   //         Posts by <span className="text-warning">location</span>
//   //       </h2>
//   //       <table className="table">
//   //         <thead>
//   //           <tr>
//   //             <th scope="col">Location</th>
//   //             <th scope="col" className="text-center">
//   //               Posts
//   //             </th>
//   //           </tr>
//   //         </thead>
//   //         <tbody>{tableRows}</tbody>
//   //       </table>
//   //     </div>
//   //   );
//   // }

//   return (
//     <>
//       <>
//         <div className="col-12 col-lg-4">
//           <h2>
//             Posts by <span className="text-warning">location</span>
//           </h2>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">Location</th>
//                 <th scope="col" className="text-center">
//                   Posts
//                 </th>
//               </tr>
//             </thead>
//             <tbody>{tableRows}</tbody>
//           </table>
//         </div>
//       </>
//       <>
//         {postData.map(({ title, content, location, id }) => (
//           <div key={id}>
//             {/* <img src={images[imgLocation]}></img> */}
//             <Posts
//               title={title}
//               content={content}
//               location={location}
//               id={id}
//             />
//           </div>
//         ))}
//       </>
//     </>
//   );
// }

// export default Main;
