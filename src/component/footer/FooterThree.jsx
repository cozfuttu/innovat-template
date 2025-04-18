import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
function FooterThree() {
    return (
        <div>

            {/* footer style three start */}
            <div className="rts-footer-area-start ptb--100 bg-3 border-topbottom-h3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-area-three-main-wrapper social-jumpanimation">
                                <div className="footer-two-main-wrapper three">
                                    <div className="single-wized left">
                                        <Link href="#" className="logo">
                                            <Image width={151} height={25} src="/assets/images/logo/02.svg" alt="logo" />
                                        </Link>
                                        {/* social style two */}
                                        <ul className="social-style-two-wrapper social-anim">
                                            <li>
                                                <Link className="counter__anim" href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="counter__anim" href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="counter__anim" href="#">
                                                    <i className="fa-brands fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="counter__anim" href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                        {/* social style two end */}
                                    </div>
                                    <div className="single-wized left-center">
                                        <h6 className="title">Our Address</h6>
                                        <div className="address">
                                            <Link href="#">
                                                1058 Helton Ave, Stky <br />
                                                Berlin, Germany
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-wized right-center">
                                        <h6 className="title">Contact</h6>
                                        <div className="contact-call">
                                            <Link href="#">+23 5825-32535</Link>
                                            <Link href="#">inno@gmail.com</Link>
                                        </div>
                                    </div>
                                    <div className="single-wized right">
                                        <h6 className="title">News Letter</h6>
                                        <form action="#">
                                            <input
                                                type="email"
                                                placeholder="Enter your email address"
                                                required=""
                                            />
                                            <button>
                                                <i className="fa-regular fa-paper-plane" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer style three end */}
            {/* rts copyright area start */}
            <div className="rts-copyrighta-area border-topbottom-h3 ptb--30 bg-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-3">
                                <p>Copyright 2024. All Rights Reserved.</p>
                                <ul>
                                    <li>
                                        <Link href="#">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Contact</Link>
                                    </li>
                                    <li>
                                        <Link href="#">FaQ's</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts copyright area end */}

        </div>
    )
}

export default FooterThree