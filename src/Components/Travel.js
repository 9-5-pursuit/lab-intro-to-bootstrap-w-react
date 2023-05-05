import images from "../images/index";

function Travel({ post }) {
  return (
    <>
      {post.map((item) => {
        let pic = item.location.toLowerCase();
        if (pic === "san francisco") {
          pic = "san-francisco";
        } else if (pic === "san diego") {
          pic = "san-diego";
        }

        return (
          <div key={item.id} className="col-md">
            <div className="card">
              <img className="post-image-height" src={images[pic]} alt="" />

              <div className="card-body">
                <p>{item.title}</p>
                <h6 className="text-muted">{item.location}</h6>
                <p>{item.content.substring(0, 30)}...</p>

                <div className="d-flex justify-content-end">
                  <button className="btn btn-warning ml-auto" type="click">
                    Go to post ➤
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Travel;
