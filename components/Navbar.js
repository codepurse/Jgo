import Link from "next/link";

const Navbar = () => (
  <div className="container">
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <nav className="navbar-brand" href="#">
          <a href="#">
            <img
              src="Image/JGO logo.png"
              className="img-fluid imglogo"
              style={{ width: "150px" }}
            />
          </a>
        </nav>
        <div className="collapse navbar-collapse" id="collapse">
          <div className="col2 ml-auto">
            <ul className="nav navbar-nav">
              <li>
                <a
                  className="nav-link btnhome"
                  href="package.html"
                  style={{ color: "#CF511F" }}
                >
                  HOME
                </a>
              </li>
              <li>
                <a className="nav-link btncontact" href="contact.html">
                  DELIVER
                </a>
              </li>
              <li>
                <a className="nav-link btncontact" href="contact.html">
                  CONTACT
                </a>
              </li>
              <li>
                <a
                  className="nav-link btnlogin"
                  href="contact.html"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="nav-link btncontact"
                  href="contact.html"
                  data-toggle="modal"
                  data-target="#contactModal"
                >
                  LOG-IN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
