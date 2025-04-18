"use client"
import AOS from 'aos';
import { useEffect } from 'react';
import Link from 'next/link';
function TeamTwo() {
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
            <div className="rts-team-area rts-section-gap2Bottom bg-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="title-team-revel text-center end">
                                Our <span>Team</span>{" "}
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* team astyle three main wrapper */}
                            <div className="team-style-three-wrapper">
                                {/* single team style start */}
                                <div className="team-single-three-style" data-aos="fade-up" data-aos-delay="100">
                                    <Link href="/team-single" className="name-team">
                                        <span>01</span>
                                        Joseph Liam
                                    </Link>
                                    <span className="designation">Interior Designer</span>
                                    <div className="social-team-wrapper">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="/team-single">
                                        <i className="fa-solid fa-arrow-down-right" />
                                    </Link>
                                    <div className="rts-hover-show-img">
                                        <img src="assets/images/team/01.jpg" alt="Thumb" />
                                    </div>
                                </div>
                                {/* single team style end */}
                                {/* single team style start */}
                                <div className="team-single-three-style" data-aos="fade-up" data-aos-delay="300">
                                    <Link href="/team-single" className="name-team">
                                        <span>02</span>
                                        David Leo
                                    </Link>
                                    <span className="designation">Interior Designer</span>
                                    <div className="social-team-wrapper">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="/team-single">
                                        <i className="fa-solid fa-arrow-down-right" />
                                    </Link>
                                    <div className="rts-hover-show-img">
                                        <img src="assets/images/team/04.jpg" alt="Thumb" />
                                    </div>
                                </div>
                                {/* single team style end */}
                                {/* single team style start */}
                                <div className="team-single-three-style" data-aos="fade-up" data-aos-delay="500">
                                    <Link href="/team-single" className="name-team">
                                        <span>03</span>
                                        Eleanor
                                    </Link>
                                    <span className="designation">Interior Designer</span>
                                    <div className="social-team-wrapper">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="/team-single">
                                        <i className="fa-solid fa-arrow-down-right" />
                                    </Link>
                                    <div className="rts-hover-show-img">
                                        <img src="assets/images/team/02.jpg" alt="Thumb" />
                                    </div>
                                </div>
                                {/* single team style end */}
                                {/* single team style start */}
                                <div className="team-single-three-style" data-aos="fade-up" data-aos-delay="700">
                                    <Link href="/team-single" className="name-team">
                                        <span>04</span>
                                        Alexander
                                    </Link>
                                    <span className="designation">Interior Designer</span>
                                    <div className="social-team-wrapper">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="/team-single">
                                        <i className="fa-solid fa-arrow-down-right" />
                                    </Link>
                                    <div className="rts-hover-show-img">
                                        <img src="assets/images/team/03.jpg" alt="Thumb" />
                                    </div>
                                </div>
                                {/* single team style end */}
                                {/* single team style start */}
                                <div className="team-single-three-style" data-aos="fade-up" data-aos-delay="900">
                                    <Link href="/team-single" className="name-team">
                                        <span>05</span>
                                        jon jones
                                    </Link>
                                    <span className="designation">Interior Designer</span>
                                    <div className="social-team-wrapper">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="/team-single">
                                        <i className="fa-solid fa-arrow-down-right" />
                                    </Link>
                                    <div className="rts-hover-show-img">
                                        <img src="assets/images/team/04.jpg" alt="Thumb" />
                                    </div>
                                </div>
                                {/* single team style end */}
                            </div>
                            {/* team astyle three main wrapper end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* team area end */}

        </div>
    )
}

export default TeamTwo