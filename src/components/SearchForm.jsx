import React, { useContext } from "react";
import { SearchContext } from "../context";

const SearchForm = () => {
  const { handleSearch } = useContext(SearchContext);
  return (
    <form className="row form-group d-none d-sm-flex  align-items-center m-4">
      <div className="row">
        <div className="col">
          <label
            className="form-label"
            style={{ whiteSpace: "nowrap", marginLeft: "8rem" }}
          >
            Search posts by location...
          </label>
        </div>
        <div className="col-4">
          <input type="text" className="form-control" onChange={handleSearch} />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-warning ms-5">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
