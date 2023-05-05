function PostByLocations({ postData }) {
  let postCount = {};
  postData.forEach((element) => {
    if (postCount[element.location]) {
      postCount[element.location] += 1;
    } else {
      postCount[element.location] = 1;
    }
  });

  let array = [];
  for (let element in postCount) {
    array.push(
      <tr key={element}>
        <th scope="row">{element}</th>
        <td className="text-center">
          <span className="badge text-bg-secondary">{postCount[element]}</span>
        </td>
      </tr>
    );
  }
  return (
    <div className="col-12 col-lg-4">
      <h2>
        Posts by <span className="text-warning">location</span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Location</th>
            <th scope="col" className="text-center">
              Posts
            </th>
          </tr>
        </thead>
        <tbody>{array}</tbody>
      </table>
    </div>
  );
}
export default PostByLocations;
