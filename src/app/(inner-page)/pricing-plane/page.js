"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import FooterInner from '@/component/footer/FooterInner';

export default function Home() {



    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Pricing Plan" activeLink="Pricing Plan" />

            {/* rts pricing area start */}
            <div className="rts-pricing-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-center">
                                <div className="pre-title-area">
                                    <img src="assets/images/about/02.png" alt="about" />
                                    <span className="pre-title">Our Pricing</span>
                                </div>
                                <h2 className="title mt--10">Pricing Plan</h2>
                                <p className="disc">
                                    Choose your Best pricing plan for interior and architecture design
                                    services <br />
                                    the project involves construction or renovation..
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--30">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* single pricing area */}
                            <div className="single-pricing-main">
                                <div className="head">
                                    <span>basic Plane</span>
                                    <h2 className="price">$219.00</h2>
                                </div>
                                <div className="body">
                                    <p className="disc">
                                        The initial consultation is a meeting between the designer and
                                        the client to discuss the project.
                                    </p>
                                    <div className="available">
                                        <i className="fa-light fa-check" />
                                        Concept Development
                                    </div>
                                    <div className="available not">
                                        <i className="fa-light fa-x" />
                                        Design Development
                                    </div>
                                    <div className="available">
                                        <i className="fa-light fa-check" />
                                        Construction Administration
                                    </div>
                                    <div className="available not">
                                        <i className="fa-light fa-x" />
                                        Additional Services
                                    </div>
                                    <a href="#" className="rts-btn btn-border">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                            {/* single pricing area end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* single pricing area */}
                            <div className="single-pricing-main">
                                <div className="head">
                                    <span>Popular Plan </span>
                                    <h2 className="price">$319.00</h2>
                                </div>
                                <div className="body">
                                    <p className="disc">
                                        The initial consultation is a meeting between the designer and
                                        the client to discuss the project.
                                    </p>
                                    <div className="available">
                                        <i className="fa-light fa-check" />
                                        Concept Development
                                    </div>
                                    <div className="available">
                                        <i className="fa-light fa-x" />
                                        Design Development
                                    </div>
                                    <div className="available">
                                        <i className="fa-light fa-check" />
                                        Construction Administration
                                    </div>
                                    <div className="available not">
                                        <i className="fa-light fa-x" />
                                        Additional Services
                                    </div>
                                    <a href="#" className="rts-btn btn-border">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                            {/* single pricing area end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* single pricing area */}
                            <div className="single-pricing-main">
                                <div className="head">
                                    <span>Premium Plan</span>
                                    <h2 className="price">$419.00</h2>
                                </div>
                                <div className="body">
                                    <p className="disc">
                                        The initial consultation is a meeting between the designer and
                                        the client to discuss the project.
                                    </p>
                                    <div className="available">
                                        <i className="fa-light fa-check" />
                                        Concept Development
                                    </div>
                                    <div className="available">
                                        <i className="fa-light fa-x" />
                                        Design Development
                                    </div>
                                    <div className="available">
                                        <i className="fa-light fa-check" />
                                        Construction Administration
                                    </div>
                                    <div className="available ">
                                        <i className="fa-light fa-x" />
                                        Additional Services
                                    </div>
                                    <a href="#" className="rts-btn btn-border">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                            {/* single pricing area end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* rts pricing area end */}

            <div className="cta-inner-area bg_image ptb--120">
                <div className="container-full">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-center">
                                <div className="pre-title-area">
                                    <img src="assets/images/about/02.png" alt="about" />
                                    <span className="pre-title">Work with us</span>
                                </div>
                                <h2 className="title">
                                    Have a Project in mind? <br />
                                    Do not hesitate to say hello.
                                </h2>
                                <a href="#" className="rts-btn  btn-border radious-3 mt--50">
                                    Let’s Build
                                    <i className="fa-regular fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterInner />
            <BackToTop />
        </div>
    );
}
