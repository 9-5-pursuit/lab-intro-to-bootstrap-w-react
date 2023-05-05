import postData from "./data/posts.json";
import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import HeroQuote from "./Components/HeroQuote";
import Travel from "./Components/Travel";
import PostByLocation from "./Components/PostByLocation";
import Footer from "./Components/Footer";

function App() {
  const [post, setPost] = useState(postData);
  const [info, setInfo] = useState("");
  const [error, setError] = useState(false);

  function handleTextChange(event) {
    let input = event.target.value.toLowerCase();

    setPost(
      post.filter((postItem) => postItem.location.toLowerCase().includes(input))
    );

    setInfo(input);
  }
  useEffect(() => {
    if (post.length === 0) setError(true);
  }, [post]);
  return (
    <main>
      <NavBar />
      <HeroQuote />

      <div className="SearchBar">
        <form>
          <label htmlFor="info" className="form-label m-2">
            Search posts location...
          </label>
          <input
            type="text"
            value={info}
            id="info"
            onChange={(event) => handleTextChange(event)}
            className="d-inline w-50 m-2"
          />
          <button
            type="click"
            onClick={() => {
              setPost(postData);
            }}
            className="btn btn-warning m-3"
          >
            Cancel
          </button>
        </form>
        <div>
          {error === true ? (
            <div className="alert alert-danger">
              No posts found with the search term "{info}". Please try again.
            </div>
          ) : (
            <div className="container col-lg">
              <div className="row row-cols-1 row-cols-md-2">
                <Travel post={post} />
              </div>
            </div>
          )}

          <aside>
            <PostByLocation postData={postData} />
          </aside>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
