import postData from "./data/posts.json";
import NavBar from "./Components/NavBar";
import PostsByLocation from "./Components/PostsByLocation";
import TravelCards from "./Components/TravelCards";
import Searchbar from "./Components/Searchbar";
import React, { useState, useEffect } from "react";
// import "./index.css";

function App() {
  const [post, setPost] = useState(postData);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  // console.log(postData);

  function handlePost(event) {
    // console.log(event.target.value);
    const input = event.target.value.toLowerCase();
    setPost(
      post.filter((itemObj) => itemObj.location.toLowerCase().includes(input))
    );
    setValue(input);
    // console.log(`post length is now ${post.length}`);
    // if (post.length === 0) setError(true);
    // console.log(event.target.value);
    // console.log(post);
  }

  // useEffect(() => {
  //   setPost(
  //     post.filter((itemObj) =>
  //       itemObj.location.toLowerCase().includes(value.toLowerCase())
  //     )
  //   );
  // }, [value]);

  useEffect(() => {
    if (post.length === 0) setError(true);
  }, [post]);

  function Header() {
    return (
      <h2>
        <div className="script-font text-center border-top display-6 border-bottom py-5">
          <span>Travel is the only thing that makes you richer...</span>
        </div>
      </h2>
    );
  }

  // console.log(postData);

  return (
    <div className="App">
      <main>
        <NavBar />
        <Header />
        {/* <p>{JSON.stringify(post)}</p> */}
        <div className="searchbar text-center">
          <Searchbar
            value={value}
            handlePost={handlePost}
            setPost={setPost}
            postData={postData}
          />
        </div>
        <div>
          {error === true ? (
            <div className="alert alert-danger" role="alert">
              No posts found with the search term "{value}". Please try again.
            </div>
          ) : (
            <div className="container col-lg">
              <div className="row row-cols-1 row-cols-md-2">
                <TravelCards post={post} />
              </div>
            </div>
          )}
        </div>
        <div className="col col-4">
          <div className="container fw-bold">
            <PostsByLocation postData={postData} />
          </div>
        </div>
        <div className="card text-bg-warning">
          <footer className="card-footer text-body-secondary">
            <h5>
              <div className="text-center">
                <a
                  href="#"
                  className="text-center text-decoration-none link-dark link-underline-opacity-0 m-5"
                >
                  Contact me
                </a>
                <span className="text-end text-decoration-none link-dark link-underline-opacity-0 fs-5">
                  Copyright
                  <span className="fw-bold text-decoration-none link-dark link-underline-opacity-0 fs-5">
                    MyTravelBlog
                  </span>
                </span>
              </div>
              <div className=""></div>
              <div className="text-center">
                <a
                  href="#"
                  className="text-decoration-none link-dark link-underline-opacity-0 fs-5"
                >
                  About the author
                </a>
              </div>
            </h5>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
