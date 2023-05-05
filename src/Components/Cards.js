import React from "react";

function Cards({ id, title, content, location, image }) {
  return (
    <>
      <div className="card" style={{ height: "45vh", width: "25rem" }}>
        <img
          src={image}
          className="card-img-top img-fluid"
          alt="..."
          style={{ height: "200px", width: "400px" }}
        />
        <div className="card-body" key={id}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{location}</p>
          <p className="card-text">{content}</p>
          <a
            href="#"
            className="btn btn-warning"
            style={{ marginLeft: "15rem", "--bs-btn-padding-x": "1.5rem" }}
          >
            Go to post
          </a>
        </div>
      </div>
    </>
  );
}

export default Cards;
