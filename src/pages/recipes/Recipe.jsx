import noimage from "../../../public/img/noImage.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";

import { ReguestToOfa } from "../../components/uitils/NewReguest";
import Loader from "../../components/uitils/Loader";
import { Navigate, useParams } from "react-router-dom";
import TruncatedText from "../../components/TruncatedText";

const Recipe = () => {
  const { t, i18n } = useTranslation();
  const activeLang = i18n.language;
  const { id } = useParams();

  const {
    isLoading,
    data: recipe,
    isError,
    error,
  } = useQuery({
    queryKey: ["recipe", id, activeLang],
    queryFn: async () =>
      await ReguestToOfa.get(`/${activeLang}/recipes/${id}`).then(
        (res) => res.data
      ),
  });

  if (isError)
    return (
      <Navigate
        to="/errorpage"
        state={{ error: error.message }}
        replace={true}
      />
    );
  return (
    <>
      {isLoading ? (
        <div
          className="d-flex align-items-center justify-content-center w-100"
          style={{ height: "300px" }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <Helmet>
            <title>
              {recipe.title} - {t("ofaMMC")}
            </title>
          </Helmet>
          <div className="container recipe">
            <div className="">
              <h3>{recipe.title}</h3>
              <span>{recipe.created_at.split("T")[0]}</span>
              <p>
                <TruncatedText text={recipe.content} />
              </p>
            </div>
            <div className="col-md-4 col-12">
              <div className="img-zoom">
                <img
                  src={recipe.image || noimage}
                  alt=""
                  className="img-fluid rounded-3 w-100"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Recipe;
