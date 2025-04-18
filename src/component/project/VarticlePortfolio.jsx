"use client"
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper/modules';

export default function PortfolioSwiper() {
    useEffect(() => {
        const hoverEffects = [
            { title: '.single-projects-title-1.one', bg: '.bg-image.one' },
            { title: '.single-projects-title-1.two', bg: '.bg-image.two' },
            { title: '.single-projects-title-1.three', bg: '.bg-image.three' },
            { title: '.single-projects-title-1.four', bg: '.bg-image.four' },
            { title: '.single-projects-title-1.five', bg: '.bg-image.five' },
        ];

        hoverEffects.forEach(({ title, bg }) => {
            const hoverElements = document.querySelectorAll(title);
            const bgElements = document.querySelectorAll(bg);

            if (hoverElements.length) {
                hoverElements.forEach((element) => {
                    element.addEventListener("mouseenter", () => {
                        // Remove active class from all other titles and background images
                        hoverEffects.forEach(({ title: t, bg: b }) => {
                            document.querySelectorAll(t).forEach(el => el.classList.remove("active"));
                            document.querySelectorAll(b).forEach(bgEl => bgEl.classList.remove("active"));
                        });

                        // Add active class to the current title and its corresponding background image
                        element.classList.add("active");
                        bgElements.forEach(bgEl => bgEl.classList.add("active"));
                    });
                });
            }
        });
    }, []);

    return (
        <div className="rts-portfolio-area-bg-change with-grid">
            <div className="container-full position-relative">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product-area-full-width">
                            <div className="title-area">
                                <Swiper
                                    className="mySwiper-varticle-portfolio"
                                    slidesPerView={4}
                                    modules={[Autoplay, Navigation]}
                                    spaceBetween={20}
                                    autoplay={{ delay: 2500 }}
                                    loop={true}
                                    speed={500}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    breakpoints={{
                                        1700: { slidesPerView: 4 },
                                        1500: { slidesPerView: 3 },
                                        1024: { slidesPerView: 2 },
                                        768: { slidesPerView: 2 },
                                        640: { slidesPerView: 1 },
                                        320: { slidesPerView: 1 },
                                    }}
                                >
                                    <SwiperSlide className="swiper-slide single-projects-title-1 one active">
                                        <div className="single-projects-title">
                                            <a href="#"><h5 className="title">Bathroom Remodeling</h5></a>
                                            <span>Interior Remodeling</span>
                                            <div className="details-area">
                                                <p className="disc">Consectetur adipisicing elit. Qui iusto vel sequi, atque rem omnis dolore eligendi tempore vitae tenetur. Lorem ipsum dolor.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide single-projects-title-1 two">
                                        <div className="single-projects-title">
                                            <a href="#"><h5 className="title">Kitchen Renovations</h5></a>
                                            <span>Interior Remodeling</span>
                                            <div className="details-area">
                                                <p className="disc">Consectetur adipisicing elit. Qui iusto vel sequi, atque rem omnis dolore eligendi tempore vitae tenetur. Lorem ipsum dolor.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide single-projects-title-1 three">
                                        <div className="single-projects-title">
                                            <a href="#"><h5 className="title">Living Room and Bedroom</h5></a>
                                            <span>Interior Remodeling</span>
                                            <div className="details-area">
                                                <p className="disc">Consectetur adipisicing elit. Qui iusto vel sequi, atque rem omnis dolore eligendi tempore vitae tenetur. Lorem ipsum dolor.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide single-projects-title-1 four">
                                        <div className="single-projects-title">
                                            <a href="#"><h5 className="title">Paint and Wall Treatments</h5></a>
                                            <span>Interior Remodeling</span>
                                            <div className="details-area">
                                                <p className="disc">Consectetur adipisicing elit. Qui iusto vel sequi, atque rem omnis dolore eligendi tempore vitae tenetur. Lorem ipsum dolor.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide single-projects-title-1 five">
                                        <div className="single-projects-title">
                                            <a href="#"><h5 className="title">Paint and Wall Treatments</h5></a>
                                            <span>Interior Remodeling</span>
                                            <div className="details-area">
                                                <p className="disc">Consectetur adipisicing elit. Qui iusto vel sequi, atque rem omnis dolore eligendi tempore vitae tenetur. Lorem ipsum dolor.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                </Swiper>
                            </div>
                            <div className="bg-images">
                                <div className="bg-image one active"><img src="/assets/images/product/40.jpg" alt="product" /></div>
                                <div className="bg-image two"><img src="/assets/images/product/41.jpg" alt="product" /></div>
                                <div className="bg-image three"><img src="/assets/images/product/42.jpg" alt="product" /></div>
                                <div className="bg-image four"><img src="/assets/images/product/43.jpg" alt="product" /></div>
                                <div className="bg-image five"><img src="/assets/images/product/43.jpg" alt="product" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-line">
                    <div className="grid-lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
