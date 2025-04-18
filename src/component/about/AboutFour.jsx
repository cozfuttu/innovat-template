import React from 'react'

function AboutFour() {
    return (
        <div>

            {/* about area start */}
            <div className="about-area-one rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="thumbnail-about-five">
                                <img data-aos="move-top" data-aos-delay="100" src="assets/images/about/07.png" alt="about" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-right-inner-five rts-slide-up">
                                <div className="title-area-style-five-left">
                                    <span className="pre">Company story</span>
                                    <h2 className="title" data-aos="move-right" data-aos-delay="100">Our Company Journey</h2>
                                </div>
                                <p className="disc-1">
                                    Our values form the foundation of our work. Integrity, creativity,
                                    and attention to detail drive everything we do. We approach each
                                    project with dedication, embracing challenges as opportunities for
                                    innovation and excellence.
                                </p>
                                <p className="disc">
                                    With years of experience in the industry, our team brings a
                                    diverse range of expertise to the table. From residential to
                                    commercial, from urban planning to interior design
                                </p>
                                <div className="short-service-small">
                                    {/* single service area */}
                                    <div className="single-service-small-check">
                                        <i className="fa-light fa-plus" />
                                        Architecture Design
                                    </div>
                                    {/* single service area end */}
                                    {/* single service area */}
                                    <div className="single-service-small-check">
                                        <i className="fa-light fa-plus" />
                                        Interior Design
                                    </div>
                                    {/* single service area end */}
                                    {/* single service area */}
                                    <div className="single-service-small-check">
                                        <i className="fa-light fa-plus" />
                                        Commercial Building
                                    </div>
                                    {/* single service area end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about area end */}

        </div>
    )
}

export default AboutFour