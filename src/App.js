import postData from "./data/posts.json";
import images from "./images/index.js";

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

function handleSearch() {}

function App() {
  return (
    <div className="App">
      <div className="top-seciton">
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <span className="h2">Travel</span>{" "}
              <span className="h2 text-warning blog ">Blog</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Popular Posts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="quote bg-light">
          <h2>Travel is the only thing you buy that makes you richer...</h2>
        </div>
      </div>
      <div className="middle-section">
        <div className="search-bar">
          <form className="d-flex">
            <label htmlFor="search">Search posts by location...</label>

            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="search"
            />

            <button
              className="btn btn-outline-warning text-dark bg-warning my-2 my-sm-0"
              type="reset"
            >
              Cancel
            </button>
          </form>
        </div>
        <div className="main">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-3">
              {postData.map(({ id, title, location, content }) => {
                return (
                  <div key={id} /*{toggle} */ className="col">
                    <div className="card">
                      <img
                        src={
                          images[location.replace(/\s+/g, "-").toLowerCase()]
                        }
                        className="card-img-top"
                        alt="#"
                      />
                      <div className="card-body flex-column d-flex">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text ">
                          {content.slice(0, 35) +
                            (content.length > 35 ? "..." : "")}
                        </p>
                        <h6 className="card-subtitle mb-2 text-body-secondary">
                          {console.log(
                            images[location.replace(/\s+/g, "-").toLowerCase()]
                          )}
                          {location}
                        </h6>

                        <a
                          href="#"
                          className="align-self-end btn bg-warning text-dark btn-outline-warning "
                        >
                          Go to post{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-right-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="table">
          <h3>
            Posts by <span className="text-warning">Location</span>
          </h3>

          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
              Location <span>Posts</span>
            </li>

            {result.map(({ key, value }) => {
              return (
                <li
                  key={Math.random()}
                  className="fw-bold list-group-item d-flex justify-content-between align-items-center"
                >
                  {key}
                  <span className="badge bg-secondary  rounded ">{value}</span>
                </li>
              );
            })}
          </ul>
        </div>{" "}
      </div>

      <div className="footer">
        <div className="contact">
          <a>Contact Me</a>
        </div>
        <div className="copyright-div">
          <p>
            Copyright <span>MyTravelBlog</span> 2020
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
