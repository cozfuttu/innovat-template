"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Daire",
    category: "İç Mekan Tasarımı",
    href: "/projeler/modern-minimalist-daire",
    image: "/assets/images/product/01.jpg",
  },
  {
    id: 2,
    title: "Lüks Villa Yenileme",
    category: "Mimari Renovasyon",
    href: "/projeler/luks-villa-yenileme",
    image: "/assets/images/product/02.jpg",
  },
  {
    id: 3,
    title: "Bohem Ofis Tasarımı",
    category: "Ofis Dekorasyonu",
    href: "/projeler/bohem-ofis-tasarimi",
    image: "/assets/images/product/03.jpg",
  },
  {
    id: 4,
    title: "Endüstriyel Loft Projesi",
    category: "Loft Tasarımı",
    href: "/projeler/endustriyel-loft",
    image: "/assets/images/product/04.jpg",
  },
  {
    id: 5,
    title: "Doğayla Uyumlu Yaşam Alanı",
    category: "Sürdürülebilir Tasarım",
    href: "/projeler/dogayla-uyumlu-tasarim",
    image: "/assets/images/product/03.jpg",
  },
];

function ProjectOne() {
  return (
    <div>
      {/* rts project area start */}
      <div className="rts-project-area rts-section-gap bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-product-one">
                <div className="title-style-left">
                  <div className="pre-title-area">
                    <img src="/assets/images/about/02.png" alt="about" />
                    <span className="pre-title">Projelerimiz</span>
                  </div>
                  <h2 className="title quote">
                    Başarılı Dijital Dönüşüm <br />
                    Projelerimiz
                  </h2>
                </div>
                <p className="disc">
                  İşletmelerin dijital dönüşüm yolculuğunda başarılı projeler gerçekleştirdik. Modern teknolojiler ve
                  yenilikçi yaklaşımlarla müşterilerimizin iş süreçlerini optimize ettik.
                </p>
                <div className="swiper-next-prev-wrapper">
                  <div className="swiper-button-next" />
                  <div className="swiper-button-prev" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-full mt--50">
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper-product-one-wrapper">
                <div className="swiper swiper-product-one">
                  <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={5}
                    loop={true}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    speed={500}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      20: { slidesPerView: 1 },
                      640: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 4 },
                      1600: { slidesPerView: 5 },
                    }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("swiper-product-one")}
                  >
                    {projects.map((project, index) => (
                      <SwiperSlide key={project.id}>
                        <div className="single-product-one">
                          <span className="number">{String(index + 1).padStart(2, "0")}</span>
                          <Link href={project.href} className="thumbnail">
                            <img src={project.image} alt={project.title} />
                          </Link>
                          <div className="inenr-content-absolute">
                            <Link href={project.href}>
                              <h3 className="title">{project.title}</h3>
                            </Link>
                            <span className="category">{project.category}</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts project area end */}
    </div>
  );
}

export default ProjectOne;
