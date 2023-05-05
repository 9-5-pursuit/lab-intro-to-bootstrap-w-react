import "../index.css";

export default function NavBar() {
  return (
    <nav className="d-flex align-items-center m-3">
      <h2 className="mr-3">
        Travel <span className="script-font text-warning">Blog</span>
      </h2>
      <a className="m-3 link-dark text-decoration-none" href="#">
        About
      </a>
      <a className="m-3 link-dark text-decoration-none" href="#">
        Popular posts
      </a>
    </nav>
  );
}
