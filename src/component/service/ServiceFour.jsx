"use client"
import AOS from 'aos';
import { useEffect } from 'react';
function ServiceFour() {
    useEffect(() => {
        AOS.init({
            duration: 1200,  // Animation duration in ms
            once: true,
            offset: 0, // Whether animation should happen only once
        });
    }, []);
    return (
        <div>
            <>
                {/* our brand area start */}
                <div className="service-area-four rts-section-gapBottom bg-3" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-title-top-wrapper-four">
                                    <div className="title-style-three-left">
                                        <span>Feature Services</span>
                                        <h2 className="title">
                                            {" "}
                                            Our <span className="strock">Services</span>
                                        </h2>
                                    </div>
                                    <p className="disc">
                                        At Luxury Living Designs, we specialize in creating extraordinary
                                        living spaces that exude elegance, sophistication, and opulence.
                                        With a deep understanding of luxury aesthetics and an unwavering.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-185 mt--50 rts-slide-up">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="100">
                                {/* single service style four */}
                                <div className="single-service-style-four">
                                    <div className="inner">
                                        <h3 className="title">
                                            <span>Luxury</span> <br />
                                            Living Designs
                                        </h3>
                                        <p className="disc">
                                            Space planning is a fundamental aspect off <br /> interior
                                            design that focuses on arranging.
                                        </p>
                                        <div className="services-feature">
                                            <i className="fa-regular fa-plus" />
                                            Customized Design
                                        </div>
                                        <div className="services-feature">
                                            <i className="fa-regular fa-plus" />
                                            Personalized Service
                                        </div>
                                        <a href="/service-details" className="read-more-btn">
                                            Read More
                                            <i className="fa-regular fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* single service style four end */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="300">
                                {/* single service style four */}
                                <div className="single-service-style-four two">
                                    <div className="inner">
                                        <h3 className="title">
                                            <span>Creative</span> <br />
                                            Nest Interiors
                                        </h3>
                                        <p className="disc">
                                            Space planning is a fundamental aspect off <br /> interior
                                            design that focuses on arranging.
                                        </p>
                                        <div className="services-feature">
                                            <i className="fa-regular fa-plus" />
                                            Customized Design
                                        </div>
                                        <div className="services-feature">
                                            <i className="fa-regular fa-plus" />
                                            Personalized Service
                                        </div>
                                        <a href="/service-details" className="read-more-btn">
                                            Read More
                                            <i className="fa-regular fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* single service style four end */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="500">
                                {/* single service style four */}
                                <div className="single-service-style-four  three">
                                    <div className="inner">
                                        <h3 className="title">
                                            <span>Cozy</span> <br />
                                            Comfort riors
                                        </h3>
                                        <p className="disc">
                                            Space planning is a fundamental aspect off <br /> interior
                                            design that focuses on arranging.
                                        </p>
                                        <div className="services-feature">
                                            <i className="fa-regular fa-plus" />
                                            Customized Design
                                        </div>
                                        <div className="services-feature">
                                            <i className="fa-regular fa-plus" />
                                            Personalized Service
                                        </div>
                                        <a href="/service-details" className="read-more-btn">
                                            Read More
                                            <i className="fa-regular fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* single service style four end */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* our brand area ned */}
            </>

        </div>
    )
}

export default ServiceFour