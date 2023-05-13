import { Link } from "react-router-dom";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

import { Us, Az, Ru } from "react-flags-select";
const TopBar = () => {
  return (
    <div className="bg-light py-1 ">
      <div className="container  ps-5 pe-5">
        <div className="d-flex align-items-center justify-content-between pt-2 pb-2">
          <div>
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
          <div>
            <div className="dropdown">
              <Link
                to="#"
                className="text-decoration-none  text-muted  d-flex align-items-center "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="me-1">
                  <Az />
                </span>
                <span className="d-none d-md-block"> Azerbaycan</span>
                <span className="d-block d-md-none"> Az</span>
                <BiChevronDown style={{ fontSize: "20px" }} />
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    <span className="me-2">
                      <Az />
                    </span>
                    <span className="d-none d-md-block"> Azerbaycan</span>
                    <span className="d-block d-md-none"> Az</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    <span className="me-2">
                      <Us />
                    </span>
                    <span className="d-none d-md-block"> English</span>
                    <span className="d-block d-md-none"> En</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="#">
                    <span className="me-2">
                      <Ru />
                    </span>
                    <span className="d-none d-md-block"> Русский </span>
                    <span className="d-block d-md-none"> Ru</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
