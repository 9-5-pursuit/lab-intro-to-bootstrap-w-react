import Navbar from "./Navbar";
import postData from "./data/posts.json";
import images from "./images/index.js";
import Main from "./Main";
import Table from "./Table";
import Searchbar from "./Searchbar";

let arr = [];

for (let i of postData) {
  arr.push(i.location);
}

let obj = {};
for (let element of arr) {
  if (obj[element]) {
    obj[element] += 1;
  } else {
    obj[element] = 1;
  }
}

let result = Object.entries(obj).map(([key, value]) => ({ key, value }));

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <Navbar />
      </div>

      <div className="quote bg-light">
        <h2>Travel is the only thing you buy that makes you richer...</h2>
      </div>

      <div className="container my-5">
        <div className="row">
          <Searchbar />
        </div>

        <div className="row my-4 ">
          {/* */}

          <div className="main col-sm-12 col-md-8">
            <Main postData={postData} images={images} />
          </div>

          <div className="table col-12 col-md">
            <Table result={result} />
          </div>

          {/* */}
        </div>
      </div>

      <div className="footer bg-warning">
        <div className="contact">
          <a>Contact Me</a>
        </div>
        <div className="copyright-div">
          <p className="text-end px-2">
            Copyright <span className="fw-bold">MyTravelBlog</span> 2020
          </p>
        </div>
        <div className="about">
          <a>About the author</a>
        </div>
      </div>
    </div>
  );
}

export default App;
