"use client"
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

function ProjectOne() {
    return (
        <div>

            {/* rts project area start */}
            <div className="rts-project-area rts-section-gap bg-light" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-product-one">
                                <div className="title-style-left">
                                    <div className="pre-title-area">
                                        <img src="/assets/images/about/02.png" alt="about" />
                                        <span className="pre-title">Our Project</span>
                                    </div>
                                    <h2 className="title quote">
                                        Explore our Amazing <br />
                                        Interior Designs
                                    </h2>
                                </div>
                                <p className="disc">
                                    Our interior design project revolves around transforming a
                                    residential space into a modern and inviting oasis. With a focus
                                    on functionality and aesthetics, our team of talented designers
                                    will collaborate closely.
                                </p>
                                <div className="swiper-next-prev-wrapper">
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-full mt--50">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* swiper product one wrapper */}
                            <div className="swiper-product-one-wrapper">
                                <div className="swiper swiper-product-one">

                                    <Swiper
                                        modules={[Navigation, Scrollbar, A11y]} // Importing the Swiper modules as needed
                                        spaceBetween={0}
                                        slidesPerView={5}
                                        loop={true}
                                        navigation={{
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                        }}
                                        speed={500}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        breakpoints={{
                                            // When the window width is >= 640px
                                            20: {
                                                slidesPerView: 1,
                                                spaceBetween: 0,
                                            },
                                            640: {
                                                slidesPerView: 1,
                                                spaceBetween: 0,
                                            },
                                            // When the window width is >= 768px
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 0,
                                            },
                                            // When the window width is >= 1024px
                                            1024: {
                                                slidesPerView: 4,
                                                spaceBetween: 0,
                                            },
                                            1600: {
                                                slidesPerView: 5,
                                                spaceBetween: 0,
                                            },
                                        }}
                                        scrollbar={{ draggable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log('swiper-product-one')}
                                    >
                                        <SwiperSlide>
                                            {/* single swiper-item */}
                                            <div className="single-product-one">
                                                <span className="number">01</span>
                                                <Link href="product-details-1" className="thumbnail">
                                                    <img src="/assets/images/product/01.jpg" alt="product" />
                                                </Link>
                                                <div className="inenr-content-absolute">
                                                    <Link href="product-details-1">
                                                        <h3 className="title">living room interior </h3>
                                                    </Link>
                                                    <span className="category">Interior Design</span>
                                                </div>
                                            </div>
                                            {/* single swiper-item end */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* single swiper-item */}
                                            <div className="single-product-one">
                                                <span className="number">02</span>
                                                <Link href="product-details-1" className="thumbnail">
                                                    <img src="/assets/images/product/02.jpg" alt="product" />
                                                </Link>
                                                <div className="inenr-content-absolute">
                                                    <Link href="product-details-1">
                                                        <h3 className="title">Design Portfolio more</h3>
                                                    </Link>
                                                    <span className="category">Interior Design</span>
                                                </div>
                                            </div>
                                            {/* single swiper-item end */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* single swiper-item */}
                                            <div className="single-product-one">
                                                <span className="number">03</span>
                                                <Link href="product-details-1" className="thumbnail">
                                                    <img src="/assets/images/product/03.jpg" alt="product" />
                                                </Link>
                                                <div className="inenr-content-absolute">
                                                    <Link href="product-details-1">
                                                        <h3 className="title">Filmography Reel</h3>
                                                    </Link>
                                                    <span className="category">Interior Design</span>
                                                </div>
                                            </div>
                                            {/* single swiper-item end */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* single swiper-item */}
                                            <div className="single-product-one">
                                                <span className="number">04</span>
                                                <Link href="product-details-1" className="thumbnail">
                                                    <img src="/assets/images/product/04.jpg" alt="product" />
                                                </Link>
                                                <div className="inenr-content-absolute">
                                                    <Link href="product-details-1">
                                                        <h3 className="title">living room interior </h3>
                                                    </Link>
                                                    <span className="category">Interior Design</span>
                                                </div>
                                            </div>
                                            {/* single swiper-item end */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* single swiper-item */}
                                            <div className="single-product-one">
                                                <span className="number">05</span>
                                                <Link href="product-details-1" className="thumbnail">
                                                    <img src="/assets/images/product/03.jpg" alt="product" />
                                                </Link>
                                                <div className="inenr-content-absolute">
                                                    <Link href="product-details-1">
                                                        <h3 className="title">Coding Creations Morp</h3>
                                                    </Link>
                                                    <span className="category">Interior Design</span>
                                                </div>
                                            </div>
                                            {/* single swiper-item end */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* single swiper-item */}
                                            <div className="single-product-one">
                                                <span className="number">05</span>
                                                <Link href="product-details-1" className="thumbnail">
                                                    <img src="/assets/images/product/03.jpg" alt="product" />
                                                </Link>
                                                <div className="inenr-content-absolute">
                                                    <Link href="product-details-1">
                                                        <h3 className="title">Coding Creations Morp</h3>
                                                    </Link>
                                                    <span className="category">Interior Design</span>
                                                </div>
                                            </div>
                                            {/* single swiper-item end */}
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            {/* swiper product one wrapper end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* rts project area end */}

        </div>
    )
}

export default ProjectOne