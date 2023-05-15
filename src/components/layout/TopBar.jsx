import { Link } from "react-router-dom";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

import { useTranslation } from "react-i18next";

import { Us, Az, Ru } from "react-flags-select";

const TopBar = () => {
  const { i18n } = useTranslation();

  const handleLang = (lang) => {
    i18n.changeLanguage(lang);
  };
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
              <button
                className="text-muted  d-flex align-items-center  border-0"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {i18n.language === "ru" ? (
                  <>
                    <span className="me-2">
                      <Ru />
                    </span>
                    <span className="d-none d-md-block"> Русский</span>
                    <span className="d-block d-md-none"> Ru</span>
                  </>
                ) : i18n.language === "en" ? (
                  <>
                    <span className="me-2">
                      <Us />
                    </span>
                    <span className="d-none d-md-block"> English</span>
                    <span className="d-block d-md-none"> En</span>
                  </>
                ) : (
                  <>
                    <span className="me-2">
                      <Az />
                    </span>
                    <span className="d-none d-md-block"> Azerbaycan</span>
                    <span className="d-block d-md-none"> Az</span>
                  </>
                )}
                <BiChevronDown style={{ fontSize: "20px" }} />
              </button>
              <ul className="dropdown-menu">
                {i18n.language !== "az" && (
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLang("az")}
                    >
                      <span className="me-2">
                        <Az />
                      </span>
                      <span className="d-none d-md-block"> Azerbaycan</span>
                      <span className="d-block d-md-none"> Az</span>
                    </button>
                  </li>
                )}
                {i18n.language !== "en" && (
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLang("en")}
                    >
                      <span className="me-2">
                        <Us />
                      </span>
                      <span className="d-none d-md-block"> English</span>
                      <span className="d-block d-md-none"> En</span>
                    </button>
                  </li>
                )}
                {i18n.language !== "ru" && (
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLang("ru")}
                    >
                      <span className="me-2">
                        <Ru />
                      </span>
                      <span className="d-none d-md-block"> Русский </span>
                      <span className="d-block d-md-none"> Ru</span>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
