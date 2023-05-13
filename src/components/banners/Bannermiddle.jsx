import { Link } from "react-router-dom";

const Bannermiddle = () => {
  return (
    <>
      <section className="ps-6 pe-6">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mt-3">
              <div>
                <div
                  className="py-10 px-8 rounded-3"
                  style={{
                    background: "url(assets/images/banner/p122.jpg)no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1 text-white">Peach Jams</h3>
                    <p className="mb-4 text-white">Product - Jams</p>
                    <Link to="/jams" className="btn btn-dark">
                      Jams
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-3">
              <div>
                <div
                  className="py-10 px-8 rounded-3"
                  style={{
                    background: "url(assets/images/banner/f2.jpg)no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1 text-white">Feijoa Jam</h3>
                    <p className="mb-4 text-white">Product - Jams</p>
                    <Link to="/jams" className="btn btn-dark">
                      Jams
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bannermiddle;
