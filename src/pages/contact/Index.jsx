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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");

  const html = `<html>
  <h2>Adı, soyad: ${firstName} ${lastName} </h2>
  <br/>
  <p>Email: ${email} <br/> Telefon: ${phone} <br/>Company: ${company} <br/>Comment: ${comment}</p>
  </html>`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      firstName == "" ||
      lastName == "" ||
      email ||
      subject == "" ||
      phone == "" ||
      comment == ""
    ) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    } else {
      await axios
        .post(`http://localhost:8000/email`, {
          email,
          subject,
          html,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            setIsSuccess(true);
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
  };

  const resetInputs = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setPhone("");
    setCompany("");
    setComment("");
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
              <form
                action="#"
                onSubmit={(e) => handleSubmit(e)}
                className="row mt-md-10 mt-5"
              >
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">
                    {t("contactComponent.firstname")}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                    name="firstName"
                    id="name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    {t("contactComponent.lastname")}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    name="lastName"
                    className="form-control"
                    required
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    pattern="[0-9]{3} [0-9]{3}[0-9]{2}[0-9]{2}"
                    placeholder="055 3139913"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
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
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
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
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
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
