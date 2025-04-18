import Link from 'next/link';

function CtaTwo() {
    return (
        <div>
            <div className="rts-cta-main-wrapper rts-section-gapBottom bg-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-center cta-wrapper-two">
                                <div className="pre-title-area">
                                    <span className="pre-title">Have you project in mind?</span>
                                </div>
                                <h2 className="title quote">
                                    <span>We are</span> excited to learn <br />
                                    more about <span>your project</span>
                                </h2>
                                <Link href="/contact" className="rts-btn btn-border">
                                    Get A Quote <i className="fa-regular fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CtaTwo