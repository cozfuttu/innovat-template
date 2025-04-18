"use client"
import AOS from 'aos';
import { useEffect } from 'react';

function BannerFive() {
    useEffect(() => {
        AOS.init({
            duration: 1200,  // Animation duration in ms
            once: true,
            offset: 0, // Whether animation should happen only once
        });
    }, []);
    return (
        <div>

            {/* rts banner top-area */}
            <div className="rts-banner-top-area pt--100 pt_sm--50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* banner-top-five start */}
                            <div className="banner-top-five">
                                <div className="left-area">
                                    <span>
                                        Timeless Spaces <br />
                                        Architecture
                                    </span>
                                    <h1 className="title rts_hero__title" data-aos="move-right" data-aos-delay="100">Innovative</h1>
                                </div>
                                <div className="right-area">
                                    <p className="disc">
                                        we are passionate about creating exceptional interior spaces
                                        that elevate work, and experience your surroundings.
                                    </p>
                                    <a
                                        href="/product-details-4"
                                        className="rts-read-more-circle-btn"
                                    >
                                        <i className="fa-solid fa-arrow-up-right" />
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            {/* banner-top-five end */}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BannerFive