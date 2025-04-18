"use client"
import Image from 'next/image';
import Link from 'next/link';
function AboutThree() {

    return (
        <div>
            {/* about area */}
            <div className="rts-about-area-three rts-section-gap2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* about left area start home three */}
                            <div className="about-left-three-start">
                                <div className="title-style-three-left">
                                    <span>About US</span>
                                    <h2 className="title quote">
                                        we are passionate <br />
                                        <span>interior</span> spaces
                                    </h2>
                                </div>
                                <p className="disc">
                                    we are passionate about creating exceptional interior spaces that
                                    elevate the way you live, work, and experience your surroundings.
                                    With a team of talented designers and a commitment to excellence,
                                    we have established ourselves as a leading provider of interior
                                    design services.
                                </p>
                                <Link href="/about" className="rts-btn btn-border radious-3">
                                    About Us
                                    <i className="fa-thin fa-arrow-right" />
                                </Link>
                            </div>
                            {/* about left area start home three end */}
                        </div>
                        <div className="col-lg-6 mt_sm--50 mt_md--50">
                            {/* about style six */}
                            <div className="about-style-three-right">
                                <Image width={190} height={229} src="/assets/images/about/06.png" alt="about" />
                                <p className="disc">
                                    <span>Professional Work</span> Experience
                                </p>
                                <div className="progress-wrapper-main">
                                    <div
                                        className="single-progress-area-h">
                                        <div className="progress-top">
                                            <p className="name">Interior Design</p>
                                            <span className="parcent">65%</span>
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar wow fadeInLeft bg--primary"
                                                role="progressbar"
                                                style={{ width: "65%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            ></div>
                                        </div>
                                    </div>
                                    <div
                                        className="single-progress-area-h"
                                        data-sal-delay={150}
                                        data-sal="slide-up"
                                        data-sal-duration={800}
                                    >
                                        <div className="progress-top">
                                            <p className="name">Renovation</p>
                                            <span className="parcent">85%</span>
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar wow fadeInLeft bg--primary"
                                                role="progressbar"
                                                style={{ width: "85%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* about style six end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* about area end */}
        </div>
    )
}

export default AboutThree