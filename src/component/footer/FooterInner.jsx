import React from 'react'

function FooterInner() {
    return (
        <div>

            {/* rts footer area start */}
            <div className="rts-footer-area social-jumpanimation border-top-in-container">
                <div className="container pt--100 pb--100 pt_sm--50 pt_md--50 pb_sm--50 pb_md--50">
                    <div className="row">
                        <div className="col-lg-4">
                            {/* footer-two wrapper */}
                            <div className="footer-two-main-wrapper">
                                <a href="#" className="logo">
                                    <img src="/assets/images/logo/01.svg" alt="logo" />
                                </a>
                                {/* social style two */}
                                <ul className="social-style-two-wrapper social-anim">
                                    <li>
                                        <a className="counter__anim" href="#">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="counter__anim" href="#">
                                            <i className="fa-brands fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="counter__anim" href="#">
                                            <i className="fa-brands fa-youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="counter__anim" href="#">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                                {/* social style two end */}
                            </div>
                            {/* footer-two wrapper end */}
                        </div>
                        <div className="col-lg-8">
                            <div className="footer-two-main-wrapper-right">
                                {/* single footer two wozed */}
                                <div className="single-footer-wized">
                                    <div className="location-information">
                                        <div className="location">
                                            <p>
                                                1058 Helton Ave, Stky <br />
                                                Berlin, Germany
                                            </p>
                                        </div>
                                        <div className="contact-call">
                                            <a href="#">+23 5825-32535</a>
                                            <span>Call us for support</span>
                                        </div>
                                        <div className="contact-call">
                                            <a href="#">inno@gmail.com</a>
                                            <span>Email us for query</span>
                                        </div>
                                    </div>
                                </div>
                                {/* single footer two wozed */}
                                {/* single footer two wozed */}
                                <div className="single-footer-wized">
                                    <div className="location-information">
                                        <div className="location">
                                            <h6 className="title">Useful Links</h6>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">Why Choose</a>
                                            </li>
                                            <li>
                                                <a href="#">Read Blog</a>
                                            </li>
                                            <li>
                                                <a href="#">Work Process</a>
                                            </li>
                                            <li>
                                                <a href="#">FAQ’s</a>
                                            </li>
                                            <li>
                                                <a href="#">Support</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* single footer two wozed */}
                                {/* single footer two wozed */}
                                <div className="single-footer-wized">
                                    <div className="location-information">
                                        <div className="location">
                                            <h6 className="title">News Letter</h6>
                                            <p className="disc-f">
                                                Subscribe to our newsletter &amp; get all the latest news.
                                            </p>
                                        </div>
                                        <form action="#">
                                            <div className="input-email">
                                                <input type="text" placeholder="Enter your email address" />
                                                <i className="fa-thin fa-arrow-right" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* single footer two wozed */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-copyright-area-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copy-right-area-inner-two">
                                    <p className="disc">Copyright 2024. All Rights Reserved.</p>
                                    <div className="right">
                                        <ul>
                                            <li>
                                                <a href="#">Terms &amp; conditions</a>
                                            </li>
                                            <li>
                                                <a href="#">Privacy policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts footer area end */}


        </div>
    )
}

export default FooterInner