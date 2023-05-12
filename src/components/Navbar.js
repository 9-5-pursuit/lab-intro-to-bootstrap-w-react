import React from 'react'

function navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand">
    <div className="container">
    <a className="navbar-brand fs-1 fw-bold" href="#">Travel<span className='script-font text-warning'>Blog</span> </a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">About</a> */} 
       <ul className='navbar-navmme-auto ms-5'>
         <li>
         <a className="nav-link" aria-current="page" href="#">About</a>
         </li>
         <li>
            <a className="nav-link" href="#">Popular post</a>
         </li>
       </ul>

        
      </div>

</nav>
    </div>
  )
}

export default navbar