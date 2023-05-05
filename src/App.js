import postData from "./data/posts.json";
import images from "./images/index";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import SearchBar from "./Components/SearchBar";
import { useState } from "react";

function PostsContainer({ children }) {
  // props.children refers to the components that live inside the 'parent' components
  return (
    <div className="container">
      {/** postslist and post by location live her in this div  */}
      <div className="row g-3 g-xxl-4">{children}</div>
    </div>
  );
}

function PostsList({ posts }) {
  // Makes the section of the page where the cards will load
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
  //Makes the post.json location value equal the key in the index.js in the images folder
  const normalizedLocation = location.replaceAll(" ", "-").toLowerCase();

  return (
    <div className="col-12 col-md-6">
      <div className="card">
        <img
          src={images[normalizedLocation]}
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
  //Counts how many times a location shows up in the Posts section
  for (let post of postData) {
    postCounts[post.location] = postCounts[post.location] + 1 || 1;
  }

  const tableRows = [];
  //This loops make each table row in the table in order for it to be place in the table being return below
  for (let location in postCounts) {
    tableRows.push(
      <tr key={location}>
        {/** the name of the location */}
        <th scope="row">{location}</th>
        <td className="text-center">
          {/** how many times it shows up  */}
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

function App() {
  const [posts, setPosts] = useState(postData);
  function handlePostFilter(search) {
    let filteredPosts = postData.filter((post) => {
      return (
        post.location.toLowerCase().includes(search) ||
        post.title.toLowerCase().includes(search)
      );
    });

    setPosts(filteredPosts);
  }
  return (
    <main>
      <Nav />
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
      <SearchBar handlePostFilter={handlePostFilter} />
      {/**post container has to written like this cause its being pass props.children */}
      <PostsContainer>
        <PostsList posts={posts} />
        <PostsByLocation />
      </PostsContainer>

      <Footer />
    </main>
  );
}

export default App;
