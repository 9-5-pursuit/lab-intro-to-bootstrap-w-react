import React, { useContext } from "react";
import { SearchContext } from "./context";
import {
  Navbar,
  Hero,
  BlogsList,
  PostsLocation,
  SearchForm,
  Footer,
} from "./components";

function App() {
  const { showAlert, searchTerm } = useContext(SearchContext);

  return (
    <>
      <Navbar />
      <Hero />
      <SearchForm />
      {showAlert && (
        <div className="m-4 alert alert-danger text-center">
          No posts found with the search term "{searchTerm}". Please try again.
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <BlogsList />
          </div>
          <div className="col-md-4">
            <PostsLocation />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
