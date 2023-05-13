import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import logo from "../../../public/img/drfruits.png";
import footerBg from "../../../public/img/footer/footer.png";

import { FaInstagram, FaFacebook } from "react-icons/fa";

import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footerr">
        <div className="bg-image">
          <img src={footerBg} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12  col-md-6 mt-3">
              <div className="d-flex align-items-center">
                <img width={300} height={150} src={logo} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6 mt-5">
              <div className="row g-4">
                <div className="col-6">
                  <h6 className="mb-4">Product Categories </h6>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <Link to="/products" className="nav-link">
                        Dried Fruits
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link to="/package-products" className="nav-link">
                        Packages
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link to="/jams" className="nav-link">
                        Jams
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h6 className="mb-4">Get to know us</h6>
                  <ul className="nav row">
                    <li className="nav-item mb-2">
                      <Link to="/about" className="nav-link">
                        About us
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link to="/recipes" className="nav-link">
                        Recipes
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link to="/gallery" className="nav-link">
                        Gallery
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link to="/contact" className="nav-link">
                        Contact us
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
                  Copyright 2023 © OFA MMC . All rights reserved.
                  <br />
                  Sara İnvest Developerləri tərəfindən dizayn edilmişdir.
                </span>
              </div>
              <div className="col-md-6">
                <ul className="list-inline text-md-end mb-0  mt-3 mt-md-0">
                  <li className="list-inline-item text-muted">Bizi izlə</li>
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
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FloatingWhatsApp
        phoneNumber="+994553139913"
        accountName="OFA MMC"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </>
  );
};

export default Footer;
