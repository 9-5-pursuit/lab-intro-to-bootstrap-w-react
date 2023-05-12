import postData from "./data/posts.json";
import Navbar from './components/Navbar';
import Searchform from './components/Searchform'
import Card from './components/Card'
import images from './images/index'  
import Footer from './components/Footer'
import {useState} from 'react' 

import"./index.css"

function App() {
  const [posts, setPosts] = useState(postData);

  function handlePostFiltering(searchTerm) {
    console.log(searchTerm);
    let filteredPosts = postData.filter((post) => {
      return (
        post.location.toLowerCase().includes(searchTerm) || post.title.toLowerCase().includes(searchTerm)
      )
    });

    console.log(filteredPosts);

    setPosts(filteredPosts);
  }

  return <>
    <header>
      <Navbar />
      <div id="hero" className="bg-body-tertiary border-top border-bottom d-none d-md-block">
      <div className="container">
        <blockquote className="blockquote m-0 py-5 text-center">
          <p className="script-font h2 m-0">Travel is the only thing you buy that makes you richer...</p>
        </blockquote>
      </div>
    </div>
   </header>
   <main>
    <Searchform handlePostFiltering={handlePostFiltering}/>
    <aside>
      <Card postData={postData} posts={posts} images={images}/>
      
    </aside>
    <Footer />
   </main>
   
  </>;
}

export default App;
