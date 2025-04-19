"use client";
import Breadcrumb from "@/component/banner/Breadcrumb";
import Accordion from "react-bootstrap/Accordion";

export default function Home() {
  return (
    <div className="">
      <Breadcrumb title="Sıkça Sorulan Sorular" />

      <div className="faqs-page-wrapper-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 rts-slide-up">
              <div className="service-left-sidebar-wized">
                <div className="topa-rea">
                  <span className="pre">Hızlı İletişim</span>
                  <h4 className="title">Yeni bir projeye başlayalım.</h4>
                </div>
                <div className="body">
                  {/* form area start */}
                  <form action="#">
                    <input type="text" placeholder="Adınız" required="" />
                    <input type="number" placeholder="Telefon Numaranız" />
                    <textarea placeholder="Mesajınız" defaultValue={""} />
                    <button className="rts-btn btn-primary">Projeyi Başlat</button>
                  </form>
                  {/* form area end */}
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 pl--50 pl_sm--10 pt_sm--50">
              <div className="faq-style-two">
                <div className="left-accordion-faq rts-slide-up">
                  <div className="title-faq-area-2">
                    <div className="title-area-style-six-left">
                      <span className="pre">Öne Çıkan Hizmetler</span>
                      <h2 className="title">Neden Bizi Tercih Ediyorlar?</h2>
                    </div>
                  </div>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Dijital dönüşüm süreci ne kadar sürer?</Accordion.Header>
                      <Accordion.Body>
                        Projeler, ihtiyaçlarınıza ve bütçenize göre değişiklik gösterir. Dijital dönüşüm ihtiyaçlarınızı
                        daha iyi anlamak için sizinle görüşüyoruz.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Dijital dönüşüm maliyeti nedir?</Accordion.Header>
                      <Accordion.Body>
                        Projeler, ihtiyaçlarınıza ve bütçenize göre değişiklik gösterir. Size özel bir çözüm sunmak için
                        detaylı analiz yapıyoruz.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Hangi teknolojileri kullanıyorsunuz?</Accordion.Header>
                      <Accordion.Body>
                        En güncel teknolojileri ve çözümleri kullanıyoruz. Projenizin ihtiyaçlarına göre en uygun
                        teknoloji stack'ini belirliyoruz.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="left-accordion-faq rts-slide-up">
                  <div className="title-faq-area-2">
                    <div className="title-area-style-six-left">
                      <span className="pre">İş Danışmanlığı</span>
                      <h2 className="title">İş Danışmanlığı</h2>
                    </div>
                  </div>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>İş danışmanlığı hizmetleriniz neleri kapsıyor?</Accordion.Header>
                      <Accordion.Body>
                        Stratejik planlama, süreç iyileştirme, verimlilik artırma ve dijital dönüşüm konularında
                        kapsamlı danışmanlık hizmetleri sunuyoruz.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Danışmanlık süreci nasıl işliyor?</Accordion.Header>
                      <Accordion.Body>
                        Önce işletmenizi detaylı analiz ediyor, ardından size özel çözümler geliştiriyoruz. Süreç
                        boyunca size rehberlik ediyoruz.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Danışmanlık hizmetlerinizin maliyeti nedir?</Accordion.Header>
                      <Accordion.Body>
                        Hizmet maliyetleri projenin kapsamına ve süresine göre değişiklik gösterir. Size özel bir teklif
                        sunmak için görüşme yapıyoruz.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-inner-area bg_image ptb--120">
        <div className="container-full">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-center">
                <div className="pre-title-area">
                  <img src="assets/images/about/02.png" alt="about" />
                  <span className="pre-title">Bizimle Çalışın</span>
                </div>
                <h2 className="title">
                  Bir projeniz mi var? <br />
                  Merhaba demekten çekinmeyin.
                </h2>
                <a href="#" className="rts-btn btn-border radious-3 mt--50">
                  Hemen Başlayalım
                  <i className="fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
