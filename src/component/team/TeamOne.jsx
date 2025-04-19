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
                                    <span className="pre-title">Ekibimiz</span>
                                </div>
                                <h2 className="title quote">
                                    Yetenekli Ekibimiz <br />
                                    Yaratıcı Çözümler Sunuyor
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--30 g-24 rts-slide-up">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100">
                            {/* team area start */}
                            <div className="team-area-start-one">
                                <Link href="/ekip" className="thumbnail">
                                    <img src="/assets/images/team/01.jpg" alt="ekip" />
                                </Link>
                                <div className="team-content">
                                    <div className="name-area">
                                        <Link href="/ekip">
                                            <h6 className="name">Ahmet Yılmaz</h6>
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
                                <Link href="/ekip" className="thumbnail">
                                    <img src="/assets/images/team/02.jpg" alt="ekip" />
                                </Link>
                                <div className="team-content">
                                    <div className="name-area">
                                        <Link href="/ekip">
                                            <h6 className="name">Ayşe Demir</h6>
                                        </Link>
                                        <span className="desig pl--0">Proje Yöneticisi</span>
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
                                <Link href="/ekip" className="thumbnail">
                                    <img src="/assets/images/team/03.jpg" alt="ekip" />
                                </Link>
                                <div className="team-content">
                                    <div className="name-area">
                                        <Link href="/ekip">
                                            <h6 className="name">Mehmet Kaya</h6>
                                        </Link>
                                        <span className="desig pl--0">Yazılım Geliştirici</span>
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
                                <Link href="/ekip" className="thumbnail">
                                    <img src="/assets/images/team/04.jpg" alt="ekip" />
                                </Link>
                                <div className="team-content">
                                    <div className="name-area">
                                        <Link href="/ekip">
                                            <h6 className="name">Zeynep Şahin</h6>
                                        </Link>
                                        <span className="desig pl--0">Dijital Pazarlama Uzmanı</span>
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