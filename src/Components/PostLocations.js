import React from 'react';

export default function PostLocations({ postData }){
    // let postObj = {};
    // for (let post of postData) {
    //   postObj[post.location] = postObj[post.location] + 1 || 1;
    // }
    
    
    return(
        <div className="col-4">
            <h2>Posts by <span className="text-warning">location</span></h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope='col'>Location</th>
                    <th scope='col'> Posts</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}