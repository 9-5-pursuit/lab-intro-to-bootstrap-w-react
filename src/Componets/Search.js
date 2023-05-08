
export default function Search(){
    return(
        <div className="search">
        <nav className="navbar">
       <div className="container-fluid">
         <form className="container-fluid" role="search">
            <div className="input-group">
            <label>Search post by location..</label>
        <input className="form-control me-2" type="search" aria-label="Search"/>
       <button className="btn btn-outline-success" type="submit">Cancel</button>
            </div>
       </form>
        </div>
        </nav>
        </div>
    );
}