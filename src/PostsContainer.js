import React from 'react'
import PostCard from './PostCard';
import PostsList from './PostsList';
function PostsContainer({ children }) {
  return (
    <div className="container">
      <div className="row g-3 g-xxl-4">{children}</div>
    </div>
  );
}
export default PostsContainer