import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

import Product from "./Product";
import Loader from "../uitils/Loader";

import { FiEye } from "react-icons/fi";
import noimage from "../../../public/img/noImage.png";
import Search from "../search/Search";
import { ReguestToOfa } from "../uitils/NewReguest";
import { useTranslation } from "react-i18next";

const PackageProduct = () => {
  const { t, i18n } = useTranslation();
  const activeLang = i18n.language;
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["packageProducts", activeLang],
    queryFn: async () =>
      await ReguestToOfa.get(
        `/${activeLang}/products?search=packagefruits&min=${min}&max=${max}`
      ).then((res) => res.data),
    staleTime: 60000,
    onSuccess: () => {
      setMin("");
      setMax("");
    },
  });

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
        <title>
          {t("packageProducts.title")} - {t("ofaMMC")}
        </title>
      </Helmet>
      <section className="my-lg-8 my-4 mt-5 mb-3 ps-6 pe-6">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <h3 className="mb-0">{t("packageProductsComponentTitle")}</h3>
            </div>
          </div>
          <Search
            min={min}
            max={max}
            setMin={setMin}
            setMax={setMax}
            refetch={refetch}
          />
          <div className="row g-4 row-cols-lg-4 row-cols-1 row-cols-md-3">
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
              data.map((item, key) => (
                <div className="col" key={key}>
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <img
                          src={item.iamge || noimage}
                          alt={item.title}
                          className="mb-3 img-fluid"
                        />
                        <div className="card-product-action">
                          <button
                            className="btn-action border-0"
                            onClick={() => {
                              setProduct(item);
                              setOpen(true);
                            }}
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
                            fontSize: "17px",
                          }}
                          className="bg-white border-0 outline-none fs-5"
                          onClick={() => {
                            setProduct(item);
                            setOpen(true);
                          }}
                        >
                          {item.title}
                        </button>
                        <p
                          className="text-success m-0 ms-2"
                          style={{ fontSize: "20px" }}
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
        {open && <Product product={product} setOpen={setOpen} />}
      </section>
    </>
  );
};

export default PackageProduct;
