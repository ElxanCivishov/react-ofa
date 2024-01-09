import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useTranslation } from "react-i18next";

import logo from "/img/logo.png";
import footerBg from "/img/footer/footer.png";
import favicon from "/favicon.ico";

import { FaInstagram, FaFacebook, FaArrowUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import "./footer.scss";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footerr">
        <div className="bg-image">
          <img src={footerBg} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12  col-md-4 mt-3">
              <div className="d-flex align-items-center">
                <img width={300} src={logo} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-8 mt-5">
              <div className="row g-4">
                <div className="col-6">
                  <h6 className="mb-4">{t("footer.content1.title")}</h6>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <Link
                        to={t("footer.content1.link1.url")}
                        className="nav-link"
                      >
                        {t("footer.content1.link1.title")}
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to={t("footer.content1.link2.url")}
                        className="nav-link"
                      >
                        {t("footer.content1.link2.title")}
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to={t("footer.content1.link3.url")}
                        className="nav-link"
                      >
                        {t("footer.content1.link3.title")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h6 className="mb-4">{t("footer.content2.title")}</h6>
                  <ul className="nav row">
                    <li className="nav-item mb-2">
                      <Link
                        to={t("footer.content2.link1.url")}
                        className="nav-link"
                      >
                        {t("footer.content2.link1.title")}
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to={t("footer.content2.link2.url")}
                        className="nav-link"
                      >
                        {t("footer.content2.link2.title")}
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to={t("footer.content2.link3.url")}
                        className="nav-link"
                      >
                        {t("footer.content2.link3.title")}
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link
                        to={t("footer.content2.link4.url")}
                        className="nav-link"
                      >
                        {t("footer.content2.link4.title")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top py-4 pe-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <span className=" text-muted">
                  {t("footer.copyright", { year })}
                  <br />
                  {t("footer.createdBy")}
                </span>
              </div>
              {/* <div className="col-md-6">
                <ul className="list-inline text-md-end mb-0  mt-3 mt-md-0">
                  <li className="list-inline-item text-muted">
                    {t("footer.contactUs")}
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="#!" className="icon-shape icon-sm social-links">
                      <FaFacebook style={{ fontSize: "20px" }} />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#!" className="icon-shape icon-sm social-links">
                      <FaInstagram style={{ fontSize: "20px" }} />
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop
        top="100"
        style={{ left: "40px" }}
        smooth
        component={
          <span style={{ color: "#0aad0a" }}>
            <FaArrowUp />
          </span>
        }
      />

      <FloatingWhatsApp
        phoneNumber="+994553139913"
        accountName={t("whatchapp.accountName")}
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar={favicon}
        statusMessage={t("whatchapp.statusMessage")}
        chatMessage={t("whatchapp.chatMessage")}
        placeholder={t("whatchapp.placeholder")}
      />
    </>
  );
};

export default Footer;
