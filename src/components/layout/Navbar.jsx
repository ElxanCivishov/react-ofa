import { Link } from "react-router-dom";

import TopBar from "./TopBar";

import { MdLocationPin } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="border-bottom pb-5">
        <TopBar />
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
              <div className="col-xxl-6 col-lg-5">
                <form action="#" className="search-header">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-end-0"
                      placeholder="Məhsullarda axtar..."
                    />
                    <span className="input-group-text bg-transparent">
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
              <div className="col-md-2 col-xxl-3 ">
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
                  Bütün məhsullar
                </Link>
                <div className="collapse mt-2" id="collapseExample">
                  <div className="card card-body">
                    <ul className="mb-0 list-unstyled">
                      <Link className="dropdown-item" to="/products">
                        Quru meyvələr
                      </Link>
                      <Link className="dropdown-item" to="/package-products">
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
                <button
                  type="button"
                  className="btn  btn-outline-gray-400 text-muted w-100 "
                  data-bs-toggle="modal"
                  data-bs-target="#locationModal"
                >
                  <MdLocationPin
                    style={{ paddingBottom: "3px", fontSize: "20px" }}
                  />
                  Ünvan
                </button>
              </div>
              <div className="d-none d-lg-block">
                <ul className="navbar-nav ">
                  <li className="nav-item ">
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
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
