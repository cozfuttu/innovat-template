"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Menü linkleri
const companyLinks = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "#", label: "Ekibimiz" },
  { href: "/hizmetlerimiz", label: "Hizmetler" },
  { href: "/portfolyo", label: "Projeler" },
  { href: "#", label: "Sık Sorulanlar" },
];

const quickLinks = [
  { href: "/hakkimizda", label: "Neden Dekoda?" },
  { href: "/blog", label: "İlham Köşesi" },
  { href: "#", label: "Tasarım Süreci" },
  { href: "#", label: "Sorular & Yanıtlar" },
  { href: "/iletisim", label: "Bize Ulaşın" },
];

// İletişim bilgileri
const contactInfo = [
  {
    icon: "fa-regular fa-phone-volume",
    href: "tel:+902121234567",
    label: "+90 (212) 123 45 67",
    sub: "Bizi arayın",
  },
  {
    icon: "fa-regular fa-envelope",
    href: "mailto:info@dekoda.com",
    label: "info@dekoda.com",
    sub: "E-posta gönderin",
  },
  {
    icon: "fa-regular fa-map-location-dot",
    href: "https://www.google.com/maps",
    label: "Maslak, İç Mimarlık Cad. No:10",
    sub: "Sarıyer / İstanbul",
  },
];

function FooterOne() {
  return (
    <div>
      {/* footer area start */}
      <div className="rts-footer-area bg-footer-image bg_image">
        <div className="container">
          <div className="row ptb--100 ptb_sm--60">
            <div className="col-lg-12">
              <div className="footer-area-wrapper-one">
                {/* Logo ve açıklama */}
                <div className="single-footer-wized">
                  <Link href="/" className="logo">
                    <Image
                      width={250}
                      height={250}
                      style={{ width: "max-content", height: "auto" }}
                      src="/assets/images/logo/02.svg"
                      alt="Dekoda Logo"
                    />
                  </Link>
                  <p className="disc">
                    Dekoda olarak yaşam alanlarınızı estetik ve işlevsellikle buluşturuyoruz. Her detay, sizin için
                    tasarlandı.
                  </p>
                  <form action="#">
                    <div className="input-email">
                      <input type="text" placeholder="E-posta adresinizi girin" required />
                      <button>
                        <i className="fa-thin fa-arrow-right" />
                      </button>
                    </div>
                  </form>
                </div>

                {/* Şirket Menüsü */}
                <div className="single-footer-wized">
                  <div className="menu-links-area">
                    <h6 className="title">Dekoda</h6>
                    <ul>
                      {companyLinks.map(({ href, label }) => (
                        <li key={href}>
                          <Link href={href}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hızlı Bağlantılar */}
                <div className="single-footer-wized">
                  <div className="menu-links-area">
                    <h6 className="title">Bağlantılar</h6>
                    <ul>
                      {quickLinks.map(({ href, label }) => (
                        <li key={href}>
                          <Link href={href}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* İletişim Bilgileri */}
                <div className="single-footer-wized">
                  <div className="menu-links-area">
                    <h6 className="title">İletişim</h6>
                    <div className="contact-information-1">
                      {contactInfo.map(({ icon, href, label, sub }, index) => (
                        <div className="single-contact-info" key={index}>
                          <div className="icon">
                            <i className={icon} />
                          </div>
                          <div className="information">
                            <a href={href} target={href.startsWith("http") ? "_blank" : "_self"}>
                              {label}
                            </a>
                            <span className="support">{sub}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="copyright-style-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-area-main-wrapper-one">
                  <p className="left">© 2024 Dekoda. Tüm hakları saklıdır.</p>
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
  );
}

export default FooterOne;
