import React, { useContext } from "react";
import Blog from "./Blog";
import { SearchContext } from "../context";

const BlogsList = () => {
  const { filteredPosts: posts } = useContext(SearchContext);
  return (
    <div className="container mt-4">
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-lg-6 mb-4">
            <Blog post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
