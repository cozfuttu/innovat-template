import React from 'react'
import Image from 'next/image';
function FooterOne() {
    return (
        <div>
            {/* footer area start */}
            <div className="rts-footer-area bg-footer-image bg_image">
                <div className="container">
                    <div className="row   ptb--100 ptb_sm--60">
                        <div className="col-lg-12">
                            <div className="footer-area-wrapper-one">
                                <div className="single-footer-wized">
                                    <a href="#" className="logo">
                                        <Image width={250} height={250} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/logo/02.svg" alt="logo" />
                                    </a>
                                    <p className="disc">
                                        we are passionate about creating exceptional interior spaces
                                        that inspire, delight, and enhance the lives of our clients.
                                    </p>
                                    <form action="#">
                                        <div className="input-email">
                                            <input
                                                type="text"
                                                placeholder="Enter your email address"
                                                required=""
                                            />
                                            <button>
                                                <i className="fa-thin fa-arrow-right" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="single-footer-wized">
                                    <div className="menu-links-area">
                                        <h6 className="title">Company</h6>
                                        <ul>
                                            <li>
                                                <a href="/about">About Us</a>
                                            </li>
                                            <li>
                                                <a href="/team-1">Our team</a>
                                            </li>
                                            <li>
                                                <a href="/service-1">Our Services</a>
                                            </li>
                                            <li>
                                                <a href="/portfolio-grid-1">Work Project</a>
                                            </li>
                                            <li>
                                                <a href="/faq">Help</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-footer-wized">
                                    <div className="menu-links-area">
                                        <h6 className="title">Useful Links</h6>
                                        <ul>
                                            <li>
                                                <a href="/about">Why Choose</a>
                                            </li>
                                            <li>
                                                <a href="/blog-details">Read Blog</a>
                                            </li>
                                            <li>
                                                <a href="/portfolio-grid-col-4">Work Process</a>
                                            </li>
                                            <li>
                                                <a href="/faq">FAQ’s</a>
                                            </li>
                                            <li>
                                                <a href="/contact">Support</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-footer-wized">
                                    <div className="menu-links-area">
                                        <h6 className="title">Contact</h6>
                                        <div className="contact-information-1">
                                            {/* single  contact info */}
                                            <div className="single-contact-info">
                                                <div className="icon">
                                                    <i className="fa-regular fa-phone-volume" />
                                                </div>
                                                <div className="information">
                                                    <a href="Tel:1234567890">+23 5825-32535</a>
                                                    <span className="support">Call us for support</span>
                                                </div>
                                            </div>
                                            {/* single  contact info end */}
                                            {/* single  contact info */}
                                            <div className="single-contact-info">
                                                <div className="icon">
                                                    <i className="fa-regular fa-envelope" />
                                                </div>
                                                <div className="information">
                                                    <a href="mailto:example@example.com">innov@gmail.com</a>
                                                    <span className="support">Email us for query</span>
                                                </div>
                                            </div>
                                            {/* single  contact info end */}
                                            {/* single  contact info */}
                                            <div className="single-contact-info">
                                                <div className="icon">
                                                    <i className="fa-regular fa-map-location-dot" />
                                                </div>
                                                <div className="information">
                                                    <a href="https://www.google.com/maps" target="_blank">
                                                        1058 Helton Ave, Stky
                                                    </a>
                                                    <span className="support">Berlin, Germany</span>
                                                </div>
                                            </div>
                                            {/* single  contact info end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-style-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-area-main-wrapper-one">
                                    <p className="left">Copyright 2024. All Rights Reserved.</p>
                                    <ul>
                                        <li>
                                            <a href="/terms-and-condition">Terms &amp; conditions</a>
                                        </li>
                                        <li>
                                            <a href="privacy-policy">Privacy policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer area end */}
        </div>
    )
}

export default FooterOne