import pattern from "../../../public/img/pattern.svg";
const Subscribe = () => {
  return (
    <section
      className="bg-dark"
      style={{
        background: `url(${pattern})no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-lg-10">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="text-white mt-8 mt-lg-0">
                  <span>$30 discount for your first order</span>
                  <h2 className="h2 text-white  my-4">
                    Get top deals, latest trends, and more.
                  </h2>
                  <p className="text-white-50">
                    Join our email subscription now to get updates on promotions
                    and coupons.
                  </p>
                  <form className="row g-3">
                    <div className="col-6">
                      <label htmlFor="emailAddress" className="visually-hidden">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="emailAddress"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="col-auto">
                      <button type="submit" className="btn btn-primary mb-3">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center">
                  <img
                    src="../assets/images/png/girl-email.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
