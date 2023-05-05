import React from "react";

function Search({ handleChange, searchQuery }) {
  return (
    <form>
      <div className="container mb-5 d-none d-md-block">
        <div className="row">
          <div className="col-sm-4 col-md-2">
            <label htmlFor="name" className="form-label">
              Search posts by location
            </label>
          </div>
          <div className="col-sm-5 col-md-7">
            <input
              className="form-control"
              type="search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <button className="btn btn-warning" type="submit">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Search;
