import images from "../images/index";

export default function TravelCards({ post }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {post.map((item) => {
        let pic = item.location.toLowerCase();
        if (pic === "san francisco") {
          pic = "san-francisco";
        } else if (pic === "san diego") {
          pic = "san-diego";
        }
        return (
          <div key={item.id} className="col-12 col-md-6">
            <div className="card">
              <img
                className="post-image-height object-fit-cover"
                src={images[pic]}
                alt=""
              />
              <div className="card-body">
                <p>{item.title}</p>
                <h6 className="text-muted">{item.location}</h6>
                <p>{item.content.substring(0, 30)}...</p>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="col-sm-4 text-right">
                        <button
                          type="button"
                          className="btn btn-warning float-end"
                        >
                          Go to post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
