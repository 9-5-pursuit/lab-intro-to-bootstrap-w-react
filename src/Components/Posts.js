import React from "react";

function Posts({ item, images }) {
    const { location, title, id } = item;
    let pic = location.toLowerCase().replace(" ", "-");
    return (
        <>
            <div className="col-md">
                <div className="card mb-4" key={id}>
                    <img
                        src={images[pic]}
                        className="post-image-height card-img-top"
                    />
                    <div className="card-body">
                        <p>{title}</p>
                        <h6 className="text-muted">{location}</h6>
                        <p>
                            {item.content.substring(0, 57)}
                            ...
                        </p>
                        <div className="d-flex justify-content-md-end">
                            <button className="btn btn-warning">
                                Go to post &#x21FE;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Posts;
