import React from 'react';
import images from '../images/index'
const CardList = ({ cards }) => {
    let val = ""
    if (cards.location.toLowerCase()=='san francisco') val = "san-francisco"
    else if (cards.location.toLowerCase()=='san diego') val = "san-diego"
    else val = cards.location.toLowerCase()
  return (
    <div className="col-md-6">
      <div className="card">
        <img src={images[val]} className='post-image-height' alt='city'/>
        <div className="card-header">{cards.title}</div>
        <h6 className="card-subtitle px-3 py-1 text-muted">{cards.location}</h6>
        <div className="card-body">
          <p className="card-text">{cards.content.substring(0, 35)}...</p>
          <a href="#" className="btn btn-warning">Go to post</a>
        </div>
      </div>
    </div>
  );
};

export default CardList;