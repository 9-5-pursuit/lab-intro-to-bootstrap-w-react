import postData from "./data/posts.json";
import NavBar from "./Components/NavBar"
import TravelCards from "./Components/TravelCards";
import React, { useState, useEffect } from "react";
import PostsByLocation from "./Components/PostsByLocation";

function App() {
  const [post, setPost] = useState(postData);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function handlePost(event) {
    const input = event.target.value.toLowerCase();
    setPost(
      post.filter((itemObj) => itemObj.location.toLowerCase().includes(input)
      )
    )
    setValue(input);
  }

  useEffect(() =>{
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

  function PostsContainer({ children }) {
    return (
       <div className="container">
        <div className="row g-3 g-xxl-4">
          <div className="col-md-8">
            {children[0]}
          </div>
          <div className="col-md-4">
            {children[1]}
          </div>
        </div>
      </div>
    );
  }

  function handleCancel() {
    setPost(postData);
    setValue("");
    setError(false);
  }

  function Footer() {
    return (
      <footer className="bg-warning p-4 mt-4">
        <div className="row">
          <div className="col-lg-3 offset-lg-6">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link link-dark" href="#">
                  Contact me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-dark" href="#">
                  About the author
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <p className="mt-2">
              Copyright <strong>MyTravelBlog</strong> 2020
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  return (
    <div className="App">
      <main>
        <NavBar />
        <Header />
        {/* <div id="search" className="d-none d-md-block">
          <form>
            <label htmlFor="inputInfo" className="form-label m-2">
              Search posts by location...
            </label>
            <input
              value={value}
              type="text"
              className="d-inline w-50 m-3"
              id="inputInfo"
              onChange={(event) => handlePost(event)}
            />
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-warning m-3"
                onClick={() => setPost(postData)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div> */}
        <aside id="search" className="d-none d-md-block">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="container py-3 py-xxl-4">
              <div className="row">
                <label htmlFor="searchBar" className="col-auto col-form-label">
                  Search posts by location...
                </label>
                <div className="col">
                  <input
                    id="searchBar"
                    className="form-control"
                    name="searchBar"
                    type="text"
                    value={value}
                    onChange={(event) => handlePost(event)}
                  />
                </div>
                <div className="col-auto">
                  <button
                    type="click"
                    className="btn btn-warning"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </aside>
        {error === true ? (
          <div className="alert alert-danger" role="alert">
            No posts found with the search term "{value}". Please try again.
          </div>
        ) : (
          <PostsContainer>
            <TravelCards post={post} />
            <PostsByLocation postData={postData} />
          </PostsContainer>
        )}

        <Footer />
      </main>
    </div>
  );
}

export default App;
