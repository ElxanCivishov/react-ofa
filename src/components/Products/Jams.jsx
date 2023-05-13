import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet";

import Product from "./Product";
import Loader from "../uitils/Loader";

import { FiEye } from "react-icons/fi";
import noimage from "../../../public/img/noImage.png";
import { Navigate } from "react-router-dom";
import { NewReguestApi } from "../uitils/NewReguest";

const Jams = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState([]);

  const { isLoading, data, error } = useQuery({
    queryKey: ["jams"],
    queryFn: async () =>
      await NewReguestApi.get(`/products?search=jams`).then((res) => res.data),
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
        <title>Mürəbbələr - Ofa MMC</title>
      </Helmet>
      <section className="mt-5 mb-3 ps-6 pe-6">
        <div className="container ">
          <div className="row">
            <div className="col-md-12 mb-6">
              <h3 className="mb-4">Jams</h3>
              <span className="fs-6 lead">
                Jam is an integral part of table and tea culture of Azerbaijan.
                <br />
                Jams are divided into several types.
                <br />
                Most of these jams are available in our store.
                <br />
                You can get these products easily by contacting us whenever you
                want! We are happy to serve you.
                <br />
              </span>
            </div>
          </div>
          <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4">
            {isLoading ? (
              <div
                className="d-flex align-items-center justify-content-center w-100"
                style={{ height: "200px" }}
              >
                <Loader />
              </div>
            ) : (
              data.map((item, key) => (
                <div className="col cols-lg-2" key={key}>
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center  position-relative ">
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
        {open && <Product product={product} setOpen={setOpen} />}
      </section>
    </>
  );
};

export default Jams;