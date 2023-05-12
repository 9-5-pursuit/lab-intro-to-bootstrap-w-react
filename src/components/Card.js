import React from 'react'




export default function Card({posts, images, postData}) {
        
   
    function PostsContainer({ children }) {
        return (
          <div className="container">
            <div className="row g-3 g-xxl-4">
              {children}
            </div>
          </div>
        );
      }
      
      function PostsList({ posts }) {
        return (
          <div className="col-lg-8">
            <div className="row g-3 g-xxl-4">
              {posts.map((post) => <PostCard key={post.id} {...post} />)}
            </div>
          </div>
        );
      }
      
      function PostCard({
        content,
        location,
        title,
      }) {
      
        const normalizedLocation = location.trim().replaceAll(" ", "-").toLowerCase();
      
        return (
          <div className="col-12 col-md-6">
            <div className="card">
              <img src={images[normalizedLocation]} className="card-img-top post-image-height object-fit-cover" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle text-body-secondary mb-2">{location}</h6>
                <p className="card-text text-truncate">{content}</p>
                <button type="button" className="btn btn-warning float-end">Go to post ↗</button>
              </div>
            </div>
          </div>
        );
      }
      
      function PostsByLocation() {
      
        let postCounts = {};
        for (let post of postData) {
          postCounts[post.location] = postCounts[post.location] + 1 || 1;
        }
      
        const tableRows = [];
        for (let location in postCounts) {
          tableRows.push(
            <tr key={location}>
              <th scope="row">{location}</th>
              <td className="text-center">
                <span className="badge text-bg-secondary">{postCounts[location]}</span>
              </td>
            </tr>
          );
        }
      
        return (
          <div className="col-12 col-lg-4">
            <h2>Posts by <span className="text-warning">location</span></h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Location</th>
                  <th scope="col" className="text-center">Posts</th>
                </tr>
              </thead>
              <tbody>
                {tableRows}
              </tbody>
            </table>
          </div>
        );
      }
   
   
   
//     let location = posts.location.trim().replaceAll(" ","-").toLowerCase

     return (

<PostsContainer>
      <PostsList posts={posts} />
      <PostsByLocation />
    </PostsContainer>



        //     <div className='card' style='width: 18rem'>
        
            
            
//             <div key={posts.id} className="card-body">
//             <img src = {images[location]}/>
//             <h3 className='card-title'>{posts.title}</h3>
//              <p className='card-text'>{posts.location}</p>
//              <p className='card-text'>{posts.content}</p>
//         </div>
    
//     </div>
   )
 }

