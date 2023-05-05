import React from "react";

function Searchbar() {
  function handleSearch(e) {
    let value = e.target.value.toLowerCase();
    let card = document.querySelectorAll(".card");
    let subtitle = document.querySelectorAll(".card-subtitle");
    let alert = document.querySelector(".alert");

    for (let i = 0; i < card.length; i++) {
      if (subtitle[i].textContent.toLowerCase().includes(value)) {
        card[i].style.display = "block";
      } else if (!subtitle[i].textContent.toLowerCase().includes(value)) {
        card[i].style.display = "none";
      }
    }
  }
  return (
    <div className="search-bar">
      <form className="d-flex">
        <label htmlFor="search">Search posts by location...</label>

        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          id="search"
          onChange={handleSearch}
        />

        <button
          className="btn btn-outline-warning text-dark bg-warning my-2 my-sm-0"
          type="reset"
        >
          Cancel
        </button>
      </form>{" "}
    </div>
  );
}

export default Searchbar;
