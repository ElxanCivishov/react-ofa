import { useState } from "react";
import { Helmet } from "react-helmet";
import { NewReguest } from "../../components/uitils/NewReguest";
import Loader from "../../components/uitils/Loader";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { users } from "fontawesome";

const Index = () => {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    data: recipes,
    error,
    isError,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: async () =>
      await NewReguest.get(`photos?_page=${page}`).then((res) => res.data),
    keepPreviousData: true,
  });

  if (isLoading)
    return (
      <div
        className="d-flex align-items-center justify-content-center w-100"
        style={{ height: "400px" }}
      >
        <Loader />
      </div>
    );

  if (error)
    return (
      <Navigate
        to="/errorpage"
        state={{ error: error.message }}
        replace={true}
      />
    );

  const pageArry = Array(recipes.total_pages)
    .fill()
    .map((_, index) => index + 1);
  console.log(pageArry);
  return (
    <>
      <Helmet>
        <title>Reseptlər - Ofa MMC</title>
      </Helmet>
      {console.log(recipes)}
      <section className="mt-lg-8 mb-8">
        <div className="container">
          <div className="row">
            {isFetching ? (
              <div
                className="d-flex align-items-center justify-content-center w-100"
                style={{ height: "400px" }}
              >
                <Loader />
              </div>
            ) : (
              recipes.map((item) => (
                <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-8">
                  <div className="mb-4">
                    <a href="#!">
                      <div className="img-zoom">
                        <img
                          src={item.url}
                          alt=""
                          className="img-fluid rounded-3 w-100"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="mb-3">
                    <a href="#!">{item.title}</a>
                  </div>
                  <div>
                    <h2 className="h5">
                      <a href="#!" className="text-inherit">
                        {item.id}
                      </a>
                    </h2>
                    <p>
                      In et eros dapibus, facilisis ipsum sit amet, tempor
                      dolor. Donec sed nisi gravida, molestie dolor molestie,
                      congue sapien.
                    </p>
                    <div className="d-flex justify-content-between text-muted mt-4">
                      <span>
                        <small>22 April 2023</small>
                      </span>
                      <span>
                        <small>
                          Read time:{" "}
                          <span className="text-dark fw-bold">12min</span>
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/*   <div className="col-12 col-md-6 col-lg-4 mb-8">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      src="../assets/images/blog/blog-img-2.jpg"
                      alt=""
                      className="img-fluid rounded-3 w-100"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-3">
                <a href="#!">Recipes</a>
              </div>
              <div>
                <h2 className="h5">
                  <a href="#!" className="text-inherit">
                    Almond Butter Chocolate Chip Zucchini Bars
                  </a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean
                  sit amet tincidunt ellentesque aliquet ligula in ultrices
                  congue.
                </p>
                <div className="d-flex justify-content-between text-muted mt-4">
                  <span>
                    <small>20 April 2023</small>
                  </span>
                  <span>
                    <small>
                      Read time: <span className="text-dark fw-bold">8min</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-8">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      src="../assets/images/blog/blog-img-3.jpg"
                      alt=""
                      className="img-fluid rounded-3 w-100"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-3">
                <a href="#!">Company</a>
              </div>
              <div>
                <h2 className="h5">
                  <a href="#!" className="text-inherit">
                    Spicy Shrimp Tacos Garlic Cilantro Lime Slaw
                  </a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean
                  sit amet tincidunt ellentesque aliquet ligula in ultrices
                  congue.
                </p>
                <div className="d-flex justify-content-between text-muted mt-4">
                  <span>
                    <small>18 April 2023</small>
                  </span>
                  <span>
                    <small>
                      Read time: <span className="text-dark fw-bold">5min</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-8">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      src="../assets/images/blog/blog-img-4.jpg"
                      alt=""
                      className="img-fluid rounded-3 w-100"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-3">
                <a href="#!">Recipes</a>
              </div>
              <div>
                <h2 className="h5">
                  <a href="#!" className="text-inherit">
                    Red Chile Chicken Tacos with Creamy Corn
                  </a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean
                  sit amet tincidunt ellentesque aliquet ligula in ultrices
                  congue.
                </p>
                <div className="d-flex justify-content-between text-muted mt-4">
                  <span>
                    <small>16 April 2023</small>
                  </span>
                  <span>
                    <small>
                      Read time: <span className="text-dark fw-bold">9min</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>
             <div className="col-12 col-md-6 col-lg-4 mb-8">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      src="../assets/images/blog/blog-img-5.jpg"
                      alt=""
                      className="img-fluid rounded-3 w-100"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-3">
                <a href="#!">Retailer</a>
              </div>
              <div>
                <h2 className="h5">
                  <a href="#!" className="text-inherit">
                    Basic + Awesome Broccoli Cheese Soup
                  </a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean
                  sit amet tincidunt ellentesque aliquet ligula in ultrices
                  congue.
                </p>
                <div className="d-flex justify-content-between text-muted mt-4">
                  <span>
                    <small>12 April 2023</small>
                  </span>
                  <span>
                    <small>
                      Read time:{" "}
                      <span className="text-dark fw-bold">12min</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-8">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      src="../assets/images/blog/blog-img-6.jpg"
                      alt=""
                      className="img-fluid rounded-3 w-100"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-3">
                <a href="#!">Recipes</a>
              </div>
              <div>
                <h2 className="h5">
                  <a href="#!" className="text-inherit">
                    No-Boil Baked Penne with Meatballs{" "}
                  </a>
                </h2>
                <p>
                  Nulla consectetur sapien a libero imperdiet posuere. Donec
                  sollicitudin, turpis sit amet sollicitudin tristique, metus
                  eros euismod tortor
                </p>
                <div className="d-flex justify-content-between text-muted mt-4">
                  <span>
                    <small>14 April 2023</small>
                  </span>
                  <span>
                    <small>
                      Read time: <span className="text-dark fw-bold">6min</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-8">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      src="../assets/images/blog/blog-img-7.jpg"
                      alt=""
                      className="img-fluid rounded-3 w-100"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-3">
                <a href="#!">Recipes</a>
              </div>
              <div>
                <h2 className="h5">
                  <a href="#!" className="text-inherit">
                    Red Chile Chicken Tacos with Creamy Corn
                  </a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean
                  sit amet tincidunt ellentesque aliquet ligula in ultrices
                  congue.
                </p>
                <div className="d-flex justify-content-between text-muted mt-4">
                  <span>
                    <small>16 April 2023</small>
                  </span>
                  <span>
                    <small>
                      Read time: <span className="text-dark fw-bold">9min</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-8">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      src="../assets/images/blog/blog-img-8.jpg"
                      alt=""
                      className="img-fluid rounded-3 w-100"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-3">
                <a href="#!">Retailer</a>
              </div>
              <div>
                <h2 className="h5">
                  <a href="#!" className="text-inherit">
                    Basic + Awesome Broccoli Cheese Soup
                  </a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean
                  sit amet tincidunt ellentesque aliquet ligula in ultrices
                  congue.
                </p>
                <div className="d-flex justify-content-between text-muted mt-4">
                  <span>
                    <small>12 April 2023</small>
                  </span>
                  <span>
                    <small>
                      Read time:{" "}
                      <span className="text-dark fw-bold">12min</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-8">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      src="../assets/images/blog/blog-img-9.jpg"
                      alt=""
                      className="img-fluid rounded-3 w-100"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-3">
                <a href="#!">Recipes</a>
              </div>
              <div>
                <h2 className="h5">
                  <a href="#!" className="text-inherit">
                    No-Boil Baked Penne with Meatballs{" "}
                  </a>
                </h2>
                <p>
                  Nulla consectetur sapien a libero imperdiet posuere. Donec
                  sollicitudin, turpis sit amet sollicitudin tristique, metus
                  eros euismod tortor
                </p>
                <div className="d-flex justify-content-between text-muted mt-4">
                  <span>
                    <small>14 April 2023</small>
                  </span>
                  <span>
                    <small>
                      Read time: <span className="text-dark fw-bold">6min</span>
                    </small>
                  </span>
                </div>
              </div>
            </div> */}
            <div className="col-12">
              <nav>
                <ul className="pagination ">
                  <li className="page-item">
                    <button
                      className="page-link  mx-1 rounded-3"
                      disabled={isPreviousData || page === 1}
                      onClick={() => setPage((page) => (page -= 1))}
                    >
                      <FaChevronLeft />
                    </button>
                  </li>
                  <li className="page-item ">
                    <button
                      className="page-link  mx-1 rounded-3 active"
                      href="#"
                    >
                      1
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link mx-1 rounded-3 text-body">
                      2
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link mx-1 rounded-3 text-body">
                      ...
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link mx-1 rounded-3 text-body">
                      12
                    </button>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link mx-1 rounded-3 text-body"
                      onClick={() => setPage((page) => (page += 1))}
                      disabled={isPreviousData || page === recipes.total_pages}
                    >
                      <FaChevronRight />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
