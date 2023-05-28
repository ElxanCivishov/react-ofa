import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import BannerIndex from "../../components/banners/Infos";
import aboutImg from "../../../public/img/about.jpeg";

const Index = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t("about.title")} - {t("ofaMMC")}
        </title>
      </Helmet>
      <section className="mt-14">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row align-items-center mb-14">
                <div className="col-md-6">
                  <h4 className="mb-8 fs-5">
                    {t("aboutComponent.title")}
                    <br />
                    {t("aboutComponent.subTitle")}
                  </h4>
                  <div className="ms-xxl-1 me-xxl-1 mb-8 mb-md-0">
                    <h5 className="mb-6">
                      {t("aboutComponent.category.title")}:
                    </h5>
                    <ul className="fs-6 lead">
                      <li>{t("aboutComponent.category.cat1")}</li>
                      <li>{t("aboutComponent.category.cat2")}</li>
                      <li>{t("aboutComponent.category.cat3")}</li>
                      <li>{t("aboutComponent.category.cat4")}</li>
                    </ul>
                    <p className="fs-6 lead">
                      {t("aboutComponent.content1")}
                      <br />
                      {t("aboutComponent.content2")}
                      <br />
                      {t("aboutComponent.content3")}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src={aboutImg}
                    alt=""
                    className="img-fluid rounded-3 w-100 w-md-75"
                  />
                </div>
              </div>
              <div className="">
                <BannerIndex />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
