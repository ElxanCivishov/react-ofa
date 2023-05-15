import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import contactSvg from "../../../public/img/contact/2.png";

const Index = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t("contact.title")} - {t("ofaMMC")}
        </title>
      </Helmet>
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-3">
                <h1 className="h2 mx-4 mt-4 text-center">
                  {t("contactComponent.title")}
                </h1>
                <span className="text-center">
                  <img
                    src={contactSvg}
                    className="img-fluid rounded w-50"
                    alt="Contact Us"
                  />
                </span>
                <p className="card-text mb-5 text-center">
                  {t("contactComponent.content")}
                </p>
              </div>
              <form className="row mt-md-10 mt-5">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">
                    {t("contactComponent.firstname")}
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    {t("contactComponent.lastname")}
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    {t("contactComponent.email")}
                    <span className="text-danger">*</span>
                  </label>
                  <input type="email" className="form-control" name="email" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">
                    {t("contactComponent.phone")}
                  </label>
                  <input type="text" className="form-control" id="phone" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="company" className="form-label">
                    {t("contactComponent.company")}
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" id="company" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="subject" className="form-label">
                    {t("contactComponent.subject")}
                  </label>
                  <input type="text" className="form-control" id="subject" />
                </div>

                <div className="col-md-12 mb-3">
                  <label htmlFor="comments" className="form-label">
                    {t("contactComponent.comments")}
                  </label>
                  <textarea rows={5} className="form-control" id="message" />
                </div>
                <div className="col-md-12 d-flex justify-content-end ">
                  <button className="btn btn-primary w-25">
                    {t("contactComponent.send")}
                  </button>
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
