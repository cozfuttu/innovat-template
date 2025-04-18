"use client"
import { useEffect } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';

const BannerSlider = () => {
    useEffect(() => {
        // Make sure Swiper modules are used
        Swiper.use([Navigation, Pagination]);

        var sliderOne = new Swiper(".mySwiper-banner-six", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: ".swiper-paginations",
                clickable: true,
                type: 'progressbar',
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        sliderOne.on('slideChange', function () {
            console.log('slider moved');
            var activeslide = sliderOne.realIndex;
            var totalslide = sliderOne.slides.length;
            console.log(activeslide);
            document.querySelector(".activeslide").innerHTML = '0' + (activeslide + 1);
            document.querySelector(".totalslide").innerHTML = (totalslide);
        });
    }, []);

    return (
        <div className="swiper-banner-seven-main-wrapper">
            <div className="swiper mySwiper-banner-six">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="banner-area-six rts-section-gap banner_bg-6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner-content-inner-six">
                                            <span className="pre-title">Architecture</span>
                                            <h1 className="title">Dreams <br /> Building.</h1>
                                            <p className="disc">
                                                Our values form the foundation of our work. Integrity, creativity and attention to detail drive everything we do.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="banner-area-six rts-section-gap banner_bg-7">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner-content-inner-six">
                                            <span className="pre-title">Architecture</span>
                                            <h1 className="title">Dreams <br /> Building.</h1>
                                            <p className="disc">
                                                Our values form the foundation of our work. Integrity, creativity and attention to detail drive everything we do.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="banner-area-six rts-section-gap banner_bg-8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner-content-inner-six">
                                            <span className="pre-title">Architecture</span>
                                            <h1 className="title">Dreams <br /> Building.</h1>
                                            <p className="disc">
                                                Our values form the foundation of our work. Integrity, creativity and attention to detail drive everything we do.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pafination-area-main-home-6">
                            <div className="pagination-left-banner-one">
                                <div className="activeslide">01</div>
                                <div className="swiper-paginations"></div>
                                <div className="totalslide">03</div>
                            </div>
                            <div className="social-text-follow">
                                <span>Follow :</span>
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;
