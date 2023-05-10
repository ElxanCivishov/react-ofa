import Slider from "react-slick";

import { BsArrowRightShort } from "react-icons/bs";

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
                    Opening Sale Discount 50%
                  </span>
                  <h2 className="text-dark display-5 fw-bold mt-4 fs-2">
                    Natures sweetest treats - enjoy <br />
                    the goodness of dried fruits with us!
                  </h2>
                  <a href="#!" className="btn btn-dark mt-3">
                    Go to Dried Fruits <BsArrowRightShort className="ms-1" />
                  </a>
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
                    Longer keep the gift of nature
                  </span>
                  <h2 className="text-white display-5 fw-bold mt-4 fs-2">
                    Spread happiness with Jams.
                    <br />
                    The perfect way to sweeten your day!
                  </h2>
                  <a href="#!" className="btn btn-dark mt-3">
                    Go to Jams
                    <BsArrowRightShort className="ms-1" />
                  </a>
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
