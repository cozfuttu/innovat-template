"use client"
import { useEffect } from 'react';
import AOS from 'aos';

function TeamFive() {
    useEffect(() => {
        AOS.init({
            duration: 1500,  // Animation duration in ms
            once: true,
            offset: 0, // Whether animation should happen only once
        });
    }, []);
    return (
        <div>

            <div className="rts-team-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="title-style-center">
                                <div className="pre-title-area">
                                    <img src="assets/images/about/02.png" alt="about" />
                                    <span className="pre-title">Our Team</span>
                                </div>
                                <h2 className="title">Meet Our Talented Team</h2>
                                <p className="disc">
                                    we are proud to have a dedicated and skilled team of professionals{" "}
                                    <br />
                                    who are passionate about interior renovation and design.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--50 rts-slide-up">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100">
                            {/* team style three */}
                            <div className="team-style-three">
                                <a href="#" className="thumbnail">
                                    <img src="assets/images/team/01.jpg" alt="team" />
                                </a>
                                <div className="bottom-content">
                                    <span className="name">architecture</span>
                                    <a href="#">
                                        <h6 className="title">David Leo</h6>
                                    </a>
                                </div>
                                <div className="social-style-team-h">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-youtube" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* team style three end */}
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300">
                            {/* team style three */}
                            <div className="team-style-three">
                                <a href="#" className="thumbnail">
                                    <img src="assets/images/team/02.jpg" alt="team" />
                                </a>
                                <div className="bottom-content">
                                    <span className="name">architecture</span>
                                    <a href="#">
                                        <h6 className="title">Joseph Liam</h6>
                                    </a>
                                </div>
                                <div className="social-style-team-h">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-youtube" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* team style three end */}
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500">
                            {/* team style three */}
                            <div className="team-style-three">
                                <a href="#" className="thumbnail">
                                    <img src="assets/images/team/03.jpg" alt="team" />
                                </a>
                                <div className="bottom-content">
                                    <span className="name">Designer</span>
                                    <a href="#">
                                        <h6 className="title">Eleanor</h6>
                                    </a>
                                </div>
                                <div className="social-style-team-h">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-youtube" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* team style three end */}
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="700">
                            {/* team style three */}
                            <div className="team-style-three">
                                <a href="#" className="thumbnail">
                                    <img src="assets/images/team/04.jpg" alt="team" />
                                </a>
                                <div className="bottom-content">
                                    <span className="name">architecture</span>
                                    <a href="#">
                                        <h6 className="title">Alexander</h6>
                                    </a>
                                </div>
                                <div className="social-style-team-h">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-youtube" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* team style three end */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TeamFive