export default function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          Travel <span className="text-warning script-font">Blog</span>
        </a>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <a className="nav-link">About</a>
            <a className="nav-link">Popular posts</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
