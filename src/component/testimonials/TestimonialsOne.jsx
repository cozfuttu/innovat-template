"use client";
import Link from "next/link";
import Image from "next/image";
// Import Swiper and necessary components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules (optional based on your needs)
import { EffectFade, Pagination, Scrollbar, A11y } from "swiper/modules";

const testimonials = [
  {
    quote:
      "Dekoda'nın sunduğu tasarımlar gerçekten büyüleyici. Proje başlangıcından son aşamasına kadar her detay özenle ele alındı. Sonuç, evimizin havasını tamamen değiştirdi ve yaşam alanımızı çok daha fonksiyonel hale getirdi.",
    author: "Elif Yılmaz",
    position: "Mimarlık Sektörü",
    image: "/assets/images/testimonials/03.png",
    thumbnail: "/assets/images/testimonials/04.png",
  },
  {
    quote:
      "Dekoda ile çalışmak bizim için müthiş bir deneyimdi. Hem estetik hem de fonksiyonel açıdan evimize kattıkları çok değerli. Evimizdeki her köşe, Dekoda'nın tasarım dokunuşlarıyla yeniden hayat buldu.",
    author: "Mehmet Korkmaz",
    position: "İç Mekan Tasarımcıları",
    image: "/assets/images/testimonials/03.png",
    thumbnail: "/assets/images/testimonials/09.png",
  },
  {
    quote:
      "Dekoda'nın işbirliği, bizim için unutulmaz bir deneyim oldu. Tasarımları sadece görsel açıdan harika değil, aynı zamanda yaşanabilir ve kullanışlı alanlar yaratmamıza yardımcı oldular. Her zaman yenilikçi ve yaratıcılar.",
    author: "Cemil Arslan",
    position: "Ev Sahibi",
    image: "/assets/images/testimonials/03.png",
    thumbnail: "/assets/images/testimonials/02.png",
  },
];

function TestimonialsOne() {
  return (
    <div>
      {/* rts testimonials area start */}
      <div className="rts-testimonials-area-start rts-section-gap bg-testimonials-1 bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-center">
                <div className="pre-title-area">
                  <Image
                    width={250}
                    height={250}
                    style={{ width: "max-content", height: "auto" }}
                    src="/assets/images/about/02.png"
                    alt="about"
                  />
                  <span className="pre-title">Müşteri Yorumları</span>
                </div>
                <h2 className="title quote">
                  Değerli Müşterilerimizden <br />
                  Gelen Geri Bildirimler
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="testimonials-one-wrapper">
                {/* Swiper */}
                <div className="swiper swiper-testimonails-one">
                  <Swiper
                    modules={[Pagination, EffectFade, Scrollbar, A11y]}
                    spaceBetween={60}
                    slidesPerView={2}
                    loop={true}
                    speed={500}
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      20: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                      },
                    }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("mySwiper-banner-one-in-two")}
                  >
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="sigle-testimonials-one">
                          <div className="top-quote">
                            <Image
                              width={250}
                              height={250}
                              style={{ width: "max-content", height: "auto" }}
                              src={testimonial.image}
                              alt="yorum"
                            />
                          </div>
                          <p>{testimonial.quote}</p>
                          <div className="author-area">
                            <div className="thumbnail">
                              <Image
                                width={250}
                                height={250}
                                style={{ width: "max-content", height: "auto" }}
                                src={testimonial.thumbnail}
                                alt="yorum"
                              />
                            </div>
                            <div className="info">
                              <h6 className="title">{testimonial.author}</h6>
                              <span>{testimonial.position}</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts testimonials area end */}
    </div>
  );
}

export default TestimonialsOne;
