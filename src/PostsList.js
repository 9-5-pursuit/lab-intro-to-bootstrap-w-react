import React from "react";
import PostCard from "./PostCard";
function PostsList({ posts }) {
  return (
    <div className="col-lg-8">
      <div className="row g-3 g-xxl-4">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default PostsList;
