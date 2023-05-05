import React, { useState, useEffect } from "react";
import postData from "./data/posts.json";
// components
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Posts from "./Components/Posts";
import PostsByLocation from "./Components/PostsByLocation";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
// indexs
import "./index.css";
import images from "./images/index";

function App() {
  const [vacayPost, setVacayPost] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(false);

  // the hook that runs (s)ide (e)ffects independently of rendering.
  // Put se logic into the callback function then use the dependencies argument to control when se runs

  useEffect(() => {
    if (vacayPost.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  }, [vacayPost]);

  return (
    <>
      <NavBar />
      <Header />
      <div className="container-lg row g-2">
        <SearchBar
          setVacayPost={setVacayPost}
          userInput={userInput}
          setUserInput={setUserInput}
          postData={postData}
        />
        <main className="bd-main col-md-8">
          <div className="container">
            <div className="row align-items-start">
              <div className="col">
                {error ? (
                  <>
                    <div className="alert alert-danger">
                      No post found with the search term "{userInput}". Please
                      try again.
                    </div>
                  </>
                ) : (
                  <div className="container">
                    <div className="row align-items-start row-cols-1 row-cols-md-2">
                      {vacayPost.map((post) => {
                        return <Posts images={images} post={post} />;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <aside className="text-body-secondary col-md-4">
          <PostsByLocation postData={postData} />
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default App;
