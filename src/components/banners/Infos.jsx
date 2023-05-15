import { useTranslation } from "react-i18next";
import clockSvg from "../../../public/img/icons/clock.svg";
import giftSvg from "../../../public/img/icons/gift.svg";
import packageSvg from "../../../public/img/icons/package.svg";
import refreshSvg from "../../../public/img/icons/refresh-cw.svg";
const Infos = () => {
  const { t } = useTranslation();
  return (
    <section className="my-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-xl-0">
              <div className="mb-6">
                <img src={clockSvg} alt="" />
              </div>
              <h3 className="h5 mb-3">
                {t("aboutComponent.betterment.title")}
              </h3>
              <p>{t("aboutComponent.betterment.content")}</p>
            </div>
          </div>
          <div className="col-md-6  col-lg-3">
            <div className="mb-8 mb-xl-0">
              <div className="mb-6">
                <img src={giftSvg} alt="" />
              </div>
              <h3 className="h5 mb-3">
                {t("aboutComponent.efficiency.title")}
              </h3>
              <p>{t("aboutComponent.efficiency.content")}</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-xl-0">
              <div className="mb-6">
                <img src={packageSvg} alt="" />
              </div>
              <h3 className="h5 mb-3">
                {t("aboutComponent.sustainability.title")}
              </h3>
              <p>{t("aboutComponent.sustainability.content")}</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-xl-0">
              <div className="mb-6">
                <img src={refreshSvg} alt="" />
              </div>
              <h3 className="h5 mb-3">{t("aboutComponent.trust.title")}</h3>
              <p>{t("aboutComponent.trust.content")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infos;
