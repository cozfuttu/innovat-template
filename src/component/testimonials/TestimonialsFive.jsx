"use client"
// components/Testimonials.js
import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

const Testimonials = () => {
    const testimonials = [
        {
            icon: 'assets/images/testimonials/08.png',
            feedback: "Working with your team was an absolute pleasure. From the initial concept to the final installation, every step was executed with professionalism and attention to detail. The end result exceeded our expectations, and I couldn't be happier with our beautifully transformed space.",
            name: 'John William',
            role: 'New Client',
            image: 'assets/images/testimonials/06.jpg'
        },
        {
            icon: 'assets/images/testimonials/08.png',
            feedback: "Your team's dedication and expertise truly transformed our project. We appreciate the creativity and commitment to quality.",
            name: 'Jane Doe',
            role: 'Returning Client',
            image: 'assets/images/testimonials/06.jpg'
        },
        {
            icon: 'assets/images/testimonials/08.png',
            feedback: "The collaboration was fantastic, and the results speak for themselves. Highly recommend this team!",
            name: 'Michael Smith',
            role: 'Satisfied Customer',
            image: 'assets/images/testimonials/06.jpg'
        },
        // Add more testimonials as needed
    ];

    return (
        <div className="rts-testimonials-area inner-about rts-slide-up">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-style-center">
                            <div className="pre-title-area">
                                <img src="assets/images/about/02.png" alt="about" />
                                <span className="pre-title">Our Review</span>
                            </div>
                            <h2 className="title">
                                Amazing feedback from <br />
                                Our valued clients
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="testimonials-main-wrapper">
                    <Swiper
                        spaceBetween={70}
                        slidesPerView={1} // Change this value for different layout
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="row mt--70 mt_sm--30 align-items-center">
                                    <div className="col-lg-8">
                                        {/* Testimonials area start */}
                                        <div className="testimonails-style-three-wrapper">
                                            {/* Single testimonial start */}
                                            <div className="testimonials-single-three">
                                                <div className="icon">
                                                    <img src={testimonial.icon} alt="testimonial icon" />
                                                </div>
                                                <div className="testimonials-body">
                                                    <p className="disc">{testimonial.feedback}</p>
                                                    <div className="testimonials-bottom">
                                                        <h5 className="title">{testimonial.name}</h5>
                                                        <span>{testimonial.role}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Single testimonial end */}
                                        </div>
                                        {/* Testimonials area end */}
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="thumbnail-testimonials d-flex justify-content-end">
                                            <img src={testimonial.image} alt="testimonial" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
