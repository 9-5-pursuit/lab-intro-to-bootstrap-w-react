export default function Card({ item, images }) {
  const localImage = images;
  const itemID = item.id;
  const itemTitle = item.title;
  let itemLocal = item.location;
  const itemContent = item.content;
  //console.log(itemLocal.toLowerCase());

  if (itemLocal.includes(" ")) {
    itemLocal = itemLocal.replace(/\s/g, "-");
  }

  //console.log(localImage[itemLocal.toLowerCase()]);
  const imagePath = localImage[itemLocal.toLowerCase()];
  //console.log(imagePath);

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
