import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/uitils/Loader";

import noImage from "/img/noImage.png";
import { Navigate } from "react-router-dom";

const Index = () => {
  const {
    isLoading,
    error,
    data: gallery,
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: () =>
      fetch("https://ofa.az/api/gallery").then((res) => res.json()),
  });

  if (isLoading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center "
        style={{ height: "300px" }}
      >
        <Loader />
      </div>
    );
  }

  if (error) return <Navigate to="/errorpage" replace={true} />;

  return (
    <section className="mb-4">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-8 mb-5">
            <h3 className="mb-2">Our Gallery</h3>
          </div>
          {console.log(gallery)}
          {gallery.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-3">
              <div className="mb-4">
                <a href="#!">
                  <div className="img-zoom">
                    <img
                      src={item.image || noImage}
                      alt=""
                      className="img-fluid rounded-3"
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
