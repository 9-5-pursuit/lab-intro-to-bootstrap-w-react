// Define a function component that takes in the postData prop
export default function PostsAside({ postData }) {
  // Define a helper function that returns the number of posts by location
  function handleArrayCounter(currentItem) {
    // Store the current item's location in a local variable
    const localLocation = currentItem.location;
    // Filter the postData array to find all items with the same location
    const returnArr = postData.filter((element) => {
      if (element.location === localLocation) {
        return element;
      }
    });
    // Return the length of the filtered array, which represents the number of posts with the same location
    return returnArr.length;
  }

  // Render the component
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
          {/* Map over the postData array and render a table row for each item */}
          {postData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.location}</td>
                {/* Render the number of posts by location using the handleArrayCounter function */}
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
