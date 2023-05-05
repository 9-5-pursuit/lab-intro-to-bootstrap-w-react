import React from "react";
import "../index.css";
function Nav() {
  return (
    <div className="d-flex align-items-center m-3">
      <h1 className="mr-3 ">
        Travel <span className="script-font text-warning">Blog</span>
      </h1>
      <a href="./something" className="m-3 link-dark text-decoration-none">
        About
      </a>
      <a href="./something" className="link-dark text-decoration-none">
        Popular posts
      </a>
    </div>
  );
}

export default Nav;
