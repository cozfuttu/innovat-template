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
  title: "Dekoda | Modern İç Mimarlık & Yaşam Alanı Tasarımı",
  description:
    "Dekoda, modern ve özgün iç mimarlık çözümleri sunarak yaşam ve çalışma alanlarınızı estetik, fonksiyonellik ve huzurla buluşturur. Hayalinizdeki mekân için ilham alın.",
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
        <link rel="canonical" href="https://dekodadesign.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dekoda | Modern İç Mimarlık & Yaşam Alanı Tasarımı" />
        <meta
          property="og:description"
          content="Dekoda, modern ve özgün iç mimarlık çözümleri sunarak yaşam ve çalışma alanlarınızı estetik, fonksiyonellik ve huzurla buluşturur. Hayalinizdeki mekân için ilham alın."
        />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <meta property="og:url" content="https://dekodadesign.com" />
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
