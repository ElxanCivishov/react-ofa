import "./search.scss";

const Search = ({ min, max, setMax, setMin, refetch }) => {
  return (
    <>
      <div className="w-100 d-flex align-items-center justify-content-end search-wrapper">
        <input
          type="number"
          step="1"
          min="0"
          value={min}
          placeholder="min"
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="number"
          step="1"
          min="0"
          value={max}
          placeholder="max"
          onChange={(e) => setMax(e.target.value)}
        />
        <button onClick={() => refetch()}>apply</button>
      </div>
      <hr />
    </>
  );
};

export default Search;
