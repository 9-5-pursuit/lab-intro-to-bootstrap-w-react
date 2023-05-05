import React, { useState } from "react";

function SearchBar({
  userInput,
  setUserInput,
  vacayPost,
  setVacayPost,
  postData,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    setVacayPost(postData);
    setUserInput("");
  }
  function handleUserInput(event) {
    let searched = event.target.value.toUpperCase();
    setVacayPost(
      postData.filter((i) => i.location.toUpperCase().includes(searched))
    );
    setUserInput(searched);
  }

  return (
    <form className="container-fluid form-inline">
      <div className="form-group mb-2" onSubmit={handleSubmit}>
        <label htmlFor="search" className="sr-only">
          Search posts by location...
        </label>
        <div className="form-group mx-sm-3 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleUserInput}
          />

          <button type="submit" className="btn btn-primary btn-warning">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
