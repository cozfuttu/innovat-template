"use client"
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import { useEffect } from 'react';
function TeamOne() {
    useEffect(() => {
        AOS.init({
            duration: 1200,  // Animation duration in ms
            once: true,
            offset: 0, // Whether animation should happen only once
        });
    }, []);
    return (
        <div>
            {/* team area start */}
            <div className="team-area-start rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-center">
                                <div className="pre-title-area">
                                    <img src="/assets/images/about/02.png" alt="about" />
                                    <span className="pre-title">Our Team</span>
                                </div>
                                <h2 className="title quote">
                                    Our Talented Team Bringing <br />
                                    Creativity to design{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--30 g-24 rts-slide-up">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100">
                            {/* team area start */}
                            <div className="team-area-start-one">
                                <Link href="/team-single" className="thumbnail">
                                    <img src="/assets/images/team/01.jpg" alt="team_area" />
                                </Link>
                                <div className="team-content">
                                    <div className="name-area">
                                        <Link href="/team-single">
                                            <h6 className="name">David Leo</h6>
                                        </Link>
                                        <span className="desig pl--0">CEO</span>
                                    </div>
                                    <div className="social-team-one">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* team area end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300">
                            {/* team area start */}
                            <div className="team-area-start-one">
                                <Link href="/team-single" className="thumbnail">
                                    <img src="/assets/images/team/02.jpg" alt="team_area" />
                                </Link>
                                <div className="team-content">
                                    <div className="name-area">
                                        <Link href="/team-single">
                                            <h6 className="name">Tom Hardy</h6>
                                        </Link>
                                        <span className="desig pl--0">Manager</span>
                                    </div>
                                    <div className="social-team-one">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* team area end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500">
                            {/* team area start */}
                            <div className="team-area-start-one">
                                <Link href="/team-single" className="thumbnail">
                                    <img src="/assets/images/team/03.jpg" alt="team_area" />
                                </Link>
                                <div className="team-content">
                                    <div className="name-area">
                                        <Link href="/team-single">
                                            <h6 className="name">Arya Stark</h6>
                                        </Link>
                                        <span className="desig pl--0">Designer</span>
                                    </div>
                                    <div className="social-team-one">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* team area end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="700">
                            {/* team area start */}
                            <div className="team-area-start-one">
                                <Link href="/team-single" className="thumbnail">
                                    <img src="/assets/images/team/04.jpg" alt="team_area" />
                                </Link>
                                <div className="team-content">
                                    <div className="name-area">
                                        <Link href="/team-single">
                                            <h6 className="name">John Snow</h6>
                                        </Link>
                                        <span className="desig pl--0">Architect</span>
                                    </div>
                                    <div className="social-team-one">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* team area end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* team area end */}
        </div>
    )
}

export default TeamOne