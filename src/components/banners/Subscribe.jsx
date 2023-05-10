import React from 'react'

const Subscribe = () => {
  return (
    <section
        className="bg-dark"
        style={{
            background: "url(../assets/images/svg-graphics/pattern.svg)no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        >
        <div className="container">
            {/* row */}
            <div className="row">
            <div className="offset-lg-1 col-lg-10">
                <div className="row align-items-center">
                {/* col */}
                <div className="col-md-6">
                    <div className="text-white mt-8 mt-lg-0">
                    <span>$30 discount for your first order</span>
                    <h2 className="h2 text-white  my-4">
                        Get top deals, latest trends, and more.
                    </h2>
                    <p className="text-white-50">
                        Join our email subscription now to get updates on promotions and
                        coupons.
                    </p>
                    {/* form */}
                    <form className="row g-3">
                        <div className="col-6">
                        {/* input */}
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
                        {/* btn */}
                        <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">
                            Sign Up
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                {/* col */}
                <div className="col-md-6">
                    <div className="text-center">
                    {/* img */}
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
  )
}

export default Subscribe
