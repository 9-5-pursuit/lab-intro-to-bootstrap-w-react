
function Header() {
  return (
    <header id="header">
      <nav className="navbar navbar-expand">
        <div className="container">
          <a className="navbar-brand fs-1 fw-bold" href="#">Travel <span className="script-font text-warning">Blog</span></a>

          <ul className="navbar-nav me-auto ms-5">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Popular posts</a>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  );
}
export default Header