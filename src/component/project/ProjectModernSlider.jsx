"use client"
// components/SynchronizedSwiper.js
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Autoplay } from 'swiper/modules';

export default function SynchronizedSwiper() {
    const mainSwiperRef = useRef(null);
    const textSwiperRef = useRef(null);

    useEffect(() => {
        if (mainSwiperRef.current && textSwiperRef.current) {
            // Synchronize both Swipers using the controller
            mainSwiperRef.current.controller.control = textSwiperRef.current;
            textSwiperRef.current.controller.control = mainSwiperRef.current;
        }
    }, [mainSwiperRef, textSwiperRef]); // Ensures it runs once both refs are available

    return (
        <div className="modern-slider-area-start">
            <div className="container">

                <div className="row mt--70">
                    <div className="col-lg-12">
                        {/* Main Product Wrapper */}
                        <div className="main-product-wrapper-two">
                            <Swiper
                                modules={[Controller, Autoplay]}
                                loop={true}
                                autoplay={{ delay: 2500 }}
                                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                                className="swiper mySwiper-product-two-showcase"
                            >
                                <SwiperSlide>
                                    <div className="single-product-wrapper-two">
                                        <a href="product-details-1" className="thumbnail">
                                            <img src="assets/images/product/05.jpg" alt="product" />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-product-wrapper-two">
                                        <a href="product-details-1" className="thumbnail">
                                            <img src="assets/images/product/15.jpg" alt="product" />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-product-wrapper-two">
                                        <a href="product-details-1" className="thumbnail">
                                            <img src="assets/images/product/16.jpg" alt="product" />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            {/* Outer Text Swiper */}
                            <div className="portfolio-outer-text-swiper-wrapper">
                                <Swiper
                                    modules={[Controller, Autoplay]}
                                    loop={true}
                                    autoplay={{ delay: 2500 }}
                                    onSwiper={(swiper) => (textSwiperRef.current = swiper)}
                                    className="swiper mySwiper-product-OuterText-2"
                                >
                                    <SwiperSlide>
                                        <div className="outer-product-text">
                                            <a href="product-details-1">
                                                <h2 className="title-change-one">Living Room <span>Interior</span></h2>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="outer-product-text">
                                            <a href="product-details-1">
                                                <h2 className="title-change-one">Kitchen Room <span>Interior</span></h2>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="outer-product-text">
                                            <a href="product-details-1">
                                                <h2 className="title-change-one">Bathroom Room <span>Interior</span></h2>
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
}
