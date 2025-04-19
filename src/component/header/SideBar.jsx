"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function SideBar({ isSidebarOpen, toggleSidebar }) {
  const menuItems = [
    { title: "Ana Sayfa", href: "/" },
    { title: "Hakkımızda", href: "/hakkimizda" },
    { title: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { title: "Projelerimiz", href: "/projeler" },
    { title: "Blog", href: "/blog" },
    { title: "İletişim", href: "/iletisim" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#", label: "Facebook" },
    { icon: "fab fa-twitter", href: "#", label: "Twitter" },
    { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" },
  ];

  return (
    <div className={`side-bar ${isSidebarOpen ? "show" : ""}`}>
      <button className="close-icon-menu" aria-label="Menüyü Kapat" onClick={toggleSidebar}>
        <i className="far fa-times"></i>
      </button>

      <div className="inner-main-wrapper-desk">
        <div className="thumbnail">
          <Image
            width={150}
            height={100}
            src="/assets/images/logo/01.svg"
            alt="Cano Digital Logo"
            className="img-fluid"
          />
        </div>

        <div className="inner-content">
          <p className="disc">
            Cano Digital, dijital dönüşüm yolculuğunuzda güvenilir bir partner olarak, işletmenizi geleceğe taşıyor.
          </p>

          <div className="contact-information--sidebar">
            <h6 className="title">İletişim Bilgileri</h6>
            <div className="single-info">
              <a href="tel:+902121234567">+90 (212) 123 45 67</a>
            </div>
            <div className="single-info">
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                Maslak, Büyükdere Cad. No:255
                <br />
                Sarıyer/İstanbul
              </a>
            </div>
            <div className="single-info">
              <a href="mailto:info@canodigital.com">info@canodigital.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-main">
        <nav className="nav-main mainmenu-nav mt--30">
          <ul className="mainmenu list-unstyled">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} onClick={toggleSidebar} className="d-block py-2 text-decoration-none">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="social-links mt-4">
          <ul className="list-unstyled d-flex gap-3">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={`${social.label} sayfamızı ziyaret edin`}
                >
                  <i className={social.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
