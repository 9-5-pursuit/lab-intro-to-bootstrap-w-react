import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
//import Nav from "./components/Nav";
import postData from "./data/posts.json";
import TravelCards from "./components/TravelCards";
import PostsByLocation from "./components/PostsByLocation";

function App() {
  const [post, setPost] = useState(postData);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  //console.log(postData);

  function handlePost(event) {
    // console.log(event.target.value);
    //to avoid case sensitivity set all inputs to lowercase
    const input = event.target.value.toLowerCase();
    setPost(
      postData.filter((obj) => obj.location.toLowerCase().includes(input))
    );
    setValue(input);
  }

  useEffect(() => {
    if (post.length === 0) setError(true);
  }, [post]);

  return (
    <div className="App">
      <main>
        <div>
          <Header />
          <SearchBar
            value={value}
            postData={postData}
            handlePost={handlePost}
            setPost={setPost}
          />
        </div>
        <div>
          {error === true ? (
            <div className="alert alert-danger">
              No posts found with the search term '{value}'
            </div>
          ) : (
            <div className="container col-lg">
              <div className="row row-cols-1 row-cols-md-2">
                <TravelCards post={post} />
              </div>
            </div>
          )}
        </div>
        <aside className="col col-4">
          <aside className="container fw-bold">
            <PostsByLocation postData={postData} />
          </aside>
        </aside>

        <Footer />
      </main>
    </div>
  );
}

export default App;
