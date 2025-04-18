"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay, Keyboard, EffectFade } from 'swiper/modules';
import { useState } from 'react';

function BannerSix() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>

            {/* banner-slider-area-five */}
            <div className="banner-slider-five">
                <div className="container-full">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="duel-swiper-wrapper-five-parent">
                                {/* swiper banner style five start here */}
                                <div className="swiper mySwiper-banner-five">
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
                                            <div className="bg-image-one bg_image">
                                                <h2 className="title">Architecture</h2>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="bg-image-one two bg_image">
                                                <h2 className="title">Interior Design</h2>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="bg-image-one three bg_image">
                                                <h2 className="title">Building Design</h2>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                {/* swiper banner style five start here end */}
                                <div className="thumbs-swiper-main-wrapper-five">
                                    {/* Swiper */}
                                    <div className="swiper swiper-banner-thumb-5">
                                        <Swiper
                                            modules={[Navigation, Thumbs]} // Add required modules
                                            slidesPerView={3}
                                            onSwiper={setThumbsSwiper} // Set thumbs swiper instance
                                            className="swiper-banner-thumb-2" // Class for custom styling
                                        >
                                            <SwiperSlide>
                                                {/* single item */}
                                                <div className="single-item">
                                                    <img src="assets/images/banner/09.png" alt="banner" />
                                                    <span>01</span>
                                                    <p className="disc">Commercial businesses Building</p>
                                                </div>
                                                {/* single item end */}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                {/* single item */}
                                                <div className="single-item">
                                                    <img src="assets/images/banner/09.png" alt="banner" />
                                                    <span>02</span>
                                                    <p className="disc">Multible businesses Building</p>
                                                </div>
                                                {/* single item end */}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                {/* single item */}
                                                <div className="single-item">
                                                    <img src="assets/images/banner/09.png" alt="banner" />
                                                    <span>03</span>
                                                    <p className="disc">Evolution businesses Building</p>
                                                </div>
                                                {/* single item end */}
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner-slider-area-five end */}

        </div>
    )
}

export default BannerSix