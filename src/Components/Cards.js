import Card from "./Card";

export default function Cards({ postData, images, searchTerm }) {
  const localSearchTerm = searchTerm;
  //console.log(postData);
  //console.log(images);
  const localData = postData;
  //console.log(searchTerm);
  // console.log(searchTerm);
  // console.log(images);
  function handleSearchTerms() {
    const localArr = localData.filter((element) => {
      if (element.location === localSearchTerm) return element;
    });
    return localArr;
  }
  const mainArr = handleSearchTerms();
  //console.log(mainArr);

  return (
    <>
      {localSearchTerm === "" ? (
        <div className="row text-center">
          {localData.map((item, index) => {
            return <Card key={index} item={item} images={images} />;
          })}
        </div>
      ) : (
        <>
          {mainArr.length === 0 ? (
            <div className="alert alert-danger" role="alert">
              No posts found with the search term "{localSearchTerm}". Please
              try again.
            </div>
          ) : (
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
