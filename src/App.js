import React, { useState } from 'react';

import postData from "./data/posts.json";

import Header from './Components/Header';
import Poster from './Components/Poster';
import Search from './Components/Search';
import PosterContainer from "./Components/PosterContainer";
import PostList from "./Components/PostList";
import PostLocations from './Components/PostLocations';

function App() {
  const [posts, setPosts] = useState(postData);

  return <main>
    <Header />
    <Poster />
    <Search postData={postData} posts={posts} setPosts={setPosts}/>

    <PosterContainer>
      <PostList posts={posts} />
      <PostLocations postData={postData} />
    </PosterContainer>
  </main>;
}

export default App;
