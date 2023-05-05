import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import images from "../images";

const Blog = ({ post }) => {
  const imagePath = images[post.location.toLowerCase().replace(/\s/g, "-")];

  return (
    <div className="card h-100" style={{ width: "18rem" }}>
      <img
        src={imagePath}
        className="card-img-top"
        style={{ height: "200px" }}
        alt="city"
      />
      <div className="card-body">
        <h5 className="card-title">{post.title.substring(0, 20)}...</h5>
        <p className="card-text">{post.content.substring(0, 90)}...</p>
        <div className="btn btn-warning">
          <a
            href="#home"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "10px",
            }}
          >
            Go To post
          </a>
          <BiArrowFromLeft />
        </div>
      </div>
    </div>
  );
};

export default Blog;
