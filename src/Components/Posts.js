import React from "react";

function Posts({ post, images }) {
  const { location, title, id } = post;
  let img = location.toUpperCase().replace(" ", "-");
  return (
    <>
      <div className="col-md">
        <div className="card mb-4" key={id}>
          <img src={images[img]} className="post-image-height card-img-top" />
          <div className="card-body">
            <p>{title}</p>
            <h6 className="text-muted">{location}</h6>
            <p>
              {post.content.substring(0, 60)}
              ...
            </p>
            <div className="d-flex justify-content-md-end">
              <button className="btn btn-warning">Go to post ↠</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
