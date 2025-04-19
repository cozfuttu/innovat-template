import Head from "next/head";
import "../../public/assets/css/plugins/fontawesome-6.css";
import "../../public/assets/css/plugins/swiper.min.css";
import "../../public/assets/css/vendor/magnific-popup.css";
import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/vendor/metismenu.css";
import "../../public/assets/css/style.css";
import "react-modal-video/css/modal-video.min.css";
import "aos/dist/aos.css";
import Script from "next/script";
import BackToTop from "@/component/backtotop/BackToTop";
import FooterOne from "@/component/footer/FooterOne";
import HeaderOne from "@/component/header/HeaderOne";

export const metadata = {
  title: "Cano Digital - Dijital Dönüşüm ve Teknoloji Çözümleri",
  description: "Dijital dönüşüm, yazılım çözümleri ve teknoloji danışmanlığı hizmetleri sunan Cano Digital, işletmenizi geleceğe taşıyor.",
  keywords: "dijital dönüşüm, yazılım çözümleri, teknoloji danışmanlığı, fintech, iş kültürü, inovasyon",
  authors: [{ name: "Cano Digital" }],
  icons: {
    icon: "/assets/images/fav.png",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://canodigital.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cano Digital - Dijital Dönüşüm ve Teknoloji Çözümleri" />
        <meta property="og:description" content="Dijital dönüşüm, yazılım çözümleri ve teknoloji danışmanlığı hizmetleri sunan Cano Digital, işletmenizi geleceğe taşıyor." />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <meta property="og:url" content="https://canodigital.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className="index-one">
        <HeaderOne />
        <main>{children}</main>
        <FooterOne />
        <BackToTop />

        <Script src="/assets/js/plugins/smoothscroll.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
