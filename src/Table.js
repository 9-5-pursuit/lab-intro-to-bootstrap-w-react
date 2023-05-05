import React from "react";

function Table({ result }) {
  return (
    <div className="table">
      <h3>
        Posts by <span className="text-warning">Location</span>
      </h3>

      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
          Location <span>Posts</span>
        </li>

        {result.map(({ key, value }) => {
          return (
            <li
              key={Math.random()}
              className="fw-bold list-group-item d-flex justify-content-between align-items-center"
            >
              {key}
              <span className="badge bg-secondary  rounded ">{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Table;
