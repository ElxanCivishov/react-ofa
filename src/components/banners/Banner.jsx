import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="ps-6 pe-6">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mb-lg-0 mt-3">
              <div>
                <div
                  className="py-10 px-8 rounded-3"
                  style={{
                    background:
                      "url(assets/images/banner/grocery-banner.png)no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1">
                      {t("banner.banner1.title")}
                    </h3>
                    <p className="mb-4">
                      {t("banner.banner1.discount", { degree: " 30%" })}
                    </p>
                    <Link to={t("banner.url")} className="btn btn-dark">
                      {t("banner.link")}
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
                    background:
                      "url(assets/images/banner/grocery-banner-2.jpg)no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1">
                      {t("banner.banner2.title")}
                    </h3>
                    <p className="mb-4">
                      {t("banner.banner2.discount", { degree: " 25%" })}
                    </p>
                    <Link to={t("banner.url")} className="btn btn-dark">
                      {t("banner.link")}
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

export default Banner;
