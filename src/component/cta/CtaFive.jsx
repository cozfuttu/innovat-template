"use client"
import Link from 'next/link';
function CtaFive() {
    return (
        <div>

            {/* rts cta area stat */}
            <div className="rts-cta-main-wrapper rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-center cta-wrapper-two">
                                <div className="pre-title-area">
                                    <img src="assets/images/about/02.png" alt="about" />
                                    <span className="pre-title">Work With Us</span>
                                </div>
                                <h2 className="title quote">
                                    <span>We are</span> excited to learn <br />
                                    more about <span>your project</span>
                                </h2>
                                <Link href="/contact" className="rts-btn btn-border">
                                    Read More <i className="fa-regular fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts cta area end */}

        </div>
    )
}

export default CtaFive