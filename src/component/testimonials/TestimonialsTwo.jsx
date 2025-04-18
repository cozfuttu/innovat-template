import React from 'react'
import Link from "next/link";
function TestimonialsTwo() {
    return (
        <div>
            {/* tesatimonais area start */}
            <div className="testimonails-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="testimonials-left-main-wrapper-two">
                                <div className="title-left-style-two">
                                    <div className="pre-title">
                                        <span className="pre-title">Testimonials</span>
                                        <img src="assets/images/service/07.png" alt="service" />
                                    </div>
                                    <h2 className="title quote">
                                        Amazing feedback from <br />
                                        Our valued clients
                                    </h2>
                                </div>
                                {/* testimonials amain review area stat */}
                                <div className="testimonials-style-two-wrapper">
                                    {/* single testimonials area start */}
                                    <div className="single-testimonials-style-two">
                                        <div className="icon">
                                            <img
                                                src="assets/images/testimonials/03.png"
                                                alt="testimonials"
                                            />
                                        </div>
                                        <p className="disc">
                                            Working with your team was an absolute pleasure. From the
                                            initial concept to the final installation, every step was
                                            executed with professionalism and attention to detail. The end
                                            result exceeded our expectations, and couldn't be happier with
                                            our beautifully transformed space.
                                        </p>
                                        <div className="bottom-testimonials">
                                            <div className="rating-artea-two">
                                                <div className="stars-one-wrapper">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </div>
                                                <span>4.8 out of 5.0</span>
                                            </div>
                                            <div className="author-rating-area">
                                                <img src="assets/images/testimonials/02.png" alt="author" />
                                                <div className="information">
                                                    <p>John William</p>
                                                    <span>New Client</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single testimonials area end */}
                                </div>
                                {/* testimonials amain review area end */}
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50">
                            <div className="thumbnail-testimonials-2">
                                <div data-aos="move-left" data-aos-delay="100">
                                    <img
                                        className=" rts-reveal-image-one"
                                        src="assets/images/testimonials/05.jpg"
                                        alt="testimonails"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tesatimonais area end */}
        </div>
    )
}

export default TestimonialsTwo