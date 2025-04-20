"use client";

import BrandEight from "@/component/brand/BrandEight";
import PaperIcon from "@/component/paper-icon";
import ProcessTwo from "@/component/workingprocess/ProcessTwo";

const services = [
  {
    id: "01",
    title: "Alan Planlaması",
    image: "/assets/images/service/03.jpg",
    description: "Alan planlaması, iç tasarımın düzenlemeye odaklanan temel bir yönüdür.",
    href: "#",
  },
  {
    id: "02",
    title: "Renk Danışmanlığı",
    image: "/assets/images/service/04.jpg",
    description: "Renk uyumu ve psikolojisi ile alanlara derinlik kazandırılır.",
    href: "#",
  },
  {
    id: "03",
    title: "Mobilya Seçimi",
    image: "/assets/images/service/05.jpg",
    description: "İhtiyaca uygun mobilyalar ile hem estetik hem işlevsellik sunulur.",
    href: "#",
  },
  {
    id: "04",
    title: "Dekoratif Aksesuarlar",
    image: "/assets/images/service/03.jpg",
    description: "Alanı tamamlayan dekoratif unsurlar ile stil bütünlüğü sağlanır.",
    href: "#",
  },
  {
    id: "05",
    title: "Aydınlatma Tasarımı",
    image: "/assets/images/service/04.jpg",
    description: "Fonksiyonel ve atmosferik aydınlatma çözümleri sunarız.",
    href: "#",
  },
  {
    id: "06",
    title: "Malzeme Danışmanlığı",
    image: "/assets/images/service/05.jpg",
    description: "Uygun malzeme seçimiyle kaliteyi ve sürdürülebilirliği ön planda tutarız.",
    href: "#",
  },
];

export default function Home() {
  return (
    <div>
      <section className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bread-crumb-area-inner">
                <div className="bottom-title">
                  <h1 className="title">Hizmetlerimiz</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rts-service-inner-area rts-section-gap service-v-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-style-center">
                <div className="pre-title-area">
                  <img src="/images/about/02.png" alt="about" />
                  <span className="pre-title">Hizmetlerimiz</span>
                </div>
                <h2 className="title">Hizmetlerimiz</h2>
                <p className="disc">
                  İç mekan yenileme ve tasarım konusunda tutkulu, <br />
                  uzman ve deneyimli bir ekibe sahip olmaktan gurur duyuyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--30 rts-slide-up">
            {services.map(({ id, title, image, description, href }) => (
              <div className="col-lg-4 col-md-6 col-12" key={id}>
                <div className="singe-serice-style-two">
                  <a href={href} className="thumbnail">
                    <img src={image} alt={title} />
                  </a>
                  <div className="body">
                    <div className="wrapper">
                      <div className="icon-area">
                        <div className="icon">
                          <PaperIcon width={47} height={47} />
                        </div>
                        <span>{id}</span>
                      </div>
                      <div className="inner">
                        <h6 className="title">{title}</h6>
                        <p className="disc">{description}</p>
                        <a href={href} className="arrow-btn-read-more">
                          Daha Fazla <i className="fa-thin fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandEight />
      <ProcessTwo />

      <section className="cta-inner-area bg_image ptb--120">
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <div className="title-style-center">
                <div className="pre-title-area">
                  <img src="/images/about/02.png" alt="about" />
                  <span className="pre-title">Bizimle Çalışın</span>
                </div>
                <h2 className="title">
                  Aklınızda bir proje mi var? <br />
                  Merhaba demekten çekinmeyin.
                </h2>
                <a href="/iletisim" className="rts-btn btn-border radious-3 mt--50">
                  Hadi Yapalım <i className="fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
