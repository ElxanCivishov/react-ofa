import { useTranslation } from "react-i18next";
import "./search.scss";

const Search = ({ search, setSearch, refetch }) => {
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };
  return (
    <>
      <div className="w-100  ">
        <form
          action="#"
          onSubmit={(e) => handleSubmit(e)}
          className="d-flex align-items-center justify-content-end search-wrapper"
        >
          <input
            type="text"
            value={search}
            placeholder={t("search.text")}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-primary  d-flex align-items-center"
            type="submit"
          >
            {t("search.apply")}
          </button>
        </form>
      </div>
      <hr />
    </>
  );
};

export default Search;
