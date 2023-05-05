import images from "../images/index";

export default function TravelCards({ post }) {
  return (
    <>
      {
        post.map((item) => {
          let pic = item.location.toLowerCase();
          if (pic === "san francisco") pic = "san-francisco";
          else if (pic === "san diego") pic = "san-diego";
          return (
            <div key={item.id} className="col-md">
              <div className="card">
                <img
                  className="post-image-height"
                  src={images[pic]}
                  alt="location pic"
                />
                <div className="card-body">
                  <p>{item.title}</p>
                  <h6 className="text-muted">{item.location}</h6>
                  <p>{item.content.substring(0, 30)}...</p>

                  <div className="d-flex justify-content-end">
                    <button type="click" className="btn btn-warning ml-auto">
                      Go to post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
        // JSON.stringify(post)
      }
    </>
  );
}
