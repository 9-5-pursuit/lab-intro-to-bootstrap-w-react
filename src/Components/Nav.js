import React from 'react'

function nav() {
  return (
    
    <div className="d-flex align-items-center m-3">
      <h1 className="mr-3">
        Travel
        <span className="script-font text-warning ">Blog</span>
      </h1>
      <a href="www" className="m-3 link-dark text-decoration-none ">
        About
      </a>
      <a href="www" className="link-dark text-decoration-none m-3">
        Popular posts
      </a>
    </div>
  );
}

export default nav