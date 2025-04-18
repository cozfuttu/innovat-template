"use client"
// Import Swiper and necessary components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import required modules (optional based on your needs)
import { Autoplay, EffectFade, Pagination, Scrollbar, A11y } from 'swiper/modules';

function BannerThree() {
    return (
        <div>

            {/* banner three start */}
            <div className="banner-three pt--80">
                <div className="container-full">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* banner three swiper active */}
                            <div className="banner-wrapper-main-three">
                                <div className="swiper mySwiper-banner-three">
                                    <Swiper
                                        modules={[EffectFade, Autoplay, Pagination, Scrollbar, A11y]} // Importing the Swiper modules as needed
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        effect="fade"
                                        loop={true}
                                        speed={1000}
                                        pagination={{ clickable: true }}
                                        autoplay={{
                                            delay: 300, // Delay between transitions (3 seconds)
                                            disableOnInteraction: false, // Continue autoplay after user interactions
                                        }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log('mySwiper-banner-one-in-two')}
                                    >
                                        <SwiperSlide>
                                            {/* single banner wrapper */}
                                            <div className="single-banner-wrapper-three  banner-three-bg bg_image">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-6">
                                                        <div className="left-banner-three">
                                                            <span className="pre-title">Best Interior</span>
                                                            <h1 className="title">
                                                                Innovate Your{" "}
                                                                <span>
                                                                    Kitchen <br />
                                                                    Design
                                                                </span>{" "}
                                                                to Heights
                                                            </h1>
                                                            <p className="disc">
                                                                We believe that a well-designed kitchen should
                                                                seamlessly blend style and functionality. With our
                                                                expertise, we will transform your kitchen.
                                                            </p>
                                                            <a
                                                                href="/portfolio-grid-1"
                                                                className="rts-btn btn-border radious"
                                                            >
                                                                Recent Project
                                                                <i className="fa-thin fa-arrow-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="thumbnail">
                                                            <img src="/assets/images/banner/04.jpg" alt="banner" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* single banner wrapper end */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* single banner wrapper */}
                                            <div className="single-banner-wrapper-three  banner-three-bg bg_image">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-6">
                                                        <div className="left-banner-three">
                                                            <span className="pre-title">Best Interior</span>
                                                            <h1 className="title">
                                                                Extend Your{" "}
                                                                <span>
                                                                    Kitchen <br />
                                                                    Design
                                                                </span>{" "}
                                                                to Heights
                                                            </h1>
                                                            <p className="disc">
                                                                We believe that a well-designed kitchen should
                                                                seamlessly blend style and functionality. With our
                                                                expertise, we will transform your kitchen.
                                                            </p>
                                                            <a
                                                                href="/portfolio-grid-1"
                                                                className="rts-btn btn-border radious"
                                                            >
                                                                Recent Project
                                                                <i className="fa-thin fa-arrow-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="thumbnail">
                                                            <img src="/assets/images/banner/07.jpg" alt="banner" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* single banner wrapper end */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* single banner wrapper */}
                                            <div className="single-banner-wrapper-three  banner-three-bg bg_image">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-6">
                                                        <div className="left-banner-three">
                                                            <span className="pre-title">Best Interior</span>
                                                            <h1 className="title">
                                                                Beautify Your{" "}
                                                                <span>
                                                                    Kitchen <br />
                                                                    Design
                                                                </span>{" "}
                                                                to Heights
                                                            </h1>
                                                            <p className="disc">
                                                                We believe that a well-designed kitchen should
                                                                seamlessly blend style and functionality. With our
                                                                expertise, we will transform your kitchen.
                                                            </p>
                                                            <a
                                                                href="/portfolio-grid-1"
                                                                className="rts-btn btn-border radious"
                                                            >
                                                                Recent Project
                                                                <i className="fa-thin fa-arrow-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="thumbnail">
                                                            <img src="/assets/images/banner/28.jpg" alt="banner" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* single banner wrapper end */}
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            {/* banner three swiper active end */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BannerThree