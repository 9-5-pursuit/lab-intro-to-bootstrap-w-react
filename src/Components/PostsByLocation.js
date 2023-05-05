import React from "react";

export default function PostsByLocation({ postData }) {
  function locationFetch() {
    let countNum = {};
    postData.forEach((elementObj) => {
      if (countNum[elementObj.location]) {
        countNum[elementObj.location]++;
      } else {
        countNum[elementObj.location] = 1;
      }
    });
    const elements = [];
    for (let key in countNum) {
      elements.push(
        <>
          <div className="border-bottom pb-2">{key}</div>
          <div className="border-bottom pb-2 w-auto">
            <span className="badge text-bg-secondary">{countNum[key]}</span>
          </div>
        </>
      );
    }

    return <>{elements}</>;
  }
  return (
    <>
      <div className="row align-items-start">
        <div className="col">
          Posts by <span className="text-warning">location</span>
        </div>
      </div>
      <div className="row align-items-start row-cols-1 row-cols-md-2 d-inline-flex flex-wrap">
        <div className="w-50 border-bottom pb-2">Location</div>
        <div className="border-bottom pb-2 w-auto">Posts</div>
        {locationFetch()}
      </div>
    </>
  );
}
