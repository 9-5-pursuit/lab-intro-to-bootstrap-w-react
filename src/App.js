// Import the useState hook from React
import { useState } from "react";

// Import the JSON data and images
import postData from "./data/posts.json";
import images from "./images/index";

// Import the components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import PostAside from "./components/PostAside";

function App() {
  // Define a state variable to store the search term
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* Render the NavBar component */}
      <NavBar />

      {/* Render the Hero component */}
      <Hero />

      {/* Render the container for the main content */}
      <div className="container-lg bd-gutter mt-3 my-md-4 bd-layout">
        {/* Render the search bar component and pass in the setSearchTerm function */}
        <SearchBar setSearchTerm={setSearchTerm} />

        {/* Render the main content */}
        <main className="bd-main order-1">
          {/* Render the sidebar */}
          <div className="bd-sidebar">
            {/* Render the Cards component and pass in the necessary props */}
            <Cards
              postData={postData}
              images={images}
              searchTerm={searchTerm}
            />
          </div>

          {/* Render the post aside */}
          <aside className="bd-toc mt-3 mb-5 my-lg-0 mb-lg-5 px-sm-1 text-body-secondary">
            {/* Render the PostAside component and pass in the postData prop */}
            <PostAside postData={postData} />
          </aside>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
