"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const Testimonials = () => {
    return (
        <div className="rts-testimonials-area">
            <div className="container border-top-in-container rts-section-gap">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="top-title-full-w-wrapper">
                            <div className="title-area-style-six-left">
                                <span className="pre">Testimonials</span>
                                <h2 className="title">Feedback from clients</h2>
                            </div>
                            <div className="swiper-buttons">
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt--40">
                    <div className="col-lg-12">
                        <div className="testimonials-wrapper-main-swiper mySwiper-testimonials-6">
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={3}
                                spaceBetween={20}
                                loop={true}
                                speed={1500}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                breakpoints={{
                                    1700: { slidesPerView: 3 },
                                    1500: { slidesPerView: 3 },
                                    1024: { slidesPerView: 2 },
                                    768: { slidesPerView: 2 },
                                    640: { slidesPerView: 1 },
                                    320: { slidesPerView: 1 },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="single-testimonials-area-six">
                                        <div className="quotes-area">
                                            <img src="/assets/images/team/quote.png" alt="quote" />
                                        </div>
                                        <p className="disc">
                                            Working with your team was an absolute pleasure. From the initial concept to the final installation, every step was executed with professionalism and attention.
                                        </p>
                                        <div className="author-area">
                                            <img src="/assets/images/team/sm-1.png" alt="author" />
                                            <div className="information-area">
                                                <h6 className="title">Amelia Luna</h6>
                                                <span>New Client</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-testimonials-area-six">
                                        <div className="quotes-area">
                                            <img src="/assets/images/team/quote.png" alt="quote" />
                                        </div>
                                        <p className="disc">
                                            Working with your team was an absolute pleasure. From the initial concept to the final installation, every step was executed with professionalism and attention.
                                        </p>
                                        <div className="author-area">
                                            <img src="/assets/images/team/sm-1.png" alt="author" />
                                            <div className="information-area">
                                                <h6 className="title">Amelia Luna</h6>
                                                <span>New Client</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-testimonials-area-six">
                                        <div className="quotes-area">
                                            <img src="/assets/images/team/quote.png" alt="quote" />
                                        </div>
                                        <p className="disc">
                                            Working with your team was an absolute pleasure. From the initial concept to the final installation, every step was executed with professionalism and attention.
                                        </p>
                                        <div className="author-area">
                                            <img src="/assets/images/team/sm-1.png" alt="author" />
                                            <div className="information-area">
                                                <h6 className="title">Amelia Luna</h6>
                                                <span>New Client</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-testimonials-area-six">
                                        <div className="quotes-area">
                                            <img src="/assets/images/team/quote.png" alt="quote" />
                                        </div>
                                        <p className="disc">
                                            Working with your team was an absolute pleasure. From the initial concept to the final installation, every step was executed with professionalism and attention.
                                        </p>
                                        <div className="author-area">
                                            <img src="/assets/images/team/sm-1.png" alt="author" />
                                            <div className="information-area">
                                                <h6 className="title">Amelia Luna</h6>
                                                <span>New Client</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* Add more SwiperSlide components as needed */}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
