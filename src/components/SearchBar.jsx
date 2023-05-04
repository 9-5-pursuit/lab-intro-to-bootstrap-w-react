import { useState } from "react";
export default function SearchBar({ setSearchTerm }) {
  const [startSearch, setStartSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const localString = startSearch;
    //console.log(localString);
    setSearchTerm(localString);
  }
  function handleTextChange(event) {
    const userSearch = event.target.value;
    setStartSearch(userSearch);
  }

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <label htmlFor="SearchPosts" className="fs-6">
        Search posts by location...
      </label>
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleTextChange}
      ></input>
      <button type="submit" className="btn btn-warning">
        Search
      </button>
    </form>
  );
}
