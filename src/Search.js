import React from "react";
import { useState } from "react";
import PostsContainer from "./PostsContainer";
// import postData from "/.data/posts.json"
function Search({ handlePostFiltering }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(event) {
    setSearchTerm(event.target.value.toLowerCase());
    handlePostFiltering(event.target.value);
  }
  function handleSearchCancel() {
    setSearchTerm("");
    handlePostFiltering("");
  }
  return (
    <aside id="search" className="d-none d-md-block">
      <form onSubmit={(event) => event.preventDefault()}>
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


export default Search;
