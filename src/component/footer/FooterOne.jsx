import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function FooterOne() {
    return (
        <div>
            {/* footer area start */}
            <div className="rts-footer-area bg-footer-image bg_image">
                <div className="container">
                    <div className="row ptb--100 ptb_sm--60">
                        <div className="col-lg-12">
                            <div className="footer-area-wrapper-one">
                                <div className="single-footer-wized">
                                    <Link href="/" className="logo">
                                        <Image width={250} height={250} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/logo/02.svg" alt="Cano Digital Logo" />
                                    </Link>
                                    <p className="disc">
                                        Dijital dönüşüm yolculuğunuzda güvenilir bir partner olarak, 
                                        işletmenizi geleceğe taşıyoruz.
                                    </p>
                                    <form action="#">
                                        <div className="input-email">
                                            <input
                                                type="text"
                                                placeholder="E-posta adresinizi giriniz"
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
                                        <h6 className="title">Şirket</h6>
                                        <ul>
                                            <li>
                                                <Link href="/hakkimizda">Hakkımızda</Link>
                                            </li>
                                            <li>
                                                <Link href="/ekip">Ekibimiz</Link>
                                            </li>
                                            <li>
                                                <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
                                            </li>
                                            <li>
                                                <Link href="/projeler">Projelerimiz</Link>
                                            </li>
                                            <li>
                                                <Link href="/sss">SSS</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-footer-wized">
                                    <div className="menu-links-area">
                                        <h6 className="title">Hızlı Bağlantılar</h6>
                                        <ul>
                                            <li>
                                                <Link href="/hakkimizda">Neden Biz?</Link>
                                            </li>
                                            <li>
                                                <Link href="/blog">Blog</Link>
                                            </li>
                                            <li>
                                                <Link href="/projeler">Çalışma Süreci</Link>
                                            </li>
                                            <li>
                                                <Link href="/sss">Sık Sorulan Sorular</Link>
                                            </li>
                                            <li>
                                                <Link href="/iletisim">Destek</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-footer-wized">
                                    <div className="menu-links-area">
                                        <h6 className="title">İletişim</h6>
                                        <div className="contact-information-1">
                                            <div className="single-contact-info">
                                                <div className="icon">
                                                    <i className="fa-regular fa-phone-volume" />
                                                </div>
                                                <div className="information">
                                                    <a href="Tel:+902121234567">+90 (212) 123 45 67</a>
                                                    <span className="support">Bize ulaşın</span>
                                                </div>
                                            </div>
                                            <div className="single-contact-info">
                                                <div className="icon">
                                                    <i className="fa-regular fa-envelope" />
                                                </div>
                                                <div className="information">
                                                    <a href="mailto:info@canodigital.com">info@canodigital.com</a>
                                                    <span className="support">E-posta gönderin</span>
                                                </div>
                                            </div>
                                            <div className="single-contact-info">
                                                <div className="icon">
                                                    <i className="fa-regular fa-map-location-dot" />
                                                </div>
                                                <div className="information">
                                                    <a href="https://www.google.com/maps" target="_blank">
                                                        Maslak, Büyükdere Cad. No:255
                                                    </a>
                                                    <span className="support">Sarıyer/İstanbul</span>
                                                </div>
                                            </div>
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
                                    <p className="left">© 2024 Cano Digital. Tüm hakları saklıdır.</p>
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
            {/* footer area end */}
        </div>
    )
}

export default FooterOne