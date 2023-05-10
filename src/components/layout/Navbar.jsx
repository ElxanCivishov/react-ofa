import { Link } from "react-router-dom";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import UserModal from "../modals/UserModal";

const Navbar = () => {
  return (
    <>
      <div className="border-bottom pb-5">
        <div className="bg-light py-1">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <span>
                  <Link to="tel:+994553139913">
                    <FaMobileAlt /> +99(455) 313-99-13
                  </Link>
                </span>
                <span className="mx-4">
                  <Link to="mailto:info@ofa.az">
                    <FaEnvelope /> info@ofa.az
                  </Link>
                </span>
              </div>
              <div className="col-6 text-end d-none d-md-block">
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle text-decoration-none  text-muted"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-1">
                      <span className="fi fi-gb eng"></span>
                    </span>
                    English
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="#">
                        <span className="me-2">
                          <span className="fi fi-az"></span>
                        </span>
                        Azerbaycan
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="#">
                        <span className="me-2">
                          <span className="fi fi-gb eng"></span>
                        </span>
                        English
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="#">
                        <span className="me-2">
                          <span className="fi fi-ru"></span>
                        </span>
                        Русский
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-light py-lg-5 pt-3 px-0 pb-0">
          <div className="container">
            <div className="row w-100 align-items-center g-3">
              <div className="col-xxl-2 col-lg-3">
                <Link to="/" className="navbar-brand d-none d-lg-block">
                  <img
                    src="assets/images/logo/drfruits.png"
                    alt="OFA MMC"
                    width={150}
                  />
                </Link>
                <div className="d-flex justify-content-between w-100 d-lg-none">
                  <Link to="/" className="navbar-brand">
                    <img
                      src="assets/images/logo/drfruits.png"
                      width={150}
                      alt="OFA MMC"
                    />
                  </Link>
                  <div className="d-flex align-items-center lh-1">
                    {/* <div className="list-inline me-2">
                                            <div className="list-inline-item">
                                                <Link
                                                    to="#!"
                                                    className="text-muted"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#userModal"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-user"
                                                    >
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle
                                                            cx={12}
                                                            cy={7}
                                                            r={4}
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div> */}
                    {/* Button */}
                    <button
                      className="navbar-toggler collapsed"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#navbar-default"
                      aria-controls="navbar-default"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="icon-bar top-bar mt-0" />
                      <span className="icon-bar middle-bar" />
                      <span className="icon-bar bottom-bar" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-5 d-none d-lg-block">
                <form action="#" className="search-header">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-end-0"
                      placeholder="Search for products.."
                      aria-label="Search for products.."
                      aria-describedby="basic-addon2"
                    />
                    <span
                      className="input-group-text bg-transparent"
                      id="basic-addon2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-search"
                      >
                        <circle cx={11} cy={11} r={8} />
                        <line x1={21} y1={21} x2="16.65" y2="16.65" />
                      </svg>
                    </span>
                  </div>
                </form>
              </div>
              <div className="col-md-2 col-xxl-3 d-none d-lg-block">
                {/* Button trigger modal */}
                <button
                  type="button"
                  className="btn  btn-outline-gray-400 text-muted"
                  data-bs-toggle="modal"
                  data-bs-target="#locationModal"
                >
                  <i className="feather-icon icon-map-pin me-2" />
                  Location
                </button>
              </div>
              {/* <div className="col-md-2 col-xxl-1 text-end d-none d-lg-block">
                                <div className="list-inline">
                                    <div className="list-inline-item">
                                        <Link
                                            to="#!"
                                            className="text-muted"
                                            data-bs-toggle="modal"
                                            data-bs-target="#userModal"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={20}
                                                height={20}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-user"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx={12} cy={7} r={4} />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light navbar-default pt-0 pb-0">
          <div className="container px-0 px-md-3">
            <div className="dropdown me-3 d-none d-lg-block">
              <button
                className="btn btn-primary px-6 "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="me-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-grid"
                  >
                    <rect x={3} y={3} width={7} height={7} />
                    <rect x={14} y={3} width={7} height={7} />
                    <rect x={14} y={14} width={7} height={7} />
                    <rect x={3} y={14} width={7} height={7} />
                  </svg>
                </span>{" "}
                All Products
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/products">
                    Dried Fruits
                  </Link>
                  <Link className="dropdown-item" to="pages/shop-grid.html">
                    Package Products
                  </Link>
                  <Link className="dropdown-item" to="pages/shop-grid.html">
                    Jams
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="offcanvas offcanvas-start p-4 p-lg-0"
              id="navbar-default"
            >
              <div className="d-flex justify-content-between align-items-center mb-2 d-block d-lg-none">
                <div>
                  <Link to="/">
                    <img
                      src="assets/images/logo/drfruits.png"
                      alt="OFA MMC"
                      width={140}
                    />
                  </Link>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="d-block d-lg-none mb-2 pt-2">
                <Link
                  className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
                  data-bs-toggle="collapse"
                  to="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-grid"
                    >
                      <rect x={3} y={3} width={7} height={7} />
                      <rect x={14} y={3} width={7} height={7} />
                      <rect x={14} y={14} width={7} height={7} />
                      <rect x={3} y={14} width={7} height={7} />
                    </svg>
                  </span>
                  All Products
                </Link>
                <div className="collapse mt-2" id="collapseExample">
                  <div className="card card-body">
                    <ul className="mb-0 list-unstyled">
                      <Link className="dropdown-item" to="/products">
                        Dried Fruits
                      </Link>
                      <Link className="dropdown-item" to="pages/shop-grid.html">
                        Package Products
                      </Link>
                      <Link className="dropdown-item" to="pages/shop-grid.html">
                        Jams
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-lg-none d-block mb-3">
                <button
                  type="button"
                  className="btn  btn-outline-gray-400 text-muted w-100 "
                  data-bs-toggle="modal"
                  data-bs-target="#locationModal"
                >
                  <i className="feather-icon icon-map-pin me-2" />
                  Pick Location
                </button>
              </div>
              <div className="d-none d-lg-block">
                <ul className="navbar-nav ">
                  <li className="nav-item ">
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/blogs" className="nav-link">
                      Blogs
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/gallery" className="nav-link">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/contact" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
