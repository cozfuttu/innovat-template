import Breadcrumb from "@/component/banner/Breadcrumb";

export default function Home() {
  return (
    <div className="">
      <Breadcrumb title="Fiyatlandırma" />

      {/* rts pricing area start */}
      <div className="rts-pricing-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-center">
                <div className="pre-title-area">
                  <img src="assets/images/about/02.png" alt="about" />
                  <span className="pre-title">Fiyatlandırma</span>
                </div>
                <h2 className="title mt--10">Fiyatlandırma Planları</h2>
                <p className="disc">
                  Dijital dönüşüm ve teknoloji hizmetlerimiz için en uygun fiyatlandırma planını seçin <br />
                  projeniz için en iyi çözümü sunuyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              {/* single pricing area */}
              <div className="single-pricing-main">
                <div className="head">
                  <span>Başlangıç Paketi</span>
                  <h2 className="price">₺2.190</h2>
                </div>
                <div className="body">
                  <p className="disc">Temel dijital dönüşüm hizmetleri ve danışmanlık için ideal başlangıç paketi.</p>
                  <div className="available">
                    <i className="fa-light fa-check" />
                    Dijital Strateji
                  </div>
                  <div className="available not">
                    <i className="fa-light fa-x" />
                    Özel Yazılım
                  </div>
                  <div className="available">
                    <i className="fa-light fa-check" />
                    Temel SEO
                  </div>
                  <div className="available not">
                    <i className="fa-light fa-x" />
                    Sosyal Medya Yönetimi
                  </div>
                  <a href="#" className="rts-btn btn-border">
                    Başla
                  </a>
                </div>
              </div>
              {/* single pricing area end */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              {/* single pricing area */}
              <div className="single-pricing-main">
                <div className="head">
                  <span>Profesyonel Paket</span>
                  <h2 className="price">₺3.190</h2>
                </div>
                <div className="body">
                  <p className="disc">Kapsamlı dijital dönüşüm ve teknoloji çözümleri için profesyonel paket.</p>
                  <div className="available">
                    <i className="fa-light fa-check" />
                    Dijital Strateji
                  </div>
                  <div className="available">
                    <i className="fa-light fa-check" />
                    Özel Yazılım
                  </div>
                  <div className="available">
                    <i className="fa-light fa-check" />
                    Gelişmiş SEO
                  </div>
                  <div className="available not">
                    <i className="fa-light fa-x" />
                    Sosyal Medya Yönetimi
                  </div>
                  <a href="#" className="rts-btn btn-border">
                    Başla
                  </a>
                </div>
              </div>
              {/* single pricing area end */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              {/* single pricing area */}
              <div className="single-pricing-main">
                <div className="head">
                  <span>Kurumsal Paket</span>
                  <h2 className="price">₺4.190</h2>
                </div>
                <div className="body">
                  <p className="disc">Kurumsal ihtiyaçlar için özel tasarlanmış kapsamlı dijital dönüşüm paketi.</p>
                  <div className="available">
                    <i className="fa-light fa-check" />
                    Dijital Strateji
                  </div>
                  <div className="available">
                    <i className="fa-light fa-check" />
                    Özel Yazılım
                  </div>
                  <div className="available">
                    <i className="fa-light fa-check" />
                    Gelişmiş SEO
                  </div>
                  <div className="available">
                    <i className="fa-light fa-check" />
                    Sosyal Medya Yönetimi
                  </div>
                  <a href="#" className="rts-btn btn-border">
                    Başla
                  </a>
                </div>
              </div>
              {/* single pricing area end */}
            </div>
          </div>
        </div>
      </div>
      {/* rts pricing area end */}

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
