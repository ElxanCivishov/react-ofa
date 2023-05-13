import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

import Product from "./Product";
import Loader from "../uitils/Loader";

import { FiEye } from "react-icons/fi";
import noimage from "../../../public/img/noImage.png";
import Search from "../search/Search";
import { NewReguestApi } from "../uitils/NewReguest";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () =>
      await NewReguestApi.get(
        `/products?search=dryfruits&min=${min}&max=${max}`
      ).then((res) => res.data),
  });

  const handleClick = (item) => {
    setProduct(item);
    setOpen(true);
  };

  if (error)
    return (
      <Navigate
        to="/errorpage"
        state={{ error: error.message }}
        replace={true}
      />
    );

  return (
    <>
      <Helmet>
        <title>Qurudulmuş meyvələr - Ofa MMC</title>
      </Helmet>
      <section className="mt-lg-1 my-4 ps-6 pe-6">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <h3 className="mb-2 mt-5">Qurudulmuş meyvələr</h3>
              <span className="lead">
                The fruit season is too short and most varieties of fruit cannot
                be brought to the next season.
                <br />
                In order to preserve natures gift to us, people have found
                several ways to get ready for winter.
                <br />
                One of them was the preparation of dried fruits.
                <br />
                As the fruits are not exposed to heat, the advantage of dried
                fruits is that they preserve almost all useful substances.
                <br />
              </span>
            </div>
            <div
              className="accordion accordion-flush mb-4"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    1. Dried fruits are high in fiber.
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body lead">
                    They clean out the gut, normalize the digestive system, and
                    accelerate metabolism.
                    <br />
                    With a small portion of product, you can feel full for a
                    long time.
                    <br />
                    It could be consumed instead of a snack at work or on a
                    trip.
                    <br />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    2. Most dried fruits contain vitamins
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body lead">
                    PP, A, B, phosphorus, magnesium, calcium, fructose, and
                    organic acids. <br /> Dried fruits are rich in useful
                    substances.
                    <br />
                    Thanks to these, they strengthen immunity and strengthen
                    resistance against vitamin deficiency and anemia.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    3. Potassium
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body lead">
                    Regulates blood pressure and relaxes the walls of blood
                    vessels.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    4. Drieds
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body lead">
                    Dried apples, pears, and dates are indispensable during a
                    diet.
                    <br />
                    They have fewer calories, but they help keep hunger under
                    control for a long time.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    5. Antioxidant properties
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body lead">
                    The antioxidant properties of raisins and plums are well
                    known. <br /> They are able to prevent the formation of
                    cancer cells, remove toxins from the intestines, destroy
                    pathogenic bacteria and normalize microflora.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Search
            min={min}
            max={max}
            setMin={setMin}
            setMax={setMax}
            refetch={refetch}
          />
          <div className="row g-4 row-cols-md-5 row-cols-1 row-cols-lg-8 ">
            {isLoading ? (
              <div
                className="d-flex align-items-center justify-content-center w-100"
                style={{ height: "200px" }}
              >
                <Loader />
              </div>
            ) : data.length == 0 ? (
              <div
                className="d-flex align-items-center justify-content-center w-100"
                style={{ height: "100px" }}
              >
                <p className="text-center">Nəticə tapılmadı...</p>
              </div>
            ) : (
              data.map((item) => (
                <div key={item.id} className="col">
                  <div
                    className="card card-product"
                    style={{ minHeight: "250px" }}
                  >
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div className="text-center position-relative">
                        <img
                          src={item.image || noimage}
                          alt="Dried apple"
                          className="mb-3 img-fluid rounded"
                        />
                        <div className="card-product-action">
                          <button
                            className="btn-action border-0"
                            onClick={() => handleClick(item)}
                          >
                            <FiEye />
                          </button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between pe-4 ps-4">
                        <button
                          style={{
                            color: "#21313c",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                          className="bg-white border-0 outline-none fs-5"
                          onClick={() => handleClick(item)}
                        >
                          {item.title}
                        </button>
                        <p
                          className="text-success m-0 ms-2"
                          style={{ fontSize: "16px" }}
                        >
                          {item.price}
                          <sub>azn</sub>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      {open && <Product product={product} setOpen={setOpen} />}
    </>
  );
};

export default Index;
