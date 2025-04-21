"use client";
import { useEffect } from "react";
import Breadcrumb from "@/component/banner/Breadcrumb";
import AOS from "aos";
import ContactTwo from "@/component/contact/ContactTwo";
import TeamOne from "@/component/team/TeamOne";
import ProcessOne from "@/component/workingprocess/ProcessOne";
import TestimonialsOne from "@/component/testimonials/TestimonialsOne";

const counterData = [
  { value: "362", unit: "k", label: "Mutlu Müşteri" },
  { value: "106", unit: "+", label: "Tamamlanan Proje" },
  { value: "120", unit: "+", label: "Uzman Ekip" },
  { value: "101", unit: "k", label: "Yıllık Deneyim" },
];

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      offset: 0,
    });
  }, []);
  return (
    <div className="">
      <Breadcrumb title="Hakkımızda" activeLink="Hakkımızda" />

      {/* about  page top histoory information  */}
      <div className="about-top-history-information rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="title-style-left">
                <div className="pre-title-area">
                  <img src="assets/images/about/02.png" alt="about" />
                  <span className="pre-title">Projelerimiz</span>
                </div>
                <h2 className="title">Hikayemiz</h2>
              </div>
              <div className="about-left-history pl--50 pt--30">
                <img src="assets/images/about/12.png" alt="about" />
              </div>
              <div className="history-image-left mt--55">
                <img data-aos="move-left" src="assets/images/about/13.jpg" alt="about" />
              </div>
            </div>
            <div className="col-lg-8 col-md-8 mt_sm--50">
              <div className="history-right-area-inner">
                <p className="disc rts-slide-up">
                  Hikayemiz tutku, yaratıcılık ve mükemmellik taahhüdüne dayanıyor. Dijital dönüşüm ve teknoloji
                  alanında uzmanlaşmış küçük bir ekip olarak başladık ve işletmeleri ilham verici dijital ortamlara
                  dönüştürme vizyonuyla yola çıktık.
                </p>
                <p className="disc rts-slide-up">
                  Yolculuğumuz, kurucumuzun kişiselleştirilmiş, yenilikçi ve yüksek kaliteli dijital dönüşüm
                  hizmetlerine olan ihtiyacı fark etmesiyle başladı. Teknoloji alanındaki deneyimi ve işletmeleri
                  dijitalleştirme tutkusuyla, müşteri beklentilerini aşan olağanüstü sonuçlar sunan bir şirket kurmayı
                  hedefledik.
                </p>
                <p className="disc rts-slide-up">
                  Mütevazı başlangıçlardan itibaren, uzmanlığımız, detaylara verdiğimiz önem ve müşteri odaklı
                  yaklaşımımızla sürekli büyüdük. Her biri kendi alanında benzersiz ihtiyaçlara ve vizyonlara sahip
                  çeşitli müşterilerle çalışma ayrıcalığına sahip olduk. Bu vizyonları hayata geçirme, yaratıcılık,
                  işlevsellik ve uzmanlığı her projemize yansıtma yeteneğimizle gurur duyuyoruz.
                </p>
                <div className="history-right-img mt--80">
                  <img data-aos="move-left" className="" src="assets/images/about/14.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about  page top histoory information end */}

      {/* rts counter up area start */}
      <div className="rts-counterup-area-start rts_jump_counter__animation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="counter-main-wrapper-two counter_animation pt--0">
                {/* ingle counter up */}
                <div className="counter-single counter__anim">
                  <div className="inner">
                    <h2 className="title">
                      <span className="counter">100</span>+
                    </h2>
                    <p>Mutlu Müşteri</p>
                  </div>
                </div>
                {/* ingle counter up end */}
                {/* ingle counter up */}
                <div className="counter-single counter__anim">
                  <div className="inner">
                    <h2 className="title">
                      <span className="counter">37</span>+
                    </h2>
                    <p>Tamamlanan Proje</p>
                  </div>
                </div>
                {/* ingle counter up end */}
                {/* ingle counter up */}
                <div className="counter-single counter__anim">
                  <div className="inner">
                    <h2 className="title">
                      <span className="counter">120</span>+
                    </h2>
                    <p>Uzman Ekip</p>
                  </div>
                </div>
                {/* ingle counter up end */}
                {/* ingle counter up */}
                <div className="counter-single counter__anim">
                  <div className="inner">
                    <h2 className="title">
                      <span className="counter">5</span>+
                    </h2>
                    <p>Yıllık Deneyim</p>
                  </div>
                </div>
                {/* ingle counter up end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts counter up area end */}

      <TeamOne />
      <ProcessOne />
      <TestimonialsOne />
      <ContactTwo />
    </div>
  );
}
