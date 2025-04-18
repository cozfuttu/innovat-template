"use client"
import AOS from 'aos';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
function TeamThree() {
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
                {/* rts team area start */}
                <div className="rts-team-area">
                    <div className="container border-top-in-container rts-section-gap">
                        <div className="row">
                            <div className="col-gl-12">
                                {/* title-left */}
                                <div className="title-area-style-six-left">
                                    <span className="pre">Our Team</span>
                                    <h2 className="title">Our Team Member</h2>
                                </div>
                                {/* title mid text */}
                            </div>
                        </div>
                        <div className="row mt--30 g-24 rts-slide-up">
                            <div className="col-lg-3 col-md-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100">
                                {/* team area start */}
                                <div className="team-area-start-one">
                                    <Link href="/team-single" className="thumbnail">
                                        <Image width={537} height={498} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/team/01.jpg" alt="team_area" />
                                    </Link>
                                    <div className="team-content">
                                        <div className="name-area">
                                            <h6 className="name">David Leo</h6>
                                            <span className="desig">Ceo</span>
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
                            <div className="col-lg-3 col-md-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
                                {/* team area start */}
                                <div className="team-area-start-one">
                                    <Link href="/team-single" className="thumbnail">
                                        <Image width={537} height={498} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/team/02.jpg" alt="team_area" />
                                    </Link>
                                    <div className="team-content">
                                        <div className="name-area">
                                            <h6 className="name">Tom Hardy</h6>
                                            <span className="desig">Manager</span>
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
                            <div className="col-lg-3 col-md-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
                                {/* team area start */}
                                <div className="team-area-start-one">
                                    <Link href="/team-single" className="thumbnail">
                                        <Image width={537} height={498} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/team/03.jpg" alt="team_area" />
                                    </Link>
                                    <div className="team-content">
                                        <div className="name-area">
                                            <h6 className="name">Arya Stark</h6>
                                            <span className="desig">Designer</span>
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
                            <div className="col-lg-3 col-md-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="700">
                                {/* team area start */}
                                <div className="team-area-start-one">
                                    <Link href="/team-single" className="thumbnail">
                                        <Image width={537} height={498} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/team/04.jpg" alt="team_area" />
                                    </Link>
                                    <div className="team-content">
                                        <div className="name-area">
                                            <h6 className="name">John Snow</h6>
                                            <span className="desig">Architect</span>
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
                {/* rts team area end */}
            </>

        </div>
    )
}

export default TeamThree