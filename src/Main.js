import React from "react";

function Main({ postData, images }) {
  return (
    <div className="container">
      <div className="alert alert-danger row" role="alert">
        No posts found with the term "{false}". Please try again.
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        {postData.map(({ id, title, location, content }) => {
          return (
            <div key={id} className="col">
              <div className="card">
                <img
                  src={images[location.replace(/\s+/g, "-").toLowerCase()]}
                  className="card-img-top"
                  alt="#"
                />
                <div className="card-body flex-column d-flex">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text ">
                    {content.slice(0, 35) + (content.length > 35 ? "..." : "")}
                  </p>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {location}
                  </h6>

                  <a
                    href="#"
                    className="align-self-end btn bg-warning text-dark btn-outline-warning "
                  >
                    Go to post{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
