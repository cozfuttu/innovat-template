"use client"
import Accordion from 'react-bootstrap/Accordion';
function FaqOne() {
    return (
        <div>

            {/* rs faq-area start */}
            <div className="rts-faq-area bg-faqs-7 bg_image rts_portfolio_animation-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="faq-style-two rts-portfolio__item">
                                <div className="left-accordion-faq">
                                    <div className="title-faq-area-2">
                                        <div className="title-area-style-six-left">
                                            <span className="pre">Feature Services</span>
                                            <h2 className="title">Why People Choice Us?</h2>
                                        </div>
                                    </div>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                How much does a home remodeling cost?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Projects vary widely depending on your needs and budget.
                                                Our visit with you to better understand your home
                                                remodeling needs.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                How much does a home Building cost?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Projects vary widely depending on your needs and budget.
                                                Our visit with you to better understand your home
                                                remodeling needs.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                Why do roofing estimates vary so widely?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Projects vary widely depending on your needs and budget.
                                                Our visit with you to better understand your home
                                                remodeling needs.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <div className="right-image" data-aos="move-right" data-aos-delay="100">
                                    <img src="assets/images/faq/02.jpg" alt="faq" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rs faq-area end */}


        </div>
    )
}

export default FaqOne