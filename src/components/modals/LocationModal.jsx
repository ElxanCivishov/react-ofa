import { useTranslation } from "react-i18next";
const LocationModal = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <div
        className="modal fade"
        id="locationModal"
        tabIndex={-1}
        aria-labelledby="locationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-6">
              <div className="d-flex justify-content-between align-items-start ">
                {i18n.language === "az" ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6068.385876931716!2d50.077888729001465!3d40.49311640586433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40305fbba5b85b0f%3A0x7fa05452e0acc0e4!2sOFA%20AZERBAIJAN!5e0!3m2!1saz!2saz!4v1684084189805!5m2!1saz!2saz"
                    width={600}
                    height={250}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : i18n.language === "ru" ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6068.385877462066!2d50.0778887!3d40.4931164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40305fbba5b85b0f%3A0x7fa05452e0acc0e4!2sOFA%20AZERBAIJAN!5e0!3m2!1sru!2saz!4v1684084276121!5m2!1sru!2saz"
                    width={600}
                    height={250}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.205457324369!2d50.0791535766067!3d40.492839551002454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40305fbba5b85b0f%3A0x7fa05452e0acc0e4!2sOFA%20AZERBAIJAN!5e0!3m2!1sen!2saz!4v1683120941569!5m2!1sen!2saz"
                    width={600}
                    height={250}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationModal;
