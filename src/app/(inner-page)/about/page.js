"use client"
import { useEffect } from 'react';
import HeaderFive from "@/component/header/HeaderFive";


import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import AOS from 'aos';
import TeamFive from '@/component/team/TeamFive';
import ProcessTwo from '@/component/workingprocess/ProcessTwo';
import TestimonialsFive from '@/component/testimonials/TestimonialsFive';
import ContactTwo from '@/component/contact/ContactTwo';
import FooterInner from '@/component/footer/FooterInner';

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1500,  // Animation duration in ms
            once: true,
            offset: 0, // Whether animation should happen only once
        });
    }, []);
    return (
        <div className="">

            <HeaderFive />
            <Breadcrumb title="About Us" activeLink="About Us" />

            {/* about  page top histoory information  */}
            <div className="about-top-history-information rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="title-style-left">
                                <div className="pre-title-area">
                                    <img src="assets/images/about/02.png" alt="about" />
                                    <span className="pre-title">Our Project</span>
                                </div>
                                <h2 className="title">Our Story</h2>
                            </div>
                            <div className="about-left-history pl--50 pt--30">
                                <img src="assets/images/about/12.png" alt="about" />
                            </div>
                            <div className="history-image-left mt--55">
                                <img data-aos="move-left"
                                    src="assets/images/about/13.jpg"
                                    alt="about"
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 mt_sm--50">
                            <div className="history-right-area-inner">
                                <p className="disc rts-slide-up">
                                    Our story is rooted in passion, creativity, and a commitment to
                                    excellence. We started as a small team of individuals with a
                                    shared love for interior design and a vision to transform spaces
                                    into inspiring environments.
                                </p>
                                <p className="disc rts-slide-up">
                                    Our journey began when David Richard our visionary founder,
                                    recognized the need for personalized, innovative, and high-quality
                                    interior renovation services. With a background in design and a
                                    passion for creating beautiful and functional spaces, David
                                    Richard set out to build a company that would deliver exceptional
                                    results and exceed client expectations.
                                </p>
                                <p className="disc rts-slide-up">
                                    From humble beginnings, we steadily grew, building a reputation
                                    for our expertise, attention to detail, and client-focused
                                    approach. We have had the privilege of working with a diverse
                                    range of clients, each with unique needs and visions for their
                                    spaces. We take pride in our ability to bring those visions to
                                    life, blending creativity, functionality, and craftsmanship into
                                    every project we undertake.
                                </p>
                                <div className="history-right-img mt--80">
                                    <img data-aos="move-left"
                                        className=""
                                        src="assets/images/about/14.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about  page top histoory information end */}

            {/* rts counter up area start */}
            <div className="rts-counterup-area-start rts_jump_counter__animation">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="counter-main-wrapper-two counter_animation pt--0">
                                {/* ingle counter up */}
                                <div className="counter-single counter__anim">
                                    <div className="inner">
                                        <h2 className="title">
                                            <span className="counter">362</span>k
                                        </h2>
                                        <p>Award Winning</p>
                                    </div>
                                </div>
                                {/* ingle counter up end */}
                                {/* ingle counter up */}
                                <div className="counter-single counter__anim">
                                    <div className="inner">
                                        <h2 className="title">
                                            <span className="counter">106</span>+
                                        </h2>
                                        <p>Project Done</p>
                                    </div>
                                </div>
                                {/* ingle counter up end */}
                                {/* ingle counter up */}
                                <div className="counter-single counter__anim">
                                    <div className="inner">
                                        <h2 className="title">
                                            <span className="counter">120</span>+
                                        </h2>
                                        <p>Award Winning</p>
                                    </div>
                                </div>
                                {/* ingle counter up end */}
                                {/* ingle counter up */}
                                <div className="counter-single counter__anim">
                                    <div className="inner">
                                        <h2 className="title">
                                            <span className="counter">101</span>k
                                        </h2>
                                        <p>Year Experience</p>
                                    </div>
                                </div>
                                {/* ingle counter up end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts counter up area end */}

            <TeamFive />

            <ProcessTwo />
            <TestimonialsFive />
            <ContactTwo />
            <FooterInner />



            <BackToTop />
        </div>
    );
}
