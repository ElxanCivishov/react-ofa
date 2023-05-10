import React from 'react'
import BannerIndex from '../../components/Banners/Infos'

const Index = () => {
  return (
    <>
        <section className="mt-14">
            <div className="container">
            <div className="row">
                <div className="offset-lg-1 col-lg-10 col-12">
                    <div className="row align-items-center mb-14">
                        <div className="col-md-6">
                            <h4 className="mb-8 fs-5"> "OFA" LLC company was established in 2021 in Baku.<br />
                            The main activities of the company are the production and sale of dried fruits and fruit jams</h4>
                                <div className="ms-xxl-1 me-xxl-1 mb-8 mb-md-0">
                                    <h5 className="mb-6">In our catalogue:</h5>
                                        <ul className="fs-6 lead">
                                        <li>Dried fruits</li>
                                        <li>Jams</li>
                                        <li>Tomato paste</li>
                                        <li>Fruit puree</li>
                                        <li>Fruit purees, etc.</li>
                                        </ul>
                                    <p className="fs-6 lead">
                                        The quality of our products is confirmed by conformity certificates.<br />
                                        Strict control is carried out at all stages of the technological chain.<br />
                                        The best natural raw materials are purchased and used during the production.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="me-6">
                                    <img
                                    src="../assets/images/about/g1.jpeg"
                                    alt=""
                                    className="img-fluid rounded-3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <BannerIndex />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Index
