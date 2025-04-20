"use client";
import { useEffect } from "react";
import AOS from "aos";
function AboutOne() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      once: true,
      offset: 0, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      {/* rts about area start */}
      <div className="rts-about-area-one rts-section-gap" id="about">
        <div className="container pb--50 pb_sm--0">
          <div className="row">
            <div className="col-lg-5">
              <div className="thumbnail-about-one">
                <img
                  data-aos="move-right"
                  className="rts-reveal-image-one"
                  src="/assets/images/about/01.jpg"
                  alt="about"
                />
              </div>
            </div>
            <div className="col-lg-6 mt_md--50 mt_sm--50">
              <div className="about-style-one-right">
                <div className="title-style-left" data-aos="fade-up" data-aos-delay="100">
                  <div className="pre-title-area">
                    <img src="/assets/images/about/02.png" alt="Dekoda Hakkında" />
                    <span className="pre-title">Hakkımızda</span>
                  </div>
                  <h2 className="title mt--0 mb--25 quote">Mekânları Sanata Dönüştürüyoruz</h2>
                </div>
                <p className="disc mb--15" data-aos="fade-up" data-aos-delay="300">
                  Dekoda, iç mimarlık alanında estetik, işlevsellik ve duyguyu bir araya getirerek yaşam alanlarına
                  kimlik kazandırır. Her proje, hayata geçirilen bir hayalin ve kullanıcıya özel bir yaşam biçiminin
                  yansımasıdır.
                </p>
                <p className="disc" data-aos="fade-up" data-aos-delay="500">
                  Modern, sürdürülebilir ve zamansız tasarım anlayışımızla; konutlardan ticari alanlara kadar her
                  mekânda kullanıcı odaklı, özgün çözümler geliştiriyoruz. Dekoda ile yaşam alanınız sadece bir yer
                  değil, bir deneyim olur.
                </p>
                <a href="/hakkimizda" className="rts-btn btn-border" data-aos="fade-up" data-aos-delay="700">
                  Daha Fazla Bilgi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts about area end */}
    </div>
  );
}

export default AboutOne;
