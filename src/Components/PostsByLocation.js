export default function PostsByLocation({ postData }) {
  let postCounts = {};
  for (let post of postData) {
    postCounts[post.location] = postCounts[post.location] + 1 || 1;
  }

  const tableRows = [];
  for (let location in postCounts) {
    tableRows.push(
      <tr key={location}>
        <th scope="row">{location}</th>
        <td className="text-center">
          <span className="badge text-bg-secondary">
            {postCounts[location]}
          </span>
        </td>
      </tr>
    );
  }

  return (
    <div className="col-12">
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
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}


