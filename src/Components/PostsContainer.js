import data from "./data/posts.json";

function PostsContainer({ handleGetPosts }) {
  const { posts } = data;

  return (
    <div className="postsContainer">
      {posts.map((post) => (
        <Posts key={post.id} post={post} handleGetPosts={handleGetPosts} />
      ))}
    </div>
  );
}

export default PostsContainer;
