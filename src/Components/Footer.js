import React from "react";

function Footer() {
    return (
        <>
            <div className="fs-3 text-end p-4 bg-warning">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col-md w-75 fs-6">Contact Me</div>
                    <div className="col-md w-25 fs-6">
                        Copyright <span className="fw-bold">MyTravelBlog</span>{" "}
                        2020
                    </div>
                    <div className="col-md w-75 fs-6">About the author</div>
                </div>
            </div>
        </>
    );
}

export default Footer;
