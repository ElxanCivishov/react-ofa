import { useTranslation } from "react-i18next";
import noimage from "../../../public/img/noImage.png";
import topHeaderBg from "../../../public/img/topheader.png";
import footerLogo from "../../../public/img/footer/footer2.png";
import { MdClose } from "react-icons/md";
import { Helmet } from "react-helmet";

import "./product.scss";

const Product = ({ product, setOpen }) => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {product.title} - {t("ofaMMC")}
        </title>
      </Helmet>
      <div className="modal-test" onClick={() => setOpen(false)}>
        <div
          className="modal-dialog-test"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-content-test">
            <div className="modal-header-test">
              <div className="header-bg">
                <img src={topHeaderBg} alt="logo" />
              </div>
              <div className="close">
                <button onClick={() => setOpen(false)}>
                  <MdClose />
                </button>
              </div>
            </div>
            <div className="modal-body-test p-6">
              <div className="d-flex justify-content-between align-items-start ">
                <div className="mt-3 mb-5">
                  <div className="row mt-3 mb-3">
                    <div className="col-md-4">
                      <div>
                        <div className="bg-white">
                          <img
                            src={product.image || noimage}
                            alt={product.title}
                            className="rounded w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="ps-md-8 mt-5 p-2">
                        <h4>{product.title}</h4>
                        <hr className="my-3" />
                        <div>
                          <p>{product.content}</p>
                          <p>Tərkibi: {product.composition}</p>
                          <hr className="my-3" />
                          {product.feature.length > 0 && (
                            <p>{product.feature_title}</p>
                          )}
                          <ul>
                            {product.feature.map((f) => (
                              <li key={f.id}>{f.text}</li>
                            ))}
                          </ul>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 mb-3">
                    <p>{product.addition}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer-test">
              <img src={footerLogo} alt="footer-logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
