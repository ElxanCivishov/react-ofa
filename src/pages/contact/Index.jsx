import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Əlaqə - Ofa MMC</title>
      </Helmet>
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-3">
                <h1 className="h2 mx-4 mt-4 text-center">
                  Get in touch with us
                </h1>
                <span className="text-center">
                  <img
                    src="assets/images/contact/2.png"
                    className="img-fluid rounded w-50"
                    alt="Contact Us"
                  />
                </span>
                <p className="card-text mb-5 text-center">
                  This form is for retailer inquiries only.
                  <br />
                  For all other customer or shopper support requests, please
                  visit the links below this form.
                </p>
              </div>
              <form className="row mt-md-10 mt-5">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">
                    First Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your First Name"
                    id="name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Last Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Last name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your First Name"
                    name="email"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Phone Number"
                    id="phone"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="company" className="form-label">
                    Company<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Company"
                    id="company"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Subject"
                    id="subject"
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <label htmlFor="comments" className="form-label">
                    Comments
                  </label>
                  <textarea
                    rows={5}
                    className="form-control"
                    placeholder="Additional Comments"
                    id="message"
                  />
                </div>
                <div className="col-md-12 d-flex justify-content-end ">
                  <button className="btn btn-primary w-25">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
