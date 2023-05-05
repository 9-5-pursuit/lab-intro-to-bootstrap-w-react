import React, { useContext } from "react";
import { SearchContext } from "../context";

const PostsLocation = () => {
  const { filteredPosts: posts } = useContext(SearchContext);
  return (
    <div className="container">
      <h4>
        Posts by <span className="text-warning">location</span>
      </h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Location</th>
            <th scope="col">Posts</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <th>{post.location}</th>
              <th>
                <span className="badge bg-secondary rounded-pill">1</span>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsLocation;
