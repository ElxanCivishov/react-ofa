import React from 'react'

const Banner = () => {
  return (
    <>
    <section>
            <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6 mb-lg-0">
                <div>
                    <div
                    className="py-10 px-8 rounded-3"
                    style={{
                        background:
                        "url(assets/images/banner/grocery-banner.png)no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    >
                    <div>
                        <h3 className="fw-bold mb-1">Fruits &amp; Vegetables</h3>
                        <p className="mb-4">
                        Get Upto <span className="fw-bold">30%</span> Off
                        </p>
                        <a href="#!" className="btn btn-dark">
                         Look at this
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-lg-6 ">
                <div>
                    <div
                    className="py-10 px-8 rounded-3"
                    style={{
                        background:
                        "url(assets/images/banner/grocery-banner-2.jpg)no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    >
                    <div>
                        <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
                        <p className="mb-4">
                        Get Upto <span className="fw-bold">25%</span> Off
                        </p>
                        <a href="#!" className="btn btn-dark">
                            Look at this
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Banner
