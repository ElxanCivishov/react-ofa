import ClipLoader from "react-spinners/PulseLoader";

function Loader() {
  return (
    <ClipLoader
      color="#0aad0a"
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loader;
