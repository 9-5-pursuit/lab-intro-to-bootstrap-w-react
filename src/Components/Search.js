import React, { useState } from 'react';

export default function Search({ postData, posts, setPosts }){
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearchChange(event){
        setSearchTerm(event.target.value);
        handleFilter(event.target.value);
    }

    function handleCancel(){
        handleFilter("");
        setSearchTerm("");
        setPosts(postData);
    }

    function handleFilter(searchTerm){
        searchTerm = searchTerm.toLowerCase();
    
        let filteredPostArray = posts.filter((post) => {
          return post.location.toLowerCase().includes(searchTerm) || post.title.toLowerCase().includes(searchTerm)
        })
    
        setPosts(filteredPostArray);
      }


    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="container text-center py-3">
                <div className="row">
                    <label htmlFor="search" className="col-2 pt-1">Search posts by location...</label>
                    <div className="col">
                        <input type='text' id='search' className="form-control" value={searchTerm} onChange={handleSearchChange}/>
                    </div>
                    <div className="col-auto">
                        <button type='submit' className="btn btn-warning" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </form>
    )
}