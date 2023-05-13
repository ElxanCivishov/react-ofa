import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import { MdLocationPin } from "react-icons/md";

import logo from "../../../public/img/drfruits.png";

const Navbar = () => {
  return (
    <>
      <div className="border-bottom">
        <TopBar />
        <nav className="navbar navbar-light py-lg-5 pt-3 px-0 pb-0">
          <div className="container">
            <div className="row w-100 align-items-center g-3">
              <div className="col-xxl-2 col-lg-3">
                <Link to="/" className="navbar-brand d-none d-lg-block">
                  <img src={logo} alt="OFA MMC" width={150} />
                </Link>
                <div className="d-flex justify-content-between w-100 d-lg-none">
                  <Link to="/" className="navbar-brand">
                    <img src={logo} width={150} alt="OFA MMC" />
                  </Link>
                  <div className="d-flex align-items-center lh-1">
                    <button
                      className="navbar-toggler collapsed outline-none shadow-none"
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
              <div className="dropdown me-3 d-none d-lg-block col-xxl-2 col-lg-3">
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
                  </span>
                  Bütün məhsullar
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to="/products">
                      Quru meyvələr
                    </Link>
                    <Link className="dropdown-item" to="/package-products">
                      Paket Məhsulları
                    </Link>
                    <Link className="dropdown-item" to="/jams">
                      Mürəbbə və cemlər
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="d-none d-lg-block col-xxl-6 col-lg-4">
                <ul className="navbar-nav d-flex flex-row">
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      Haqqımızda
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/recipes" className="nav-link">
                      Reseptlər
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/gallery" className="nav-link">
                      Qalareya
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/contact" className="nav-link">
                      Əlaqə
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xxl-1 col-lg-1 nav-location">
                <button
                  type="button"
                  className="btn  btn-outline-gray-400 text-muted d-flex align-items-center justify-content-center"
                  data-bs-toggle="modal"
                  data-bs-target="#locationModal"
                >
                  <MdLocationPin
                    style={{ paddingBottom: "3px", fontSize: "20px" }}
                  />
                  Ünvan
                </button>
              </div>

              {/* mobile */}
              <nav className="navbar navbar-expand-lg navbar-light navbar-default pt-0 pb-0">
                <div className="px-0 px-md-3">
                  <div
                    className="offcanvas offcanvas-start p-4 p-lg-0"
                    id="navbar-default"
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2 d-block d-lg-none">
                      <div>
                        <Link to="/">
                          <img src={logo} alt="OFA MMC" width={140} />
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
                        Bütün məhsullar
                      </Link>
                      <div className="collapse mt-2" id="collapseExample">
                        <div className="card card-body">
                          <ul className="mb-0 list-unstyled">
                            <Link className="dropdown-item" to="/products">
                              Quru meyvələr
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="/package-products"
                            >
                              Paket Məhsulları
                            </Link>
                            <Link className="dropdown-item" to="/jams">
                              Mürəbbə və cemlər
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="d-lg-none d-block mb-3">
                      <Link
                        to="/about"
                        className="btn  btn-outline-gray-400 text-dark w-100 "
                      >
                        Haqqımızda
                      </Link>
                    </div>
                    <div className="d-lg-none d-block mb-3">
                      <Link
                        to="/recipes"
                        className="btn  btn-outline-gray-400 text-dark w-100 "
                      >
                        Reseptler
                      </Link>
                    </div>
                    <div className="d-lg-none d-block mb-3">
                      <Link
                        to="/gallery"
                        className="btn  btn-outline-gray-400 text-dark w-100 "
                      >
                        Qalareya
                      </Link>
                    </div>
                    <div className="d-lg-none d-block mb-3">
                      <Link
                        to="/contact"
                        className="btn  btn-outline-gray-400 text-dark w-100 "
                      >
                        Əlaqə
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
