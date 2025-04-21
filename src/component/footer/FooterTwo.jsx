import React from 'react'
import Link from "next/link";
import Image from 'next/image';
function FooterTwo() {
    return (
        <div>
            <>
                {/* rts footer area start */}
                <div className="rts-footer-area bg-light social-jumpanimation" id='get-contact'>
                    <div className="container">
                        <div className="row g-5   ptb--100 ptb_sm--60 ptb_md--80">
                            <div className="col-lg-4">
                                {/* footer-two wrapper */}
                                <div className="footer-two-main-wrapper">
                                    <Link href="/" className="logo">
                                        <Image width={151} height={25} src="assets/images/logo/01.svg" alt="Cano Digital Logo" />
                                    </Link>
                                    {/* social style two */}
                                    <ul className="social-style-two-wrapper social-anim">
                                        <li>
                                            <Link className="counter__anim" href="https://facebook.com/canodigital" target="_blank">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="counter__anim" href="https://twitter.com/canodigital" target="_blank">
                                                <i className="fa-brands fa-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="counter__anim" href="https://linkedin.com/company/canodigital" target="_blank">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </Link>
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
                                                    Maslak, Büyükdere Cad. No:255<br />
                                                    Sarıyer/İstanbul
                                                </p>
                                            </div>
                                            <div className="contact-call">
                                                <Link href="tel:+902121234567">+90 (212) 123 45 67</Link>
                                                <span>Destek için bizi arayın</span>
                                            </div>
                                            <div className="contact-call">
                                                <Link href="mailto:info@canodigital.com">info@canodigital.com</Link>
                                                <span>E-posta ile iletişime geçin</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single footer two wozed */}
                                    {/* single footer two wozed */}
                                    <div className="single-footer-wized">
                                        <div className="location-information">
                                            <div className="location">
                                                <h6 className="title">Hızlı Bağlantılar</h6>
                                            </div>
                                            <ul>
                                                <li>
                                                    <Link href="/hakkimizda">Hakkımızda</Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog">Blog</Link>
                                                </li>
                                                <li>
                                                    <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sss">SSS</Link>
                                                </li>
                                                <li>
                                                    <Link href="/iletisim">İletişim</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* single footer two wozed */}
                                    {/* single footer two wozed */}
                                    <div className="single-footer-wized">
                                        <div className="location-information">
                                            <div className="location">
                                                <h6 className="title">Bülten</h6>
                                                <p className="disc-f">
                                                    Yeniliklerden haberdar olmak için bültenimize abone olun.
                                                </p>
                                            </div>
                                            <form action="#">
                                                <div className="input-email">
                                                    <input type="text" placeholder="E-posta adresinizi girin" />
                                                    <button>
                                                        <i className="fa-thin fa-arrow-right" />
                                                    </button>
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
                                        <p className="disc">© 2024 Cano Digital. Tüm hakları saklıdır.</p>
                                        <div className="right">
                                            <ul>
                                                <li>
                                                    <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>
                                                </li>
                                                <li>
                                                    <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>
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
            </>

        </div>
    )
}

export default FooterTwo