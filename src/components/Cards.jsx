// Import the Card component
import Card from "./Card";

// Define a function component for the cards
export default function Cards({ postData, images, searchTerm }) {
  // Define local variables to use in the component
  const localSearchTerm = searchTerm;
  const localData = postData;

  // Define a function to handle search terms
  function handleSearchTerms() {
    const localArr = localData.filter((element) => {
      if (element.location === localSearchTerm) return element;
    });
    return localArr;
  }

  // Call the handleSearchTerms function to get the main array of items to display
  const mainArr = handleSearchTerms();

  // Render the cards component
  return (
    <>
      {/* Render all the cards if there is no search term */}
      {localSearchTerm === "" ? (
        <div className="row text-center">
          {localData.map((item, index) => {
            return <Card key={index} item={item} images={images} />;
          })}
        </div>
      ) : (
        // Otherwise, render the search results
        <>
          {/* Show a message if no search results were found */}
          {mainArr.length === 0 ? (
            <div className="alert alert-danger" role="alert">
              No posts found with the search term "{localSearchTerm}". Please
              try again.
            </div>
          ) : (
            // Otherwise, render the search results as cards
            <>
              {mainArr.map((item, index) => {
                return <Card key={index} item={item} images={images} />;
              })}
            </>
          )}
        </>
      )}
    </>
  );
}
