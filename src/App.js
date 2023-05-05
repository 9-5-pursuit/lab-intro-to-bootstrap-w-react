import { useState } from "react";
import postData from "./data/posts.json";
import postImages from "./images/index";

function Header() {
  return (
    <header id="header">
      <nav className="navbar navbar-expand">
        <div className="container">
          <a className="navbar-brand fs-1 fw-bold" href="#">
            Travel <span className="script-font text-warning">Blog</span>
          </a>

          <ul className="navbar-nav me-auto ms-5">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Popular posts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div
      id="hero"
      className="bg-body-tertiary border-top border-bottom d-none d-md-block"
    >
      <div className="container">
        <blockquote className="blockquote m-0 py-5 text-center">
          <p className="script-font h2 m-0">
            Travel is the only thing you buy that makes you richer...
          </p>
        </blockquote>
      </div>
    </div>
  );
}

function Search({ handlePostFiltering }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(e) {
    setSearchTerm(e.target.value.toLowerCase());
    handlePostFiltering(e.target.value);
  }

  function handleSearchCancel() {
    setSearchTerm("");
    handlePostFiltering("");
  }

  return (
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
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-warning"
                onClick={handleSearchCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </aside>
  );
}

function PostsContainer({ children }) {
  return (
    <div className="container">
      <div className="row g-3 g-xxl-4">{children}</div>
    </div>
  );
}

function PostsList({ posts }) {
  return (
    <div className="col-lg-8">
      <div className="row g-3 g-xxl-4">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

function PostCard({ content, location, title }) {
  const normalizedLocation = location.trim().replaceAll(" ", "-").toLowerCase();

  return (
    <div className="col-12 col-md-6">
      <div className="card">
        <img
          src={postImages[normalizedLocation]}
          className="card-img-top post-image-height object-fit-cover"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle text-body-secondary mb-2">{location}</h6>
          <p className="card-text text-truncate">{content}</p>
          <button type="button" className="btn btn-warning float-end">
            Go to post ↗
          </button>
        </div>
      </div>
    </div>
  );
}

function PostsByLocation() {
  let postCounts = {};
  for (let post of postData) {
    postCounts[post.location] = postCounts[post.location] + 1 || 1;
  }

  const tableRows = [];
  for (let location in postCounts) {
    tableRows.push(
      <tr key={location}>
        <th scope="row">{location}</th>
        <td className="text-center">
          <span className="badge text-bg-secondary">
            {postCounts[location]}
          </span>
        </td>
      </tr>
    );
  }

  return (
    <div className="col-12 col-lg-4">
      <h2>
        Posts by <span className="text-warning">location</span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Location</th>
            <th scope="col" className="text-center">
              Posts
            </th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
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

function App() {
  const [posts, setPosts] = useState(postData);

  function handlePostFiltering(searchTerm) {
    console.log(searchTerm);
    let filteredPosts = postData.filter((post) => {
      return (
        post.location.toLowerCase().includes(searchTerm) ||
        post.title.toLowerCase().includes(searchTerm)
      );
    });

    console.log(filteredPosts);

    setPosts(filteredPosts);
  }

  return (
    <main>
      <Header />
      <Hero />
      <Search handlePostFiltering={handlePostFiltering} />

      <PostsContainer>
        <PostsList posts={posts} />
        <PostsByLocation />
      </PostsContainer>

      <Footer />
    </main>
  );
}

export default App;
