import React from "react";

function Footer() {
  return (
    <footer className="container-fluid">
      <div className="container align-items-center bg-warning">
        <p className="row d-block p-2 text-body-secondary">
          <div className="col-sm"></div>
          <a className="col-sm" href="#" rel="contact">
            Contact Me
          </a>
          <a href="#" rel="About the author">
            About the author
          </a>
        </p>

        <p className="col-sm">
          Copyright <strong>MyTravelBlog</strong>2020
        </p>
      </div>
    </footer>
  );
}
// taking too much time
export default Footer;
