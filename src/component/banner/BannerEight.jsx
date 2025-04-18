"use client"
import AOS from 'aos';
import { useEffect } from 'react';

function BannerEight() {
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
                {/* banner area start */}
                <div className="rts-banner-seven-area rts-section-gap">
                    <div className="container pb--120">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-seven-main-wrapper">
                                    <span className="pre-title" data-aos="move-right" data-aos-delay="0">Renovation</span>
                                    <h1 className="title rts_hero__title" data-aos="move-right" data-aos-delay="100">
                                        <span className="top">Expert Interior</span> <br />
                                        <span className="bottom-right">Renovations</span>
                                        <img
                                            src="assets/images/banner/12.png"
                                            alt="banner"
                                            className="right-top-img"
                                        />
                                        <img
                                            src="assets/images/banner/13.png"
                                            alt="banner"
                                            className="left-bottom-img"
                                        />
                                    </h1>
                                    <p className="disc" data-aos="move-right" data-aos-delay="300">
                                        Our approach to interior renovation is centered arounder
                                        collaboration and open communication. We take the time to listen
                                        to your ideas, preferences, and goal is working closely with you
                                        to develop a design concept.
                                    </p>
                                    <a
                                        href="/product-details-1"
                                        className="rts-read-more-circle-btn" data-aos="move-right" data-aos-delay="500"
                                    >
                                        <i className="fa-solid fa-arrow-up-right" />
                                        <p>Learn More</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-right-large-image-seven" data-aos="move-left" data-aos-delay="100">
                        <img
                            className="rts-reveal"
                            src="assets/images/banner/14.jpg"
                            alt="banner"
                        />
                    </div>
                    {/* shape-area */}
                    <div className="banner-shape-area">
                        <img
                            className="shape-1"
                            src="assets/images/banner/shape/01.png"
                            alt="shape"
                        />
                        <img
                            className="shape-2"
                            src="assets/images/banner/shape/02.png"
                            alt="shape"
                        />
                    </div>
                    {/* shape-area end */}
                </div>
                {/* banner area end */}
            </>

        </div>
    )
}

export default BannerEight