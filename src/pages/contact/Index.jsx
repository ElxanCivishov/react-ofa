import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import contactSvg from "../../../public/img/contact/2.png";
import { useState } from "react";

import "./contact.scss";
import axios from "axios";

const Index = () => {
  const { t } = useTranslation();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [focused, setFocused] = useState(false);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    comment: "",
    company: "",
    phone: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {
    setFocused(true);
  };

  const html = `<html>
  <h2>Adı, soyad: ${values.firstName} ${values.lastName} </h2>
  <br/>
  <p>Email: ${values.email} <br/> Telefon: ${values.phone} <br/>Company: ${values.company} <br/>Comment: ${values.comment}</p>
  </html>`;

  const emailPattern =
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      values.firstName == "" ||
      values.lastName == "" ||
      values.email == "" ||
      values.subject == "" ||
      values.phone == "" ||
      values.comment == ""
    ) {
      setIsError(true);
      setFocused(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    } else {
      if (!values.email) {
        emailPattern.test(values.email) ? setIsError(false) : setIsError(true);
      } else if (
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        await axios
          .post(`http://api.ofa.az/api/send-email`, {
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            email: values.email,
            subject: values.subject,
            company: values.company,
            comment: values.comment,
          })
          .then((res) => {
            if (res.status === 201) {
              setIsSuccess(true);
              setFocused(false);
            } else {
              setIsError(true);
            }
            resetInputs();
            setTimeout(() => {
              setIsSuccess(false);
              setIsError(false);
            }, 3000);
          });
      }
    }
  };

  const resetInputs = () => {
    values.firstName = "";
    values.lastName = "";
    values.email = "";
    values.phone = "";
    values.subject = "";
    values.company = "";
    values.comment = "";
  };

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
                <div className="text-center">
                  <img
                    src={contactSvg}
                    className="img-fluid rounded w-50"
                    alt="Contact Us"
                  />
                </div>
                <p className="card-text mb-5 text-center">
                  {t("contactComponent.content")}
                </p>
              </div>
              <form
                action="#"
                onSubmit={(e) => handleSubmit(e)}
                className="row mt-md-10 mt-5"
                noValidate
              >
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">
                    {t("contactComponent.firstname")}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    value={values.firstName}
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                    name="firstName"
                    id="firstName"
                    pattern="^[A-Za-z0-9]{3,40}$"
                    required
                    onBlur={() => handleFocus()}
                    focused={focused.toString()}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    {t("contactComponent.lastname")}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    value={values.lastName}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="lastName"
                    className="form-control"
                    pattern="^[A-Za-z0-9]{3,40}$"
                    required
                    onBlur={() => handleFocus()}
                    focused={focused.toString()}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    {t("contactComponent.email")}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={(e) => handleChange(e)}
                    pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                    required
                    onBlur={() => handleFocus()}
                    focused={focused.toString()}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">
                    {t("contactComponent.phone")}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    id="phone"
                    pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                    required
                    value={values.phone}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => handleFocus()}
                    focused={focused.toString()}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="company" className="form-label">
                    {t("contactComponent.company")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    value={values.company}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="subject" className="form-label">
                    {t("contactComponent.subject")}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={(e) => handleChange(e)}
                    required
                    onBlur={() => handleFocus()}
                    focused={focused.toString()}
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <label htmlFor="comments" className="form-label">
                    {t("contactComponent.comments")}
                    <span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows={5}
                    className="form-control"
                    id="comment"
                    name="comment"
                    value={values.comment}
                    onChange={(e) => handleChange(e)}
                    required
                    onBlur={() => handleFocus()}
                    focused={focused.toString()}
                  />
                </div>
                <div className="col-md-12 d-flex justify-content-end ">
                  <button className="btn btn-primary w-25">
                    {t("contactComponent.send")}
                  </button>
                </div>
                {isSuccess && (
                  <div className="w-100 d-flex align-items-center justify-content-center mt-3 mb-3">
                    <p className="text-success fs-4">{t("send.success")}</p>
                  </div>
                )}
                {isError && (
                  <div className="w-100 d-flex align-items-center justify-content-center mt-3 mb-3">
                    <p className="text-danger fs-4">{t("send.error")}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
