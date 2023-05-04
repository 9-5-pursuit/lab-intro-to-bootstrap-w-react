// Define a function component for the navigation bar
export default function NavBar() {
  // Render the navigation bar
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Render the brand logo */}
        <a className="navbar-brand">
          Travel <span className="text-warning script-font">Blog</span>
        </a>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            {/* Render the navigation links */}
            <a className="nav-link">About</a>
            <a className="nav-link">Popular posts</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
