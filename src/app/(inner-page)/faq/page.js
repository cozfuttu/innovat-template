"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import FooterInner from '@/component/footer/FooterInner';
import Accordion from 'react-bootstrap/Accordion';
export default function Home() {



    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Asked Questions" activeLink="Faq's" />

            <div className="faqs-page-wrapper-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 rts-slide-up">
                            <div className="service-left-sidebar-wized">
                                <div className="topa-rea">
                                    <span className="pre">Quick Contact</span>
                                    <h4 className="title">Let's start new project.</h4>
                                </div>
                                <div className="body">
                                    {/* form area start */}
                                    <form action="#">
                                        <input type="text" placeholder="Your Name" required="" />
                                        <input type="number" placeholder="Your Number" />
                                        <textarea placeholder="Message" defaultValue={""} />
                                        <button className="rts-btn btn-primary">Start Project</button>
                                    </form>
                                    {/* form area end */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 pl--50 pl_sm--10 pt_sm--50">
                            <div className="faq-style-two">
                                <div className="left-accordion-faq rts-slide-up">
                                    <div className="title-faq-area-2">
                                        <div className="title-area-style-six-left">
                                            <span className="pre">Feature Services</span>
                                            <h2 className="title">Why People Choice Us?</h2>
                                        </div>
                                    </div>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>How much does a home remodeling cost?</Accordion.Header>
                                            <Accordion.Body>
                                                Projects vary widely depending on your needs and budget. Our
                                                visit with you to better understand your home remodeling
                                                needs.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>How much does a home remodeling cost most?</Accordion.Header>
                                            <Accordion.Body>
                                                Projects vary widely depending on your needs and budget. Our
                                                visit with you to better understand your home remodeling
                                                needs.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>How much does a home remodeling cost?</Accordion.Header>
                                            <Accordion.Body>
                                                Projects vary widely depending on your needs and budget. Our
                                                visit with you to better understand your home remodeling
                                                needs.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <div className="left-accordion-faq rts-slide-up">
                                    <div className="title-faq-area-2">
                                        <div className="title-area-style-six-left">
                                            <span className="pre">Feature Services</span>
                                            <h2 className="title">Business Consultation</h2>
                                        </div>
                                    </div>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>How much does a home remodeling cost pice?</Accordion.Header>
                                            <Accordion.Body>
                                                Projects vary widely depending on your needs and budget. Our
                                                visit with you to better understand your home remodeling
                                                needs.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>How much does a home remodeling cost?</Accordion.Header>
                                            <Accordion.Body>
                                                Projects vary widely depending on your needs and budget. Our
                                                visit with you to better understand your home remodeling
                                                needs.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>How much does a home remodeling cost more?</Accordion.Header>
                                            <Accordion.Body>
                                                Projects vary widely depending on your needs and budget. Our
                                                visit with you to better understand your home remodeling
                                                needs.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


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
        </div >
    );
}
