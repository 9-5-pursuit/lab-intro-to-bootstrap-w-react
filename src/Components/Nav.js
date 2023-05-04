import React from "react";

function Nav() {
    return (
        <nav className="nav container d-flex gap-3 mt-2 align-items-center mb-2 align-items-center">
            <a className="nav-link fs-1 text-black">
                Travel <span className="script-font text-warning">Blog</span>
            </a>
            <a className="nav-link text-black">About</a>
            <a className="nav-link text-black">Popular posts</a>
        </nav>
    );
}

export default Nav;
