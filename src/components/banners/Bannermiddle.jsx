import React from 'react'

const Bannermiddle = () => {
  return (
    <>
    <section>
            <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6 mb-8">
                <div>
                    <div
                    className="py-10 px-8 rounded-3"
                    style={{
                        background:
                        "url(assets/images/banner/p122.jpg)no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    >
                    <div>
                        <h3 className="fw-bold mb-1 text-white">Peach Jams</h3>
                        <p className="mb-4 text-white">
                         Product - Jams
                        </p>
                        <a href="#!" className="btn btn-dark">
                            Jams
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-lg-6 mb-8">
                <div>
                    <div
                    className="py-10 px-8 rounded-3"
                    style={{
                        background:
                        "url(assets/images/banner/f2.jpg)no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    >
                    <div>
                        <h3 className="fw-bold mb-1 text-white">Feijoa Jam</h3>
                        <p className="mb-4 text-white">
                            Product - Jams
                        </p>
                        <a href="#!" className="btn btn-dark">
                            Jams
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

export default Bannermiddle
