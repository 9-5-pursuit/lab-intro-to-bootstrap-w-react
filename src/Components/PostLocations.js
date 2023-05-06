import React from 'react';

export default function PostLocations({ postData }){
    let postObj = {};

    for (let post of postData) {
      postObj[post.location] = postObj[post.location] + 1 || 1;
    }

    const tableRows = [];
    for (let property in postObj) {
      tableRows.push(
        <tr key={property}>
          <th scope="row">{property}</th>
          <td className="text-center">
            <span className="badge text-bg-secondary">{postObj[property]}</span>
          </td>
        </tr>
      );
    }
    
    
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
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}