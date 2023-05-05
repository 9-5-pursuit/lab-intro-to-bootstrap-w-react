import React from "react";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white container mt-2">
      <div className="container-fluid">
        <a className="navbar-brand py-3" href="#">
          <strong>
            Travel <span className="text-warning">Blog</span>
          </strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active px-3" aria-current="page" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Popular posts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
