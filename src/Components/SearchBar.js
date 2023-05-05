import React from "react";
import postData from "../data/posts.json";

//SearchBar Component
function SearchBar({ value, postData, setPost, handlePost }) {
  return (
    <div>
      <form className="searchBar form-inline">
        <label htmlFor="inputInfo" className="form-label m-2">
          Search posts by location...
        </label>
        <input
          type="text"
          value={value}
          className="d-line w-50 m-2"
          id="inputInfo"
          onChange={(event) => handlePost(event)}
        />

        <button
          type="click"
          className="btn btn-primary mb-2 btn-warning"
          onClick={() => setPost(postData)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
