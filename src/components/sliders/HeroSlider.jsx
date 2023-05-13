import Slider from "react-slick";

import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeroSlider = () => {
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
                    50% - dək endirim!
                  </span>
                  <h2 className="text-dark display-5 fw-bold mt-4 fs-2">
                    Təbiətin ən şirin meyvələrindən - həzz alın. <br />
                    Quru meyvələrin əvəzsiz faydaları!
                  </h2>
                  <Link to="/products" className="btn btn-dark mt-3">
                    Qurudulmuş meyvələrə gedin
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
                    Təbiətin hədiyyəsini daha çox qoruyun
                  </span>
                  <h2 className="text-white display-5 fw-bold mt-4 fs-2">
                    Mürəbbələr ilə xoşbəxtliyi yayın.
                    <br />
                    Gününüzü şirin etməyin mükəmməl yolu!
                  </h2>
                  <Link to="/jams" className="btn btn-dark mt-3">
                    Mürəbbələrə keçin
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
