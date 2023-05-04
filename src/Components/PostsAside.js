export default function PostsAside({ postData }) {
  function handleArrayCounter(currentItem) {
    const localLocation = currentItem.location;
    const returnArr = postData.filter((element) => {
      //console.log(element);
      if (element.location === localLocation) {
        return element;
      }
    });
    //console.log(returnArr);
    return returnArr.length;
  }
  return (
    <div className="container">
      <h3>
        Posts by <span className="text-warning">location</span>
      </h3>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Location</th>
            <th scope="col">Posts</th>
          </tr>
        </thead>
        <tbody>
          {postData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.location}</td>
                <td>
                  <mark className="bg-warning rounded">
                    {" "}
                    {handleArrayCounter(item)}
                  </mark>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
