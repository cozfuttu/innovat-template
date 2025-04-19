"use client"
import Link from 'next/link';
// Import Swiper and necessary components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import required modules (optional based on your needs)
import { EffectFade, Pagination, Scrollbar, A11y } from 'swiper/modules';
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
                                    <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }} src="/assets/images/about/02.png" alt="about" />
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
                                        onSlideChange={() => console.log('mySwiper-banner-one-in-two')}
                                    >
                                        <SwiperSlide>
                                            <div className="sigle-testimonials-one">
                                                <div className="top-quote">
                                                    <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }}
                                                        src="/assets/images/testimonials/03.png"
                                                        alt="yorum"
                                                    />
                                                </div>
                                                <p>
                                                    Cano Digital ekibiyle çalışmak gerçekten keyifliydi. Başlangıçtan 
                                                    son aşamaya kadar her adımda profesyonellik ve detaylara özen 
                                                    gösterildi. Sonuç beklentilerimizi aştı ve dijital dönüşüm 
                                                    sürecimizde büyük başarı elde ettik.
                                                </p>
                                                <div className="author-area">
                                                    <div className="thumbnail">
                                                        <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }}
                                                            src="/assets/images/testimonials/04.png"
                                                            alt="yorum"
                                                        />
                                                    </div>
                                                    <div className="info">
                                                        <h6 className="title">Ali Yıldız</h6>
                                                        <span>Finans Sektörü</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="sigle-testimonials-one">
                                                <div className="top-quote">
                                                    <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }}
                                                        src="/assets/images/testimonials/03.png"
                                                        alt="yorum"
                                                    />
                                                </div>
                                                <p>
                                                    Dijital dönüşüm sürecimizde Cano Digital'in sunduğu çözümler 
                                                    işimizi büyük ölçüde kolaylaştırdı. Modern teknolojiler ve 
                                                    yenilikçi yaklaşımları sayesinde verimliliğimiz önemli ölçüde 
                                                    arttı. Kesinlikle tavsiye ediyorum.
                                                </p>
                                                <div className="author-area">
                                                    <div className="thumbnail">
                                                        <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }}
                                                            src="/assets/images/testimonials/04.png"
                                                            alt="yorum"
                                                        />
                                                    </div>
                                                    <div className="info">
                                                        <h6 className="title">Ayşe Kaya</h6>
                                                        <span>Perakende Sektörü</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="sigle-testimonials-one">
                                                <div className="top-quote">
                                                    <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }}
                                                        src="/assets/images/testimonials/03.png"
                                                        alt="yorum"
                                                    />
                                                </div>
                                                <p>
                                                    Cano Digital ile çalışmak işimiz için dönüm noktası oldu. 
                                                    Sundukları yazılım çözümleri ve danışmanlık hizmetleri sayesinde 
                                                    rekabet avantajı elde ettik. Profesyonel ve güvenilir bir ekip.
                                                </p>
                                                <div className="author-area">
                                                    <div className="thumbnail">
                                                        <img width={250} height={250} style={{ width: 'max-content', height: 'auto' }}
                                                            src="/assets/images/testimonials/04.png"
                                                            alt="yorum"
                                                        />
                                                    </div>
                                                    <div className="info">
                                                        <h6 className="title">Mehmet Demir</h6>
                                                        <span>Üretim Sektörü</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
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
    )
}

export default TestimonialsOne