import { useQuery } from "@tanstack/react-query";
import { Link, Navigate } from "react-router-dom";

import { FiEye } from "react-icons/fi";

import Loader from "../uitils/Loader";
import ProductModal from "./ProductModal";
import noimage from "../../../public/img/noImage.png";
import { useState } from "react";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://ofa.az/api/products").then((res) => res.json()),
  });

  if (isLoading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center "
        style={{ height: "300px" }}
      >
        <Loader />
      </div>
    );
  }

  if (error) return <Navigate to="/errorpage" replace={true} />;

  return (
    <>
      <section className="mt-lg-1 my-4">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <h3 className="mb-2">Qurudulmuş meyvələr</h3>
              <span className="fs-6 lead">
                The fruit season is too short and most varieties of fruit cannot
                be brought to the next season.
                <br />
                In order to preserve nature's gift to us, people have found
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
                    className="accordion-button collapsed text-dark fs-6"
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
                  <div className="accordion-body fs-6 lead">
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
                    className="accordion-button collapsed fs-6 text-dark"
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
                  <div className="accordion-body fs-6">
                    PP, A, B, phosphorus, magnesium, calcium, fructose, and
                    organic acids. Dried fruits are rich in useful substances.
                    <br />
                    Thanks to these, they strengthen immunity and strengthen
                    resistance against vitamin deficiency and anemia.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed fs-6 text-dark"
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
                  <div className="accordion-body fs-6">
                    Regulates blood pressure and relaxes the walls of blood
                    vessels.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed fs-6 text-dark"
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
                  <div className="accordion-body fs-6">
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
                    className="accordion-button collapsed fs-6 text-dark"
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
                  <div className="accordion-body fs-6">
                    The antioxidant properties of raisins and plums are well
                    known. They are able to prevent the formation of cancer
                    cells, remove toxins from the intestines, destroy pathogenic
                    bacteria and normalize microflora.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 row-cols-md-6 row-cols-2 row-cols-md-3">
            {data.map((item) => (
              <div key={item.id} className="col">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      <img
                        src={item.image || noimage}
                        alt="Dried apple"
                        className="mb-3 img-fluid rounded"
                      />
                      <div className="card-product-action">
                        <button
                          className="btn-action border-0"
                          onClick={() => {
                            setProduct(item);
                            setOpen(true);
                            console.log("asd");
                          }}
                        >
                          <FiEye />
                        </button>
                      </div>
                    </div>
                    <h2 className="fs-6 text-center">
                      <Link
                        tof="#!"
                        className="text-inherit text-decoration-none"
                      >
                        {item.name}
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {open && <ProductModal product={product} setOpen={setOpen} />}
    </>
  );
};

export default Index;
