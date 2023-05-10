import { Link } from "react-router-dom";
const UserModal = () => {
    return (
        <div
            className="modal fade"
            id="userModal"
            tabIndex={-1}
            aria-labelledby="userModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-4">
                    <div className="modal-header border-0">
                        <h5
                            className="modal-title fs-3 fw-bold"
                            id="userModalLabel"
                        >
                            Sign Up
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="fullName"
                                    className="form-label"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    placeholder="Enter Your Name"
                                    required=""
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Email address"
                                    required=""
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Password"
                                    required=""
                                />
                                <small className="form-text">
                                    By Signup, you agree to our{" "}
                                    <Link to="#!">Terms of Service</Link>
                                    &amp; <Link to="#!">Privacy Policy</Link>
                                </small>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className="modal-footer border-0 justify-content-center">
                        Already have an account? <Link to="#">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserModal;
