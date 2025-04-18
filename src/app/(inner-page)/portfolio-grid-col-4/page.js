"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import FooterInner from '@/component/footer/FooterInner';
export default function Home() {



    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Grid Portfolio" activeLink="Grid Portfolio" />




            {/* portfolio column 4 area start */}
            <div className="rts-portfolio-area-col-4 rts-section-gap rts_portfolio_animation-wrapper">
                <div className="container-30">
                    <div className="row g-5">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="portfolio-style-custom-4 rts-portfolio__item">
                                <a href="product-details-1" className="thumbnail">
                                    <img src="assets/images/product/25.jpg" alt="prodcut" />
                                </a>
                                <div className="inner-content">
                                    <a href="product-details-1">
                                        <h4 className="title">living room interior </h4>
                                    </a>
                                    <span>Interior Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="portfolio-style-custom-4 rts-portfolio__item">
                                <a href="product-details-1" className="thumbnail">
                                    <img src="assets/images/product/26.jpg" alt="prodcut" />
                                </a>
                                <div className="inner-content">
                                    <a href="product-details-1">
                                        <h4 className="title">living room interior </h4>
                                    </a>
                                    <span>Interior Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="portfolio-style-custom-4 rts-portfolio__item">
                                <a href="product-details-1" className="thumbnail">
                                    <img src="assets/images/product/27.jpg" alt="prodcut" />
                                </a>
                                <div className="inner-content">
                                    <a href="product-details-1">
                                        <h4 className="title">living room interior </h4>
                                    </a>
                                    <span>Interior Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="portfolio-style-custom-4 rts-portfolio__item">
                                <a href="product-details-1" className="thumbnail">
                                    <img src="assets/images/product/28.jpg" alt="prodcut" />
                                </a>
                                <div className="inner-content">
                                    <a href="product-details-1">
                                        <h4 className="title">living room interior </h4>
                                    </a>
                                    <span>Interior Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="portfolio-style-custom-4 rts-portfolio__item">
                                <a href="product-details-1" className="thumbnail">
                                    <img src="assets/images/product/29.jpg" alt="prodcut" />
                                </a>
                                <div className="inner-content">
                                    <a href="product-details-1">
                                        <h4 className="title">living room interior </h4>
                                    </a>
                                    <span>Interior Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="portfolio-style-custom-4 rts-portfolio__item">
                                <a href="product-details-1" className="thumbnail">
                                    <img src="assets/images/product/30.jpg" alt="prodcut" />
                                </a>
                                <div className="inner-content">
                                    <a href="product-details-1">
                                        <h4 className="title">living room interior </h4>
                                    </a>
                                    <span>Interior Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="portfolio-style-custom-4 rts-portfolio__item">
                                <a href="product-details-1" className="thumbnail">
                                    <img src="assets/images/product/31.jpg" alt="prodcut" />
                                </a>
                                <div className="inner-content">
                                    <a href="product-details-1">
                                        <h4 className="title">living room interior </h4>
                                    </a>
                                    <span>Interior Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="portfolio-style-custom-4 rts-portfolio__item">
                                <a href="product-details-1" className="thumbnail">
                                    <img src="assets/images/product/32.jpg" alt="prodcut" />
                                </a>
                                <div className="inner-content">
                                    <a href="product-details-1">
                                        <h4 className="title">living room interior </h4>
                                    </a>
                                    <span>Interior Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <FooterInner />
            <BackToTop />
        </div >
    );
}
