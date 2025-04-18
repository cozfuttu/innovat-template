"use client"
import Link from 'next/link';
// Import Swiper and necessary components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import required modules (optional based on your needs)
import { EffectFade, Pagination, Scrollbar, A11y } from 'swiper/modules';
function TestimonialsOne() {
    return (
        <div>
            {/* rts testimonials area start */}
            <div className="rts-testimonials-area-start rts-section-gap bg-testimonials-1 bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-center">
                                <div className="pre-title-area">
                                    <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/about/02.png" alt="about" />
                                    <span className="pre-title">Testimonials</span>
                                </div>
                                <h2 className="title quote">
                                    Amazing feedback from <br />
                                    Our valued clients
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50">
                        <div className="col-lg-12">
                            <div className="testimonials-one-wrapper">
                                {/* Swiper */}
                                <div className="swiper swiper-testimonails-one">

                                    <Swiper
                                        modules={[Pagination, EffectFade, Scrollbar, A11y]} // Importing the Swiper modules as needed
                                        spaceBetween={60}
                                        slidesPerView={2}
                                        loop={true}
                                        speed={500}
                                        pagination={{ clickable: true }}
                                        // pagination={{ clickable: true }}
                                        autoplay={{
                                            delay: 3000, // Delay between transitions (3 seconds)
                                            disableOnInteraction: false, // Continue autoplay after user interactions
                                        }}
                                        breakpoints={{
                                            // When the window width is >= 640px
                                            20: {
                                                slidesPerView: 1,
                                                spaceBetween: 30,
                                            },
                                            640: {
                                                slidesPerView: 1,
                                                spaceBetween: 30,
                                            },
                                            // When the window width is >= 768px
                                            768: {
                                                slidesPerView: 1,
                                                spaceBetween: 40,
                                            },
                                            // When the window width is >= 1024px
                                            1024: {
                                                slidesPerView: 2,
                                                spaceBetween: 50,
                                            },
                                        }}
                                        scrollbar={{ draggable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log('mySwiper-banner-one-in-two')}
                                    >
                                        <SwiperSlide>
                                            <div className="sigle-testimonials-one">
                                                <div className="top-quote">
                                                    <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }}
                                                        src="/assets/images/testimonials/03.png"
                                                        alt="tstimonials"
                                                    />
                                                </div>
                                                <p>
                                                    Working with your team was an absolute pleasure. From the
                                                    initial concept to the final installation, every step was
                                                    executed with professionalism and attention to detail. The
                                                    end result exceeded our expectations, and couldn't be
                                                    happier with our beautifully transformed space.
                                                </p>
                                                <div className="author-area">
                                                    <div className="thumbnail">
                                                        <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }}
                                                            src="/assets/images/testimonials/04.png"
                                                            alt="tstimonials"
                                                        />
                                                    </div>
                                                    <div className="info">
                                                        <h6 className="title">John William</h6>
                                                        <span>New Client</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="sigle-testimonials-one">
                                                <div className="top-quote">
                                                    <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }}
                                                        src="/assets/images/testimonials/03.png"
                                                        alt="tstimonials"
                                                    />
                                                </div>
                                                <p>
                                                    Working with your team was an absolute pleasure. From the
                                                    initial concept to the final installation, every step was
                                                    executed with professionalism and attention to detail. The
                                                    end result exceeded our expectations, and couldn't be
                                                    happier with our beautifully transformed space.
                                                </p>
                                                <div className="author-area">
                                                    <div className="thumbnail">
                                                        <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }}
                                                            src="/assets/images/testimonials/04.png"
                                                            alt="tstimonials"
                                                        />
                                                    </div>
                                                    <div className="info">
                                                        <h6 className="title">John William</h6>
                                                        <span>New Client</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="sigle-testimonials-one">
                                                <div className="top-quote">
                                                    <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }}
                                                        src="/assets/images/testimonials/03.png"
                                                        alt="tstimonials"
                                                    />
                                                </div>
                                                <p>
                                                    Working with your team was an absolute pleasure. From the
                                                    initial concept to the final installation, every step was
                                                    executed with professionalism and attention to detail. The
                                                    end result exceeded our expectations, and couldn't be
                                                    happier with our beautifully transformed space.
                                                </p>
                                                <div className="author-area">
                                                    <div className="thumbnail">
                                                        <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }}
                                                            src="/assets/images/testimonials/04.png"
                                                            alt="tstimonials"
                                                        />
                                                    </div>
                                                    <div className="info">
                                                        <h6 className="title">John William</h6>
                                                        <span>New Client</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                    </Swiper>

                                    <div className="swiper-pagination" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts testimonials area end */}

        </div>
    )
}

export default TestimonialsOne