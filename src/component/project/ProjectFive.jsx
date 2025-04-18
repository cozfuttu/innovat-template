
// components/ProjectSwiper.js
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const ProjectSwiper = () => {

    return (
        <>
            {/* Our Latest Projects Area Start */}
            <div className="our-latest-project-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Title Area */}
                            <div className="title-area-style-five-center">
                                <span className="pre">Feature Project</span>
                                <h2 className="title">Our Latest Project</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-full mt--50">
                    <div className="row">
                        <div className="col-gl-12">
                            {/* Swiper Wrapper */}
                            <div className="project-area-swiper-five-wrapper">
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={4}
                                    loop={true}
                                    autoplay={{
                                        delay: 2000,
                                    }}
                                    breakpoints={{
                                        1700: { slidesPerView: 4 },
                                        1500: { slidesPerView: 4 },
                                        1024: { slidesPerView: 3 },
                                        768: { slidesPerView: 2 },
                                        640: { slidesPerView: 2 },
                                        320: { slidesPerView: 1 },
                                    }}
                                    className="mySwiper-project-5"
                                >
                                    <SwiperSlide>
                                        <div className="signle-project-area-five">
                                            <Link href="/product-details-1" className="thumbnail">
                                                <Image width={453} height={352} style={{ width: 'max-content', height: 'auto' }}
                                                    src="/assets/images/product/53.jpg"
                                                    alt="product-area"
                                                />
                                            </Link>
                                            <div className="inner-content">
                                                <span className="tag">Architecture</span>
                                                <Link href="/product-details-1">
                                                    <h3 className="title">Architecture & Imagination</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="signle-project-area-five">
                                            <Link href="/product-details-1" className="thumbnail">
                                                <Image width={453} height={352} style={{ width: 'max-content', height: 'auto' }}
                                                    src="/assets/images/product/54.jpg"
                                                    alt="product-area"
                                                />
                                            </Link>
                                            <div className="inner-content">
                                                <span className="tag">Architecture</span>
                                                <Link href="/product-details-1">
                                                    <h3 className="title">Architecture & Imagination</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="signle-project-area-five">
                                            <Link href="/product-details-1" className="thumbnail">
                                                <Image width={453} height={352} style={{ width: 'max-content', height: 'auto' }}
                                                    src="/assets/images/product/55.jpg"
                                                    alt="product-area"
                                                />
                                            </Link>
                                            <div className="inner-content">
                                                <span className="tag">Architecture</span>
                                                <Link href="/product-details-1">
                                                    <h3 className="title">Architecture & Imagination</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="signle-project-area-five">
                                            <Link href="/product-details-1" className="thumbnail">
                                                <Image width={453} height={352} style={{ width: 'max-content', height: 'auto' }}
                                                    src="/assets/images/product/56.jpg"
                                                    alt="product-area"
                                                />
                                            </Link>
                                            <div className="inner-content">
                                                <span className="tag">Architecture</span>
                                                <Link href="/product-details-1">
                                                    <h3 className="title">Architecture & Imagination</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="signle-project-area-five">
                                            <Link href="/product-details-1" className="thumbnail">
                                                <Image width={453} height={352} style={{ width: 'max-content', height: 'auto' }}
                                                    src="/assets/images/product/53.jpg"
                                                    alt="product-area"
                                                />
                                            </Link>
                                            <div className="inner-content">
                                                <span className="tag">Architecture</span>
                                                <Link href="/product-details-1">
                                                    <h3 className="title">Architecture & Imagination</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="signle-project-area-five">
                                            <Link href="/product-details-1" className="thumbnail">
                                                <Image width={453} height={352} style={{ width: 'max-content', height: 'auto' }}
                                                    src="/assets/images/product/54.jpg"
                                                    alt="product-area"
                                                />
                                            </Link>
                                            <div className="inner-content">
                                                <span className="tag">Architecture</span>
                                                <Link href="/product-details-1">
                                                    <h3 className="title">Architecture & Imagination</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="signle-project-area-five">
                                            <Link href="/product-details-1" className="thumbnail">
                                                <Image width={453} height={352} style={{ width: 'max-content', height: 'auto' }}
                                                    src="/assets/images/product/55.jpg"
                                                    alt="product-area"
                                                />
                                            </Link>
                                            <div className="inner-content">
                                                <span className="tag">Architecture</span>
                                                <Link href="/product-details-1">
                                                    <h3 className="title">Architecture & Imagination</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="signle-project-area-five">
                                            <Link href="/product-details-1" className="thumbnail">
                                                <Image width={453} height={352} style={{ width: 'max-content', height: 'auto' }}
                                                    src="/assets/images/product/56.jpg"
                                                    alt="product-area"
                                                />
                                            </Link>
                                            <div className="inner-content">
                                                <span className="tag">Architecture</span>
                                                <Link href="/product-details-1">
                                                    <h3 className="title">Architecture & Imagination</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Latest Projects Area End */}
        </>
    );
};

export default ProjectSwiper;
