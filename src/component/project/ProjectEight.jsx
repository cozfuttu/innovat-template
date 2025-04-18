"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const PortfolioDetails = () => {
    return (
        <>
            {/* Portfolio area start - team details area */}
            <div className="team-details-area-portfolio-details bg-light rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-center">
                                <h2 className="title">My Latest Project</h2>
                                <p className="disc">
                                    The Oasis is a new mixed-use development in Dubai that is designed
                                    to be a sustainable <br />
                                    oasis in the desert. The project includes a hotel, apartments,
                                    offices, and retail space.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt--60">
                        <div className="col-lg-12">
                            <div className="swiper-project-product-area-team">
                                <Swiper
                                    modules={[Pagination]}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{ clickable: true }}
                                    className="mySwiper-product-team"
                                    breakpoints={{
                                        // Breakpoint for large screens
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                        // Breakpoint for medium screens
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        // Breakpoint for small screens
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        {/* Single product area */}
                                        <div className="single-product-team-details text-center">
                                            <Link href="#" className="thumbnail">
                                                <Image
                                                    src="/assets/images/product/37.jpg"
                                                    alt="Kitching Interior Design"
                                                    width={500}
                                                    height={500}
                                                />
                                            </Link>
                                            <h5 className="title">Kitching Interior Design</h5>
                                            <span className="designation">Interior Design</span>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* Single product area */}
                                        <div className="single-product-team-details text-center">
                                            <Link href="#" className="thumbnail">
                                                <Image
                                                    src="/assets/images/product/38.jpg"
                                                    alt="Commercial Building"
                                                    width={500}
                                                    height={500}
                                                />
                                            </Link>
                                            <h5 className="title">Commercial Building</h5>
                                            <span className="designation">Architecture Design</span>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* Single product area */}
                                        <div className="single-product-team-details text-center">
                                            <Link href="#" className="thumbnail">
                                                <Image
                                                    src="/assets/images/product/39.jpg"
                                                    alt="Bathroom Design"
                                                    width={500}
                                                    height={500}
                                                />
                                            </Link>
                                            <h5 className="title">Bathroom Design</h5>
                                            <span className="designation">Interior Design</span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* Single product area */}
                                        <div className="single-product-team-details text-center">
                                            <Link href="#" className="thumbnail">
                                                <Image
                                                    src="/assets/images/product/39.jpg"
                                                    alt="Bathroom Design"
                                                    width={500}
                                                    height={500}
                                                />
                                            </Link>
                                            <h5 className="title">Bathroom Design</h5>
                                            <span className="designation">Interior Design</span>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portfolio area end - team details area */}
        </>
    );
};

export default PortfolioDetails;
