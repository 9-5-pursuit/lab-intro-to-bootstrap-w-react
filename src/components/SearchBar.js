import React from "react";
import { useDeferredValue } from "react";

function SearchBar({ value, postData, setPost, handlePost }) {
  return (
    <div>
      <form className=" m-2 d-flex align-items-center">
        <label htmlFor="inputInfo" className="form-label mr-2">
          Search posts by location...
        </label>
        <input
          value={value}
          type="text"
          className=" d-inline w-50 m-2"
          id="inputInfo"
          onChange={(event) => handlePost(event)}
        />
        <button
          type="click"
          className="btn  btn-warning  m-2"
          onClick={() => setPost(postData)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
