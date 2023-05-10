import React from 'react'
import { Link } from 'react-router-dom'
import "./productModal.css"

const ProductModal = () => {
  return (
    <div
        className="modal fade"
        id="quickViewModal"
        tabIndex={-1}
        aria-hidden="true"
    >
        <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-content-bg-wrapper">
                            <img src="assets/images/footer/topheader.png" alt=""/>
                        </div>
                <div className="modal-body p-8">
                    <div className="d-flex justify-content-end">
                       <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        />
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                        {/* img slide */}
                                <div className="product productModal" id="productModal">
                                        <div className="bg-white">
                                        {/* img */}
                                        <img
                                            src="assets/images/product/2.jpg"
                                            alt="Dried Apple" className="rounded w-100"
                                        />
                                        </div>
                        </div>
                        {/* product tools */}
                        </div>
                        <div className="col-md-6">
                        <div className="ps-md-8 mt-5">
                            <h3 className="mb-1 h1">Dried Apple</h3>
                            <hr className="my-6" />
                            <div>
                                <div>
                                    <h4>Type:</h4>
                                    <p>Dry Fruits</p>
                                </div>
                                <div>
                                    <h4>Content:</h4>
                                    <p>
                                    All vitamins and useful properties are preserved during the drying process.
                                    </p>
                                </div>
                                <div>
                                    <h4>Composition:</h4>
                                    <p>
                                    Ingredients: Dried apple slices
                                    </p>
                                </div>
                                <hr className="my-6" />
                                <div className="">
                                    <h4>Features:</h4>
                                    <ul className="fs-6">
                                        <li>The advantages of dried apples are comparable to those of fresh apples</li>
                                        <li>Dries apple can help people with chronic eczema, atherosclerosis, rheumatism, and gout</li>
                                        <li>Also useful for those with weak nails, hair, vision and skin problems</li>
                                        <li>Apple has a beneficial effect on nerves, blood circulation and digestion process</li>
                                        <li>Nourishes liver cells with various useful trace elements</li>
                                        <li>Apple contains substances that prevent the formation of cancer cells in the intestine and liver</li>
                                        <li>Dried apple stimulates intestinal peristalsis, participates in the recovery of soft and muscle tissues</li>
                                        <li>Helps the exchange of calcium by the human body</li>
                                    </ul>
                                </div>
                                <div className="">
                                    <h4>Additions:</h4>
                                    <ul className="fs-6">
                                        <li>The advantages of dried apples are comparable to those of fresh apples</li>
                                        <li>Dries apple can help people with chronic eczema, atherosclerosis, rheumatism, and gout</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="mx-2 mt-10">
                    <img src="assets/images/footer/footer2.png" alt="" className="w-100"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductModal
