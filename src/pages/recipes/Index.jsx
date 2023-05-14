import { useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

import { getRecipesData } from "../../components/uitils/NewReguest";
import Loader from "../../components/uitils/Loader";
import Pagination from "../../components/uitils/Pagination";
import Recipes from "./Recipes";
import "./Recipes.scss";
import { PER_PAGE_COUNT } from "../../components/uitils/Constants";

const Index = () => {
  const [page, setPage] = useState(1);

  const { isLoading, data, isError, error, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["recipes", page],
      queryFn: async () => await getRecipesData(page),
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

  if (isError)
    return (
      <Navigate
        to="/errorpage"
        state={{ error: error.message }}
        replace={true}
      />
    );

  const pageCount = Math.ceil(data.totalData / PER_PAGE_COUNT);

  return (
    <>
      <Helmet>
        <title>Reseptlər - Ofa MMC</title>
      </Helmet>
      <section className="mt-lg-8 mb-8">
        <div className="container">
          <div className="row">
            <Recipes recipes={data.recipes} />

            <div className="d-flex align-items-center justify-content-between">
              <div className="col-9">
                {pageCount !== 1 && (
                  <Pagination
                    setPage={setPage}
                    page={page}
                    totalPage={data.totalData}
                    isPreviousData={isPreviousData}
                  />
                )}
              </div>
              {isFetching && (
                <div className="pb-4 pe-4">
                  <Loader />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
