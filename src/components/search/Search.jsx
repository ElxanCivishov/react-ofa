import { useTranslation } from "react-i18next";
import "./search.scss";

const Search = ({ min, max, setMax, setMin, refetch }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-100 d-flex align-items-center justify-content-end search-wrapper">
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
        <button onClick={() => refetch()}>{t("search.apply")}</button>
      </div>
      <hr />
    </>
  );
};

export default Search;
