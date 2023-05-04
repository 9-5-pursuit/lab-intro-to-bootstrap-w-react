export default function Card({ item, images }) {
  const localImage = images; // Store the 'images' prop locally for easier access
  const itemID = item.id; // Store the 'id' property of the 'item' prop
  const itemTitle = item.title; // Store the 'title' property of the 'item' prop
  let itemLocal = item.location; // Store the 'location' property of the 'item' prop
  const itemContent = item.content; // Store the 'content' property of the 'item' prop

  // If the 'itemLocal' property has spaces, replace them with hyphens
  if (itemLocal.includes(" ")) {
    itemLocal = itemLocal.replace(/\s/g, "-");
  }

  // Get the path to the image for the post's location
  const imagePath = localImage[itemLocal.toLowerCase()];

  return (
    <div
      className="card"
      style={{ width: "18rem", maxheight: "20rem" }}
      key={itemID}
    >
      <img
        src={imagePath}
        className="card-img-top post-image-height"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{itemTitle}</h5>
        <p className="card-text">{itemLocal}</p>
        <p className="card-text text-truncate">{itemContent}</p>
        <a href="#" className="btn btn-warning">
          Go to post &rarr;
        </a>
      </div>
    </div>
  );
}
