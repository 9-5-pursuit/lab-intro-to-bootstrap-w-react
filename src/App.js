import postData from "./data/posts.json";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TravelCards from "./Components/TravelCards";
// import Card from "./Components/Card";
import PostsByLocation from "./Components/PostsByLocation";
import SearchBar from "./Components/SearchBar";
import React, { useState, useEffect } from "react";
// import "./index.css";

//Table Component
function Table() {
  return <div></div>;
}

//App Component
function App() {
  const [post, setPost] = useState(postData);
  const [value, setValue] = useState();
  const [error, setError] = useState(false);
  // console.log(postData);

  function handlePost(event) {
    const input = event.target.value.toLowerCase();

    setPost(
      postData.filter((objItem) =>
        objItem.location.toLowerCase().includes(input)
      )
    );
    setValue(input);
  }

  useEffect(() => {
    if (post.length === 0) setError(true);
  }, [post]);

  return (
    <div className="App">
      <Nav />
      <div>
        <Header />
        {/* <p>{JSON.stringify(post)}</p> */}
        <div>
          <SearchBar
            value={value}
            postData={postData}
            handlePost={handlePost}
            setPost={setPost}
          />
          <div>
            {error === true ? (
              <div className="alert alert-danger">
                No posts found with the search term "{value}"
              </div>
            ) : (
              <div className="container col-lg">
                <div className="row row-cols-1 row-cols-md-2">
                  <TravelCards post={post} />
                </div>
              </div>
            )}
          </div>
        </div>
        <aside>
          <aside>
            <PostsByLocation postData={postData} />
          </aside>
        </aside>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
