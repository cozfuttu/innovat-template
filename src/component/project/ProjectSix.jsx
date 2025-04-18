"use client"
import AOS from 'aos';
import { useEffect } from 'react';
import Image from 'next/image';
function ProjectSix() {
    useEffect(() => {
        AOS.init({
            duration: 1200,  // Animation duration in ms
            once: true,
            offset: 0, // Whether animation should happen only once
        });
    }, []);
    return (
        <div>

            {/* rts projects area start */}
            <div className="rts-projects-area rts-section-gap ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-full-top-wrapper">
                                {/* title-left */}
                                <div className="title-area-style-six-left">
                                    <span className="pre">Case Study</span>
                                    <h2 className="title">Our Recent Project</h2>
                                </div>
                                {/* title mid text */}
                                <p className="disc">
                                    In our interior design projects, we aim to create environments
                                    that inspire, uplift, &amp; enhance the lives of those who
                                    inhabit.
                                </p>
                                <a
                                    href="portfolio-grid-1"
                                    className="rts-read-more-circle-btn under-line"
                                >
                                    <i className="fa-solid fa-arrow-up-right" />
                                    <p>View All Projects</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--90">
                        <div className="col-lg-12 rts_portfolio_animation-wrapper">
                            <div className="portfolio-main-wrapper-h-six">
                                <div className="project--style-six rts-portfolio__item mb--70 wow fadeInUp" data-wow-delay="0.1s">
                                    <a href="product-details-1" className="thumbnail" data-aos="move-right" data-aos-delay="100">
                                        <Image width={537} height={498} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/product/10.jpg" alt="product" />
                                    </a>
                                    <div className="inner-content">
                                        <a href="product-details-1">
                                            <h6 className="title"> Commercial Architecture</h6>
                                        </a>
                                        <p className="disc">
                                            Creating vibrant and integrated spaces that combine
                                            residential, commercial, and leisure elements.
                                        </p>
                                    </div>
                                </div>
                                <div className="project--style-six rts-portfolio__item wow fadeInUp" data-wow-delay="0.2s">
                                    <a href="product-details-1" className="thumbnail" data-aos="move-right" data-aos-delay="100">
                                        <Image width={537} height={498} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/product/11.jpg" alt="product" />
                                    </a>
                                    <div className="inner-content">
                                        <a href="product-details-1">
                                            <h6 className="title"> Commercial Architecture</h6>
                                        </a>
                                        <p className="disc">
                                            Creating vibrant and integrated spaces that combine
                                            residential, commercial, and leisure elements.
                                        </p>
                                    </div>
                                </div>
                                <div className="project--style-six rts-portfolio__item mb--70 wow fadeInUp">
                                    <a href="product-details-1" className="thumbnail" data-aos="move-right" data-aos-delay="100">
                                        <Image width={537} height={498} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/product/12.jpg" alt="product" />
                                    </a>
                                    <div className="inner-content">
                                        <a href="product-details-1">
                                            <h6 className="title"> Commercial Architecture</h6>
                                        </a>
                                        <p className="disc">
                                            Creating vibrant and integrated spaces that combine
                                            residential, commercial, and leisure elements.
                                        </p>
                                    </div>
                                </div>
                                <div className="project--style-six rts-portfolio__item wow fadeInUp" data-wow-delay="0.3s">
                                    <a href="product-details-1" className="thumbnail" data-aos="move-right" data-aos-delay="100">
                                        <Image width={537} height={498} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/product/13.jpg" alt="product" />
                                    </a>
                                    <div className="inner-content">
                                        <a href="product-details-1">
                                            <h6 className="title"> Commercial Architecture</h6>
                                        </a>
                                        <p className="disc">
                                            Creating vibrant and integrated spaces that combine
                                            residential, commercial, and leisure elements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts projects area end */}

        </div>
    )
}

export default ProjectSix