import React from "react";

function PostsByLocation({ postData }) {
  function locationFinder() {
    let locationPostCount = [];

    postData.forEach((post) => {
      if (locationPostCount[post.location]) {
        locationPostCount[post.location]++;
      } else {
        locationPostCount[post.location] = 1;
      }
    });

    const postLocationArr = [];
    for (let location in locationPostCount) {
      postLocationArr.push(
        <>
          <td scope="row" className="border-bottom pb-2"></td>
          {location}
          <td className="border-bottom pb-2 w-auto">
            <span className="badge text-bg-secondary">
              {locationPostCount[location]}
            </span>
          </td>
        </>
      );
    }
    return <>{postLocationArr}</>;
  }
  return (
    <>
      <div className="row align-items-start">
        <div className="col">
          <h3>
            Posts by <span className="text-warning">location</span>
          </h3>
        </div>
      </div>
      <table className="table row align-items-start row-cols-1 row-cols-md-2 d-inline-flex flex-wrap">
        <tbody>
          <tr>
            <th className="w-50 border-bottom pb-2">Location</th>
            <th className="border-bottom pb-2 w-auto">Posts</th>
            {locationFinder()}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default PostsByLocation;
