"use client";
import { useEffect } from "react";
import AOS from "aos";

const project = {
  title: "Dekoratif Yaşam Alanı Projesi",
  client: "Dekoda Müşterisi",
  location: "İstanbul",
  startDate: "01.03.2024",
  duration: "4 Ay",
  summary: `Dekoda tarafından tasarlanan bu özel proje, şehir hayatına estetik ve işlevselliği aynı anda kazandırmayı amaçlıyor. Boş ve atıl alanları modern, sürdürülebilir yaşam alanlarına dönüştüren proje, hem bireysel hem de kamusal kullanıma uygun çözümler sunuyor.`,
  scope: `Proje, yaklaşık 20 dönümlük bir alanı kapsıyor. Mevcut yapılar dikkatlice analiz edilerek sürdürülebilir dönüşüm prensiplerine göre yeniden tasarlandı.`,
  images: ["/assets/images/product/details/11.jpg", "/assets/images/product/details/12.jpg", "/assets/images/product/details/13.jpg"],
  challenges: [
    {
      title: "Alan Kısıtlamaları",
      description:
        "Kompakt alanlarda maksimum verimlilik hedeflendi. Fonksiyonel mobilyalar ve gizli depolama çözümleri geliştirildi.",
    },
    {
      title: "Mimari Engeller",
      description: "Mevcut mimari sınırları, tasarıma entegre edilen özel çözümlerle avantaja dönüştürüldü.",
    },
    {
      title: "Bütçe Optimizasyonu",
      description: "Önceliklendirilen unsurlarla, kaliteyi koruyarak bütçe dostu bir proje geliştirildi.",
    },
  ],
  solutions: [
    {
      title: "Uyumlu Stil Seçimi",
      description: "Minimalist çizgilerle doğal dokuları bir araya getiren sade ama şık bir tasarım tercih edildi.",
    },
    {
      title: "Odak Noktası Oluşturma",
      description:
        "Ana yaşam alanında görsel ilgiyi çeken merkezler oluşturuldu; bu, ışık oyunları ve sanat eserleri ile desteklendi.",
    },
  ],
};

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 0 });
  }, []);

  return (
    <div>
      <div className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="bread-crumb-area-inner">
            <div className="breadcrumb-top">
              <a href="#">Portfolyo</a> /{" "}
              <a className="active" href="#">
                Proje Özeti
              </a>
            </div>
            <div className="bottom-title">
              <h1 className="title">{project.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="product-details-style-one-main rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="product-details-left-one">
                <h3 className="title mt--0">Proje Özeti</h3>
                <p className="disc">
                  <b>Özet:</b> {project.summary}
                </p>
                <p className="disc">
                  <b>Kapsam:</b> {project.scope}
                </p>
              </div>
            </div>
            <div className="col-lg-4 pl--60 pl_md--15 pl_sm--15 mt_md--50 mt_sm--50">
              <div className="product-details-right-one">
                <div className="details-infor-1">
                  <div className="single-details-short">
                    <div className="left">
                      <span>Proje Adı:</span>
                      <p className="name">{project.title}</p>
                    </div>
                    <div className="right">
                      <span>Müşteri:</span>
                      <p className="name">{project.client}</p>
                    </div>
                  </div>
                  <div className="single-details-short">
                    <div className="left">
                      <span>Başlangıç:</span>
                      <p className="name">{project.startDate}</p>
                    </div>
                    <div className="right">
                      <span>Süre:</span>
                      <p className="name">{project.duration}</p>
                    </div>
                  </div>
                  <div className="single-details-short">
                    <div className="left">
                      <span>Konum:</span>
                      <p className="name">{project.location}</p>
                    </div>
                    <div className="right">
                      <span>Paylaş:</span>
                      <ul className="share">
                        {["facebook-f", "twitter", "youtube", "linkedin-in"].map((icon, i) => (
                          <li key={i}>
                            <a href="#">
                              <i className={`fa-brands fa-${icon}`} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ana Görsel */}
          <div className="row mt--40">
            <div className="col-lg-12">
              <div className="thumbnail-project-details-top" data-aos="move-right">
                <img src="/assets/images/product/details/10.jpg" alt="Dekoda project main" />
                <span>{project.location}'da Hayata Geçen Proje</span>
              </div>
            </div>
          </div>

          {/* Proje Zorlukları */}
          <div className="row mt--100">
            <div className="col-lg-6">
              <div className="project-challenge-details">
                <h5 className="title">Proje Zorlukları</h5>
                {project.challenges.map((item, i) => (
                  <p className="disc" key={i}>
                    <b>{item.title}:</b> {item.description}
                  </p>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="thumbnail-pd-video" data-aos="move-right">
                <img src="/assets/images/product/details/14.jpg" alt="Zorluk Görseli" />
              </div>
            </div>
          </div>

          {/* Galeri */}
          <div className="row mt--60 g-5">
            {project.images.map((src, i) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                <div className="thumbnail-g-3" data-aos="move-right" data-aos-delay={`.${i * 2}s`}>
                  <img src={src} alt={`Dekoda project ${i}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Çözümler */}
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="details-4-bottom">
                <h5 className="title">Proje Çözümü</h5>
                {project.solutions.map((solution, i) => (
                  <p className="disc" key={i}>
                    <b>{solution.title}:</b> {solution.description}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Önceki / Sonraki */}
          <div className="row">
            <div className="col-lg-12">
              <div className="next-prev-product-details">
                <span className="left">
                  <i className="fa-light fa-arrow-left" /> Önceki
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 19 19" fill="none">
                  {[...Array(9)].map((_, i) => (
                    <rect key={i} x={(i % 3) * 7} y={Math.floor(i / 3) * 7} width={4} height={4} fill="#30373E" />
                  ))}
                </svg>
                <span className="left">
                  Sonraki <i className="fa-light fa-arrow-right" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
