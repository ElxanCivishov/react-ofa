import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import Product from "./Product";
import Loader from "../uitils/Loader";

import { FiEye } from "react-icons/fi";
import noimage from "../../../public/img/noImage.png";
import Search from "../search/Search";
import { NewReguestApi } from "../uitils/NewReguest";

const Index = () => {
  const { t } = useTranslation();
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
              <h3 className="mb-2 mt-5">{t("dryFruitsTitle.title")}</h3>
              <span className="lead">
                {t("dryFruitsTitle.content1")}
                <br />
                {t("dryFruitsTitle.content2")}
                <br />
                {t("dryFruitsTitle.content3")}
                <br />
                {t("dryFruitsTitle.content4")}
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
                    {t("dryFruitsTitle.accordion1.title")}
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body lead">
                    {t("dryFruitsTitle.accordion1.content1")}
                    <br />
                    {t("dryFruitsTitle.accordion1.content2")}
                    <br />
                    {t("dryFruitsTitle.accordion1.content3")}
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
                    {t("dryFruitsTitle.accordion2.title")}
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body lead">
                    {t("dryFruitsTitle.accordion2.content1")}
                    <br />
                    {t("dryFruitsTitle.accordion2.content2")}
                    <br />
                    {t("dryFruitsTitle.accordion2.content3")}
                    <br />
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
                    {t("dryFruitsTitle.accordion3.title")}
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body lead">
                    {t("dryFruitsTitle.accordion3.content1")}
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
                    {t("dryFruitsTitle.accordion4.title")}
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body lead">
                    {t("dryFruitsTitle.accordion4.content1")}
                    <br />
                    {t("dryFruitsTitle.accordion4.content2")}
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
                    {t("dryFruitsTitle.accordion5.title")}
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body lead">
                    {t("dryFruitsTitle.accordion5.content1")}
                    <br />
                    {t("dryFruitsTitle.accordion5.content2")}
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
                <p className="text-center">{t("noResult")}</p>
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
                          <sub>{t("valyuta")}</sub>
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
