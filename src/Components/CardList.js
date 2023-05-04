import React from 'react';
import burano from "../images/burano.jpg";
import chicago from "../images/chicago.jpg";
import dubai from "../images/dubai.jpg";
import london from "../images/london.jpg";
import porto from "../images/porto.jpg";
import sanDiego from "../images/san-diego.jpg";
import sanFrancisco from "../images/san-francisco.jpg";
import seattle from "../images/seattle.jpg";
import sevilla from "../images/sevilla.jpg";
import shibuya from "../images/shibuya.jpg";

const CardList = ({ cards }) => {
    const nimages = [burano, chicago, dubai, london, porto, sanDiego, sanFrancisco, seattle, sevilla, shibuya] 
  return (
    <div className="col-md-6">
      <div className="card">
        <img src={nimages[Math.floor(Math.random() * nimages.length)]} className='img-fluid' alt='city'/>
        <div className="card-header">{cards.title}</div>
        <h6 className="card-subtitle px-3 py-1 text-muted">{cards.location}</h6>
        <div className="card-body">
          <p className="card-text">{cards.content.substring(0, 30)}...</p>
          <a href="#" className="btn btn-warning">Go to post</a>
        </div>
      </div>
    </div>
  );
};

export default CardList;