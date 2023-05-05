import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          Travel <span className="script-font text-warning">Blog</span>
        </a>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <a className="nav-link" href="#" rel="About">
              About
            </a>
            <a className="nav-link" href="#" rel="Popular Posts">
              Popular posts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
