import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import noimage from "../../../public/img/noImage.png";
const Recipes = ({ recipes }) => {
  const { t } = useTranslation();
  return (
    <>
      {recipes &&
        recipes.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-8">
            <div className="mb-4">
              <Link to={t("recipe.url", { id: `${item.id}` })} className="link">
                <div className="img-zoom">
                  <img
                    style={{ maxHeight: "250px" }}
                    src={item.image || noimage}
                    alt=""
                    className="img-fluid rounded-3 w-100"
                  />
                </div>
              </Link>
            </div>
            <div>
              <h2 className="h5">
                <Link
                  to={t("recipe.url", { id: `${item.id}` })}
                  className="link"
                >
                  {item.title}
                </Link>
              </h2>
              <p>
                {item.content.substring(0, 120)}
                {item.content.length > 120 && "..."}
              </p>
              <div className="d-flex justify-content-between text-muted mt-4">
                <span>
                  <small>{item.created_at.split("T")[0]}</small>
                </span>
                <small>
                  <Link
                    to={t("recipe.url", { id: `${item.id}` })}
                    className="link fw-bold"
                  >
                    ...Read more
                  </Link>
                </small>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Recipes;
