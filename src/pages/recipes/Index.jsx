import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

import { ReguestToOfa } from "../../components/uitils/NewReguest";
import Loader from "../../components/uitils/Loader";
import Pagination from "../../components/uitils/Pagination";
import Recipes from "./Recipes";
import "./Recipes.scss";
import { PER_PAGE_COUNT } from "../../components/uitils/Constants";
import SearchInput from "../../components/search/SearchInput";

const Index = () => {
  const { t, i18n } = useTranslation();
  const activeLang = i18n.language;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const {
    isLoading,
    data: recipes,
    isError,
    error,
    isFetching,
    isPreviousData,
    refetch,
  } = useQuery({
    queryKey: ["recipes", activeLang, page],
    queryFn: async () =>
      await ReguestToOfa.get(
        `/${activeLang}/recipes?page=${page}&limit=${PER_PAGE_COUNT}&search=${search}`
      ).then((res) => res.data),
    keepPreviousData: true,
    staleTime: 60000,
    onSuccess: () => {
      setSearch("");
    },
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

  const pageCount = Math.ceil(recipes.total / PER_PAGE_COUNT);

  return (
    <>
      <Helmet>
        <title>
          {t("recipes.title")} - {t("ofaMMC")}
        </title>
      </Helmet>
      <section className="mt-lg-8 mb-8">
        <div className="container">
          <SearchInput
            search={search}
            setSearch={setSearch}
            refetch={refetch}
          />
          <div className="row">
            {isLoading ? (
              <div
                className="d-flex align-items-center justify-content-center w-100"
                style={{ height: "200px" }}
              >
                <Loader />
              </div>
            ) : recipes.data.length == 0 ? (
              <div
                className="d-flex align-items-center justify-content-center w-100"
                style={{ height: "200px" }}
              >
                <p className="text-center">{t("noResult")}</p>
              </div>
            ) : (
              <>
                <Recipes recipes={recipes.data} />
                <div className="d-flex align-items-center justify-content-between">
                  <div className="col-9">
                    {pageCount > 1 && (
                      <Pagination
                        setPage={setPage}
                        page={page}
                        totalPage={recipes.total}
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
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
