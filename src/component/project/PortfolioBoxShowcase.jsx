"use client"
import { useEffect } from 'react';
import Swiper, { Navigation, Pagination, Keyboard, Autoplay, Mousewheel } from 'swiper';

Swiper.use([Navigation, Pagination, Keyboard, Autoplay, Mousewheel]);

const SwiperSlider = () => {
    useEffect(() => {
        const sliderboxPortfolio = new Swiper('.swiper-product-one-box-page', {
            slidesPerView: 4,
            spaceBetween: 0,
            loop: true,
            Navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-paginations',
                type: 'progressbar',
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            autoplay: {
                delay: 1500,
            },
            mousewheel: {
                invert: true,
            },
            speed: 1000,
            breakpoints: {
                1700: { slidesPerView: 4 },
                1500: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
                640: { slidesPerView: 1 },
                320: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
            },
        });

        sliderboxPortfolio.on('slideChange', function () {
            const activeslide = sliderboxPortfolio.realIndex;
            const totalslide = sliderboxPortfolio.slides.length;
            document.querySelector('.activeslide').innerHTML = (activeslide);
            document.querySelector('.totalslide').innerHTML = (totalslide);
        });
    }, []);

    return (
        <div className="rts-project-area">
            <div className="container-full">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="swiper-product-one-wrapper">
                            <div className="swiper swiper-product-one-box-page">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="single-product-one">
                                            <span className="number">01</span>
                                            <a href="#" className="thumbnail">
                                                <img src="/assets/images/product/01.jpg" alt="product" />
                                            </a>
                                            <div className="inenr-content-absolute">
                                                <a href="#">
                                                    <h3 className="title">living room interior</h3>
                                                </a>
                                                <span className="category">Interior Design</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="single-product-one">
                                            <span className="number">02</span>
                                            <a href="#" className="thumbnail">
                                                <img src="/assets/images/product/02.jpg" alt="product" />
                                            </a>
                                            <div className="inenr-content-absolute">
                                                <a href="#">
                                                    <h3 className="title">living room interior</h3>
                                                </a>
                                                <span className="category">Interior Design</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="single-product-one">
                                            <span className="number">03</span>
                                            <a href="#" className="thumbnail">
                                                <img src="/assets/images/product/03.jpg" alt="product" />
                                            </a>
                                            <div className="inenr-content-absolute">
                                                <a href="#">
                                                    <h3 className="title">living room interior</h3>
                                                </a>
                                                <span className="category">Interior Design</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="single-product-one">
                                            <span className="number">04</span>
                                            <a href="#" className="thumbnail">
                                                <img src="/assets/images/product/04.jpg" alt="product" />
                                            </a>
                                            <div className="inenr-content-absolute">
                                                <a href="#">
                                                    <h3 className="title">living room interior</h3>
                                                </a>
                                                <span className="category">Interior Design</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="single-product-one">
                                            <span className="number">05</span>
                                            <a href="#" className="thumbnail">
                                                <img src="/assets/images/product/03.jpg" alt="product" />
                                            </a>
                                            <div className="inenr-content-absolute">
                                                <a href="#">
                                                    <h3 className="title">living room interior</h3>
                                                </a>
                                                <span className="category">Interior Design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-portfolio-boxes">
                                <div className="activeslide">01</div>
                                <div className="swiper-paginations"></div>
                                <div className="totalslide">05</div>
                            </div>
                            {/* Next/Previous buttons */}
                            <div className="swiper-next-prev-wrapper">
                                <div className="swiper-button-next">Next</div>
                                <div className="swiper-button-prev">Previous</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperSlider;