import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const { t } = useTranslation();
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="mt-8">
      <div className="container">
        <div className="hero-slider">
          <Slider {...settings}>
            <div>
              <div
                style={{
                  background: "url(/assets/images/slider/slide-5.jpg)no-repeat",
                  backgroundSize: "cover",
                  borderRadius: ".5rem",
                  backgroundPosition: "center",
                }}
              >
                <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                  <span className="badge text-bg-warning">
                    {t("heroSlider.slider1.badge")}
                  </span>
                  <h2 className="text-dark display-5 fw-bold mt-4 fs-2">
                    {t("heroSlider.slider1.text1")} <br />
                    {t("heroSlider.slider1.text2")}
                  </h2>
                  <Link
                    to={t("heroSlider.slider1.url")}
                    className="btn btn-dark mt-3"
                  >
                    {t("heroSlider.slider1.title")}
                    <BsArrowRightShort className="ms-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div
                className=" "
                style={{
                  background: "url(/assets/images/slider/slide-2.jpg)no-repeat",
                  backgroundSize: "cover",
                  borderRadius: ".5rem",
                  backgroundPosition: "center",
                }}
              >
                <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                  <span className="badge text-bg-warning">
                    {t("heroSlider.slider2.badge")}
                  </span>
                  <h2 className="text-white display-5 fw-bold mt-4 fs-2">
                    {t("heroSlider.slider2.text1")} <br />
                    {t("heroSlider.slider2.text2")}
                  </h2>
                  <Link
                    to={t("heroSlider.slider2.url")}
                    className="btn btn-dark mt-3"
                  >
                    {t("heroSlider.slider2.title")}
                    <BsArrowRightShort className="ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
