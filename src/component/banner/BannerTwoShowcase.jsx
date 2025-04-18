"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay, Keyboard, EffectFade } from 'swiper/modules';
import { useState } from 'react';
function BannerTwo() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <div className="swiper-banner-two-wrapper" id='home'>
                <div className="swiper mySwiper-banner-two">
                    <Swiper
                        modules={[Navigation, Thumbs, Autoplay, Keyboard, EffectFade]} // Import Swiper modules
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                        keyboard={{ enabled: true, onlyInViewport: true, speed: 1000 }}
                        autoplay={{ delay: 4000 }}
                        loop={true}
                        thumbs={{ swiper: thumbsSwiper }} // Connect thumbs swiper
                        effect="fade"
                        className="mySwiper-banner-two" // Class for styling
                    >
                        <SwiperSlide>
                            {/* banner-two area start */}
                            <div className="banner-twoa-rea-start bg_image banner-bg-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* banner content two inner area start */}
                                            <div className="banner-inner-content-wrapper">
                                                <span className="pre-title">Best Interior Design </span>
                                                <h1 className="title">
                                                    Creating <span>Inspiring</span> <br />
                                                    Interiors Vision
                                                </h1>
                                                <p className="disc">
                                                    We believe that a well-designed space has the power to
                                                    transform lives, evoke in emotions, and enhance experiences.
                                                    Our team of talented designers.
                                                </p>
                                                <a
                                                    href="/Portfolio-grid-col-4"
                                                    className="rts-btn btn-border"
                                                >
                                                    Recent Project <i className="fa-regular fa-arrow-right" />
                                                </a>
                                            </div>
                                            {/* banner content two inner area end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* banner-two area end */}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* banner-two area start */}
                            <div className="banner-twoa-rea-start bg_image banner-bg-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* banner content two inner area start */}
                                            <div className="banner-inner-content-wrapper">
                                                <span className="pre-title">Best Interior Design </span>
                                                <h1 className="title">
                                                    Building <span>Awesome</span> <br />
                                                    Interiors Vision
                                                </h1>
                                                <p className="disc">
                                                    We believe that a well-designed space has the power to
                                                    transform lives, evoke in emotions, and enhance experiences.
                                                    Our team of talented designers.
                                                </p>
                                                <a
                                                    href="/Portfolio-grid-col-4"
                                                    className="rts-btn btn-border"
                                                >
                                                    Recent Project <i className="fa-regular fa-arrow-right" />
                                                </a>
                                            </div>
                                            {/* banner content two inner area end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* banner-two area end */}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* banner-two area start */}
                            <div className="banner-twoa-rea-start bg_image banner-bg-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* banner content two inner area start */}
                                            <div className="banner-inner-content-wrapper">
                                                <span className="pre-title">Best Interior Design </span>
                                                <h1 className="title">
                                                    Decorate <span>Beautiful</span> <br />
                                                    Living Room
                                                </h1>
                                                <p className="disc">
                                                    We believe that a well-designed space has the power to
                                                    transform lives, evoke in emotions, and enhance experiences.
                                                    Our team of talented designers.
                                                </p>
                                                <a
                                                    href="/Portfolio-grid-col-4"
                                                    className="rts-btn btn-border"
                                                >
                                                    Recent Project <i className="fa-regular fa-arrow-right" />
                                                </a>
                                            </div>
                                            {/* banner content two inner area end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* banner-two area end */}
                        </SwiperSlide>
                    </Swiper>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div className="thumbs-swiper-main-wrapper-two">
                        {/* Swiper */}
                        <div className="swiper swiper-banner-thumb-2">
                            <Swiper
                                modules={[Navigation, Thumbs]} // Add required modules
                                slidesPerView={3}
                                onSwiper={setThumbsSwiper} // Set thumbs swiper instance
                                className="swiper-banner-thumb-2" // Class for custom styling
                            >
                                <SwiperSlide>
                                    {/* single item */}
                                    <div className="single-item">
                                        <span className="number">01</span>
                                        <div className="inner">
                                            <span className="pre">Interior design</span>
                                            <h6 className="title">modern office</h6>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single item */}
                                    <div className="single-item">
                                        <span className="number">02</span>
                                        <div className="inner">
                                            <span className="pre">Interior design</span>
                                            <h6 className="title">luxury kitchen</h6>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single item */}
                                    <div className="single-item">
                                        <span className="number">03</span>
                                        <div className="inner">
                                            <span className="pre">Interior design</span>
                                            <h6 className="title">Living Room</h6>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BannerTwo