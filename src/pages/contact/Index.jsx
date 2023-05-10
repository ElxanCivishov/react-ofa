import ModalLocation from "../../components/Modals/Modal";
import SubscribeIndex from "../../components/Banners/Subscribe";
// import axios from 'axios'

const Index = () => {
  // const [name, setName] = useState('');
  // const [company, setCompany] = useState('');
  // const [subject, setSubject] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [messageSent, setMessageSent] = useState(false);
  // const [error, setError] = useState('');

  // const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     setIsLoading(true);

  //     try {
  //         const response = await axios.post('/sendmail', { name, company, subject, phone, email, message });

  //         setIsLoading(false);
  //         setMessageSent(true);
  //     } catch (error) {
  //         setIsLoading(false);
  //         setError(error.response.data.message);
  //     }
  // };

  return (
    <>
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
              <form className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">
                    First Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your First Name"
                    id="name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)} required
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
                <div className="col-md-12 mb-3">
                  <label htmlFor="company" className="form-label">
                    Company<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Company"
                    id="company"
                    // value={company}
                    // onChange={(e) => setCompany(e.target.value)} required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="subject" className="form-label">
                    {" "}
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Subject"
                    id="subject"
                    // value={subject}
                    // onChange={(e) => setSubject(e.target.value)} required
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
                    // value={details.email}
                    // onChange={e => setEmail({ ...details, email: e.target.value })}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">
                    {" "}
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Phone Number"
                    id="phone"
                    // value={phone}
                    // onChange={(e) => setPhone(e.target.value)} required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="comments" className="form-label">
                    {" "}
                    Comments
                  </label>
                  <textarea
                    rows={3}
                    className="form-control"
                    placeholder="Additional Comments"
                    id="message"
                    // value={message}
                    // onChange={(e) => setMessage(e.target.value)} required
                  />
                </div>
                <div className="col-md-12">
                  <button className="btn btn-primary">
                    {/* {isLoading ? 'Sending...' : 'Send'} */} Submit
                  </button>
                </div>
                {/* {messageSent && <p>Thank you for your message!</p>}
                                {error && <p>{error}</p>} */}
              </form>
            </div>
          </div>
        </div>
        <div className="mt-10"></div>
        <SubscribeIndex />
        <ModalLocation />
      </section>
    </>
  );
};

export default Index;
