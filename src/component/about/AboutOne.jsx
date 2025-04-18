"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
function AboutOne() {
    useEffect(() => {
        AOS.init({
            duration: 1200,  // Animation duration in ms
            once: true,
            offset: 0, // Whether animation should happen only once
        });
    }, []);
    return (
        <div>
            {/* rts about area start */}
            <div className="rts-about-area-one rts-section-gap" id="about">
                <div className="container pb--50 pb_sm--0">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="thumbnail-about-one">
                                <img  data-aos="move-right"
                                    className="rts-reveal-image-one"
                                    src="/assets/images/about/01.jpg"
                                    alt="about"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50">
                            <div className="about-style-one-right">
                                <div className="title-style-left" data-aos="fade-up" data-aos-delay="100">
                                    <div className="pre-title-area">
                                        <img src="/assets/images/about/02.png" alt="about" />
                                        <span className="pre-title">About Us</span>
                                    </div>
                                    <h2 className="title mt--0 mb--25 quote">
                                        Creating Inspiring Spaces Discover Premier Interior Design
                                        Experts
                                    </h2>
                                </div>
                                <p className="disc mb--15" data-aos="fade-up" data-aos-delay="300">
                                    At our interior design company, we are passionate about creating
                                    spaces that inspire and enhance your lifestyle. With a team of
                                    skilled designers and professionals, we are strive to provide
                                    exceptional interior design services that exceed your
                                    expectations.
                                </p>
                                <p className="disc" data-aos="fade-up" data-aos-delay="500">
                                    We believe that a well-designed space can have a profound impact
                                    on your well-being and quality of life. Whether it's your home,
                                    office, or any other interior environment is we understand the
                                    importance of creating a space that reflects your personality with
                                    meets your functional needs, and brings you joy.
                                </p>
                                <a href="/about" className="rts-btn btn-border" data-aos="fade-up" data-aos-delay="700">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about area end */}
        </div>
    )
}

export default AboutOne