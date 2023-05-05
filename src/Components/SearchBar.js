import { useState } from "react";

export default function SearchBar({ handlePostFilter}) {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value.toLowerCase());
    handlePostFilter(e.target.value.toLowerCase());
  }

  function handleCancel() {
    setSearch("");
    handlePostFilter("");
  }
  //d-none d-md-block py-3 py-xxl-4
  return (
    <aside id="search" className="d-none d-md-block">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="container py-3 py-xxl-4">
          <div className="row">
            <label htmlFor="searchBar" className="col-auto col-form-label"> Search posts by location </label>
            <div className="col">
              <input
                type="text"
                name="searchBar"
                value={search}
                onChange={handleSearch}
                className="form-control"
              />
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-warning" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </aside>
  );
}
