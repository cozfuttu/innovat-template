"use client"
import Image from 'next/image';
import Link from 'next/link';
function AboutFive() {

    return (
        <div>
            {/* about area start */}
            <div className="rts-about-area-six  rts-section-gap border-top-in-container">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 rts-slide-up">
                            <div className="about-right-inner-five">
                                <div className="bg-image">
                                    <Image width={653} height={408} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/about/09.png" alt="" />
                                </div>
                                <div className="title-area-style-six-left">
                                    <span className="pre">Company story</span>
                                    <h2 className="title">Our Company Story</h2>
                                </div>
                                <p className="disc-1">
                                    Our values form the foundation of our work. Integrity, creativity,
                                    and attention to detail drive everything we do. We approach each
                                    project with dedication, embracing challenges as opportunities for
                                    innovation and excellence.
                                </p>
                                <p className="disc">
                                    With years of experience in the industry, our team brings a
                                    diverse range of expertise to the table. From residential to
                                    commercial, from urban planning to interior design
                                </p>
                                <div className="short-service-small">
                                    {/* single service area */}
                                    <div className="single-service-small-check">
                                        <i className="fa-light fa-plus" />
                                        Architecture Design
                                    </div>
                                    {/* single service area end */}
                                    {/* single service area */}
                                    <div className="single-service-small-check">
                                        <i className="fa-light fa-plus" />
                                        Interior Design
                                    </div>
                                    {/* single service area end */}
                                    {/* single service area */}
                                    <div className="single-service-small-check">
                                        <i className="fa-light fa-plus" />
                                        Commercial Building
                                    </div>
                                    {/* single service area end */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail-about-six" data-aos="move-right" data-aos-delay="100">
                                <Image width={653} height={408} style={{ width: 'max-content', height: 'auto' }}
                                    className="rts-reveal-image-one"
                                    src="/assets/images/about/08.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about area end */}
        </div>
    )
}

export default AboutFive