import { useTranslation } from "react-i18next";
import "./search.scss";
import { MdRefresh } from "react-icons/md";

const Search = ({ min, max, setMax, setMin, refetch }) => {
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };
  const handleRefresh = () => {
    setMin("");
    setMax("");
    refetch();
  };
  return (
    <>
      <div className="w-100">
        <form
          action="#"
          onSubmit={(e) => handleSubmit(e)}
          className="d-flex align-items-center justify-content-end flex-wrap search-wrapper"
        >
          <input
            type="number"
            step="1"
            min="0"
            value={min}
            placeholder={t("search.min")}
            onChange={(e) => setMin(e.target.value)}
          />
          <input
            type="number"
            step="1"
            min="0"
            value={max}
            placeholder={t("search.max")}
            onChange={(e) => setMax(e.target.value)}
          />
          <button
            className="btn btn-primary  d-flex align-items-center"
            type="submit"
          >
            {t("search.apply")}
          </button>
          <button
            className="btn btn-primary  d-flex align-items-center"
            type="button"
            onClick={() => handleRefresh()}
          >
            <MdRefresh />
          </button>
        </form>
      </div>
      <hr />
    </>
  );
};

export default Search;
