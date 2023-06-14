import React, { useState } from "react";
import postData from "./data/posts.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = postData.filter((post) => {
    const { title, location } = post;
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(lowercaseSearchTerm) ||
      location.toLowerCase().includes(lowercaseSearchTerm)
    );
  });

  return (
    <main>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Render filtered posts */}
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.location}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </main>
  );
}

export default App;
