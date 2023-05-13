import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { NewReguestApi } from "../../components/uitils/NewReguest";
import Loader from "../../components/uitils/Loader";
import noImage from "../../../public/img/noImage.png";

const Index = () => {
  const {
    isLoading,
    error,
    data: gallery,
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () =>
      await NewReguestApi.get(`/gallery`).then((res) => res.data),
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

  if (error)
    return (
      <Navigate
        to="/errorpage"
        state={{ error: error.message }}
        replace={true}
      />
    );

  return (
    <>
      <Helmet>
        <title>Qalareya - Ofa MMC</title>
      </Helmet>
      <section className="mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-8 mb-5">
              <h3 className="mb-2">Our Gallery</h3>
            </div>
            {gallery &&
              gallery.map((item) => (
                <div key={item.id} className="col-12 col-md-6 col-lg-3">
                  <div className="mb-4">
                    <div className="img-zoom">
                      <img
                        src={item.image || noImage}
                        alt=""
                        className="img-fluid rounded-3"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
