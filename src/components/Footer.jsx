import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-warning sticky-footer">
      <div className="container-fluid text-center">
        <div className="row flex-column flex-sm-row">
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <a
                  href="#contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact Me
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About the author
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <p className="mb-0">
              &copy; <strong>MyTravelingBlog</strong> {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
