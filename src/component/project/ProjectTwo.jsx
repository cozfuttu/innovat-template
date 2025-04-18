



"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

const PortfolioSlider = () => {
    useEffect(() => {
        const activeSlide = document.querySelector('.activeslide');
        const totalSlide = document.querySelector('.totalslide');

        if (activeSlide && totalSlide) {
            const swiperInstance = document.querySelector('.mySwiper-product-two')?.swiper;

            swiperInstance?.on('slideChange', function () {
                const currentIndex = swiperInstance.realIndex + 1; // Real index is zero-based
                const totalSlides = swiperInstance.slides.length - 2; // Accounting for looped slides

                activeSlide.innerHTML = currentIndex < 10 ? '0' + currentIndex : currentIndex;
                totalSlide.innerHTML = totalSlides < 10 ? '0' + totalSlides : totalSlides;
            });
        }
    }, []);

    return (
        <div className="our-project-area-start rts-section-gapTop" id='portfolio'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project-style-two-title-main-wrapper">
                            <div className="title-left-style-two">
                                <div className="pre-title">
                                    <span className="pre-title">Our Project</span>
                                    <img src="/assets/images/service/07.png" alt="service" />
                                </div>
                                <h2 className="title quote">
                                    Explore our Amazing <br />
                                    Interior Project
                                </h2>
                            </div>
                            <p className="disc">
                                Our interior design project revolves around transforming a residential space into a
                                modern and inviting oasis. With a focus on functionality and aesthetics.
                            </p>
                            <div className="pagination-left-banner-one">
                                <div className="activeslide">01</div>
                                <div className="swiper-paginations"></div>
                                <div className="totalslide">03</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt--70">
                    <div className="col-lg-12">
                        <div className="main-product-wrapper-two">
                            <Swiper
                                className="mySwiper-product-two"
                                effect="fade"
                                loop={true}
                                speed={1500}
                                modules={[EffectFade, Pagination, Autoplay]}
                                autoplay={{ delay: 3000 }}
                            >
                                <SwiperSlide>
                                    <div className="single-product-wrapper-two">
                                        <a href="/product-details-1" className="thumbnail">
                                            <img
                                                src="/assets/images/product/05.jpg"
                                                alt="product"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-product-wrapper-two">
                                        <a href="/product-details-1" className="thumbnail">
                                            <img
                                                src="/assets/images/product/15.jpg"
                                                alt="product"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-product-wrapper-two">
                                        <a href="/product-details-1" className="thumbnail">
                                            <img
                                                src="/assets/images/product/16.jpg"
                                                alt="product"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className="portfolio-outer-text-swiper-wrapper">
                                <Swiper
                                    className="mySwiper-product-OuterText"
                                    loop={true}
                                    autoplay={{ delay: 3000 }}
                                    modules={[Pagination, Autoplay]}
                                    pagination={{
                                        el: '.swiper-paginations',
                                        clickable: true,
                                        type: 'progressbar',
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="outer-product-text">
                                            <a href="/product-details-1">
                                                <h2 className="title-change-one">
                                                    Living Room <span>Interior</span>
                                                </h2>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="outer-product-text">
                                            <a href="/product-details-1">
                                                <h2 className="title-change-one">
                                                    Kitchen Room <span>Interior</span>
                                                </h2>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="outer-product-text">
                                            <a href="/product-details-1">
                                                <h2 className="title-change-one">
                                                    Bathroom Room <span>Interior</span>
                                                </h2>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSlider;
