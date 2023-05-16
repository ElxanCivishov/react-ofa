import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import notfound from "../../../public/img/notfound.svg";

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Not found - Ofa MMC</title>
      </Helmet>
      <section>
        <div className="container d-flex flex-column">
          <div className="row min-vh-100 justify-content-center align-items-center">
            <div className="offset-lg-1 col-lg-10  py-8 py-xl-0">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className=" mb-6 mb-lg-0">
                    <h1>Something’s wrong here...</h1>
                    <p className="mb-8">
                      We can’t find the page you’re looking for.
                    </p>
                    <Link to="/" className="btn btn-primary ms-2">
                      Back to home
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <img src={notfound} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
