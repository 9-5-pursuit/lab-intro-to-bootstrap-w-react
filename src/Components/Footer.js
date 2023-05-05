import React from "react";

function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-warning text-start fs-6 mt-4"
        style={{ height: "15vh" }}
      >
        <div className="row pt-3">
          <div className="col-md-6"></div>
          <div className="col-md-2">
            <div className="col">Contact me</div>
            <div className="col">About the author</div>
          </div>

          <div className="col-md-4">
            <div className="col">
              Copyright<strong>MyTravelBlog</strong>2020
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
