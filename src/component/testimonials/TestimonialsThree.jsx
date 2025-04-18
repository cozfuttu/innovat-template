
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import required modules (optional based on your needs)
import { Autoplay, EffectFade, Pagination, Scrollbar, A11y } from 'swiper/modules';

import Link from 'next/link';

function TestimonialsThree() {
    return (
        <div>

            {/* rts testimonials area start */}
            <div className="rts-testimonials-area rts-section-gap2Bottom bg-3">
                <div className="container">
                    <div className="row">
                        <div className="col-gl-12">
                            <div className="title-style-three-center">
                                <span>Testimonials</span>
                                <h2 className="title quote">
                                    Amazing feedback from <br />
                                    Our valued clients
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-main-wrapper">
                        <div className="swiper mySwiper-three-testimonials">

                            <Swiper
                                modules={[EffectFade, Autoplay, Pagination, Scrollbar, A11y]} // Importing the Swiper modules as needed
                                spaceBetween={0}
                                slidesPerView={1}
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
                                    <div className="row mt--70 align-items-center">
                                        <div className="col-lg-8">
                                            {/* testimonials area start */}
                                            <div className="testimonails-style-three-wrapper">
                                                {/* ingle testimonials start */}
                                                <div className="testimonials-single-three">
                                                    <div className="icon">
                                                        <Image width={204} height={204}
                                                            src="/assets/images/testimonials/07.png"
                                                            alt="testimonias"
                                                        />
                                                    </div>
                                                    <div className="testimonials-body">
                                                        <p className="disc">
                                                            Working with your team was an absolute pleasure. From
                                                            the initial concept to the final installation, every
                                                            step was executed with our professionalism and
                                                            attention to detail. The end result exceeded our
                                                            expectations, and couldn't be happier with our so
                                                            beautifully transformed space.
                                                        </p>
                                                        <div className="testimonials-bottom">
                                                            <h5 className="title">John William</h5>
                                                            <span>New Client</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ingle testimonials end */}
                                            </div>
                                            {/* testimonials area end */}
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="thumbnail-testimonials d-flex justify-content-end">
                                                <Image width={307} height={350}
                                                    src="/assets/images/testimonials/06.jpg"
                                                    alt="testimonials"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="row mt--70 align-items-center">
                                        <div className="col-lg-8">
                                            {/* testimonials area start */}
                                            <div className="testimonails-style-three-wrapper">
                                                {/* ingle testimonials start */}
                                                <div className="testimonials-single-three">
                                                    <div className="icon">
                                                        <Image width={204} height={204}
                                                            src="/assets/images/testimonials/07.png"
                                                            alt="testimonias"
                                                        />
                                                    </div>
                                                    <div className="testimonials-body">
                                                        <p className="disc">
                                                            Working with your team was an absolute pleasure. From
                                                            the initial concept to the final installation, every
                                                            step was executed with our professionalism and
                                                            attention to detail. The end result exceeded our
                                                            expectations, and couldn't be happier with our so
                                                            beautifully transformed space.
                                                        </p>
                                                        <div className="testimonials-bottom">
                                                            <h5 className="title">John William</h5>
                                                            <span>New Client</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ingle testimonials end */}
                                            </div>
                                            {/* testimonials area end */}
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="thumbnail-testimonials d-flex justify-content-end">
                                                <Image width={307} height={350}
                                                    src="/assets/images/testimonials/06.jpg"
                                                    alt="testimonials"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="row mt--70 align-items-center">
                                        <div className="col-lg-8">
                                            {/* testimonials area start */}
                                            <div className="testimonails-style-three-wrapper">
                                                {/* ingle testimonials start */}
                                                <div className="testimonials-single-three">
                                                    <div className="icon">
                                                        <Image width={204} height={204}
                                                            src="/assets/images/testimonials/07.png"
                                                            alt="testimonias"
                                                        />
                                                    </div>
                                                    <div className="testimonials-body">
                                                        <p className="disc">
                                                            Working with your team was an absolute pleasure. From
                                                            the initial concept to the final installation, every
                                                            step was executed with our professionalism and
                                                            attention to detail. The end result exceeded our
                                                            expectations, and couldn't be happier with our so
                                                            beautifully transformed space.
                                                        </p>
                                                        <div className="testimonials-bottom">
                                                            <h5 className="title">John William</h5>
                                                            <span>New Client</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ingle testimonials end */}
                                            </div>
                                            {/* testimonials area end */}
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="thumbnail-testimonials d-flex justify-content-end">
                                                <Image width={307} height={350}
                                                    src="/assets/images/testimonials/06.jpg"
                                                    alt="testimonials"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>

                        </div>
                    </div>
                </div>
            </div>
            {/* rts testimonials area end */}

        </div>
    )
}

export default TestimonialsThree