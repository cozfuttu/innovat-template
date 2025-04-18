"use client"
// Import Swiper and necessary components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import required modules (optional based on your needs)
import { Autoplay, EffectFade, EffectCoverflow, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/effect-coverflow';

function BannerOne() {
    return (
        <div>
            {/* banner one swiper fade area start */}
            <div className="banner-one" id="home">
                <div className="swiper mySwiper-banner-one-in-two swiper-container-coverflow">
                    {/* Swiper */}
                    <Swiper
                        modules={[EffectFade, EffectCoverflow, Autoplay, Pagination, Scrollbar, A11y]} // Importing the Swiper modules as needed
                        spaceBetween={0}
                        slidesPerView={1}
                        effect="coverflow"
                        loop={true}
                        speed={1000}
                        // pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000, // Delay between transitions (3 seconds)
                            disableOnInteraction: false, // Continue autoplay after user interactions
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('mySwiper-banner-one-in-two')}
                    >
                        <SwiperSlide>
                            {/* rts-banner-area */}
                            <div className="rts-banner-area-start-one pb--100 ptb_sm--140">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="float-right-content">
                                                {/* single-swiper-area start */}
                                                <div className="signle-swiper-start">
                                                    <div className="thumbnail-banner-one">
                                                        <Image width={1700} height={1000} layout='responsive' src="/assets/images/banner/01.jpg" alt="banner" />
                                                    </div>
                                                </div>
                                                {/* single-swiper-area end */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="left-swiper-area-start">
                                    <div className="right-shape">
                                        <Image width={1700} height={1000} layout='responsive' src="/assets/images/banner/icon/03.png" alt="" />
                                    </div>
                                    {/* single swiper area start */}
                                    <div className="single-left-banner-swiper-start">
                                        <span className="pre">Interior Design</span>
                                        <h2 className="title">Discover Inspired Interior Designs</h2>
                                        <p className="disc">
                                            We believe that a well-designed space can have a profound impact
                                            quality life.
                                        </p>
                                        <div className="animation-55">
                                            <a href="/product-details-1" className="rts-btn btn-border">
                                                View Details
                                            </a>
                                        </div>
                                    </div>
                                    {/* single swiper area end */}
                                </div>
                            </div>
                            {/* rts-banner-area end */}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* rts-banner-area */}
                            <div className="rts-banner-area-start-one pb--100 ptb_sm--140">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="float-right-content">
                                                {/* single-swiper-area start */}
                                                <div className="signle-swiper-start">
                                                    <div className="thumbnail-banner-one">
                                                        <Image width={1700} height={1000} layout='responsive' src="/assets/images/banner/22.jpg" alt="banner" />
                                                    </div>
                                                </div>
                                                {/* single-swiper-area end */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="left-swiper-area-start">
                                    <div className="right-shape">
                                        <Image width={1700} height={1000} layout='responsive' src="/assets/images/banner/icon/03.png" alt="" />
                                    </div>
                                    {/* single swiper area start */}
                                    <div className="single-left-banner-swiper-start">
                                        <span className="pre">Interior Design</span>
                                        <h2 className="title">Discover Inspired Interior Designs</h2>
                                        <p className="disc">
                                            We believe that a well-designed space can have a profound impact
                                            quality life.
                                        </p>
                                        <div className="animation-55">
                                            <a href="/product-details-1" className="rts-btn btn-border">
                                                View Details
                                            </a>
                                        </div>
                                    </div>
                                    {/* single swiper area end */}
                                </div>
                            </div>
                            {/* rts-banner-area end */}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* rts-banner-area */}
                            <div className="rts-banner-area-start-one pb--100 ptb_sm--140">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="float-right-content">
                                                {/* single-swiper-area start */}
                                                <div className="signle-swiper-start">
                                                    <div className="thumbnail-banner-one">
                                                        <Image width={1700} height={1000} layout='responsive' src="/assets/images/banner/23.jpg" alt="banner" />
                                                    </div>
                                                </div>
                                                {/* single-swiper-area end */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="left-swiper-area-start">
                                    <div className="right-shape">
                                        <Image width={1700} height={1000} layout='responsive' src="/assets/images/banner/icon/03.png" alt="" />
                                    </div>
                                    {/* single swiper area start */}
                                    <div className="single-left-banner-swiper-start">
                                        <span className="pre">Interior Design</span>
                                        <h2 className="title">Discover Inspired Interior Designs</h2>
                                        <p className="disc">
                                            We believe that a well-designed space can have a profound impact
                                            quality life.
                                        </p>
                                        <div className="animation-55">
                                            <a href="/product-details-1" className="rts-btn btn-border">
                                                View Details
                                            </a>
                                        </div>
                                    </div>
                                    {/* single swiper area end */}
                                </div>
                            </div>
                            {/* rts-banner-area end */}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* banner one swiper fade area end */}
        </div>
    )
}

export default BannerOne