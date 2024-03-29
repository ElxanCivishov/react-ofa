import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import middleBanner1Img from "../../../public/img/banner/middleBanner1.jpg";
import middleBanner2Img from "../../../public/img/banner/middleBanner2.jpg";

const Bannermiddle = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="ps-6 pe-6">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mt-3">
              <div>
                <div
                  className="py-10 px-8 rounded-3"
                  style={{
                    background: `url(${middleBanner1Img})no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1 text-white">
                      {t("middleBanner.banner1.title")}
                    </h3>
                    <p className="mb-4 text-white">
                      {t("middleBanner.banner1.content")}
                    </p>
                    <Link to={t("middleBanner.url")} className="btn btn-dark">
                      {t("middleBanner.link")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-3">
              <div>
                <div
                  className="py-10 px-8 rounded-3"
                  style={{
                    background: `url(${middleBanner2Img})no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1 text-white">
                      {t("middleBanner.banner2.title")}
                    </h3>
                    <p className="mb-4 text-white">
                      {t("middleBanner.banner2.content")}
                    </p>
                    <Link to={t("middleBanner.url")} className="btn btn-dark">
                      {t("middleBanner.link")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bannermiddle;
