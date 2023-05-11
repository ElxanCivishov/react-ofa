import { Link } from "react-router-dom";
import "./ErrorPage.scss";
const ErrorPage = () => {
  return (
    <div>
      <section>
        <div className="container d-flex flex-column">
          <div className="row min-vh-100 justify-content-center align-items-center">
            <div className="offset-lg-1 col-lg-10  py-8 py-xl-0">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className=" mb-6 mb-lg-0">
                    <h1>Something’s wrong here...</h1>
                    <Link to="/" className="btn btn-danger ms-2">
                      Back to home
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <img src="img/error.png" alt="" className="img-fluid" />
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

export default ErrorPage;
