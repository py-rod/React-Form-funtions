import "../../assets/css/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand header-logo" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">
                  Log In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
