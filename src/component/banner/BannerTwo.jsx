"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay, Keyboard, EffectFade } from 'swiper/modules';
import { useState } from 'react';
import Link from 'next/link';

function BannerTwo() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const bannerSlides = [
        {
            id: 1,
            bgClass: "banner-bg-2",
            preTitle: "İnovasyon & Teknoloji",
            title: "Dijital Dönüşümün Öncüsü",
            description: "İş dünyasının dijital dönüşüm yolculuğunda, yenilikçi çözümler ve teknoloji trendleriyle işletmelere rehberlik ediyoruz. Geleceğin iş dünyasını birlikte şekillendiriyoruz.",
            link: "/blog",
            linkText: "Blog'u Keşfet"
        },
        {
            id: 2,
            bgClass: "banner-bg-3",
            preTitle: "Fintech & Bankacılık",
            title: "Finansal Teknolojilerin Geleceği",
            description: "Fintech ekosistemindeki son gelişmeler, dijital ödemeler ve açık bankacılık çözümleriyle finansal hizmetlerin geleceğini şekillendiriyoruz.",
            link: "/kategori/fintech",
            linkText: "Fintech Yazıları"
        },
        {
            id: 3,
            bgClass: "banner-bg-4",
            preTitle: "İş Kültürü & Verimlilik",
            title: "Modern Çalışma Kültürü",
            description: "Hibrit çalışma modelleri, uzaktan ekip yönetimi ve dijital iş kültürü konularında en güncel içerikler ve uzman görüşleriyle yanınızdayız.",
            link: "/kategori/is-kulturu",
            linkText: "Daha Fazla Bilgi"
        }
    ];

    return (
        <div className="swiper-banner-two-wrapper" id='home'>
            <div className="swiper mySwiper-banner-two">
                <Swiper
                    modules={[Navigation, Thumbs, Autoplay, Keyboard, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                    keyboard={{ enabled: true, onlyInViewport: true, speed: 1000 }}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    effect="fade"
                    className="mySwiper-banner-two"
                >
                    {bannerSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className={`banner-twoa-rea-start bg_image ${slide.bgClass}`}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="banner-inner-content-wrapper">
                                                <span className="pre-title">{slide.preTitle}</span>
                                                <h1 className="title">
                                                    {slide.title}
                                                </h1>
                                                <p className="disc">{slide.description}</p>
                                                <Link
                                                    href={slide.link}
                                                    className="rts-btn btn-border"
                                                >
                                                    {slide.linkText} <i className="fa-regular fa-arrow-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="thumbs-swiper-main-wrapper-two">
                    <div className="swiper swiper-banner-thumb-2">
                        <Swiper
                            modules={[Navigation, Thumbs]}
                            slidesPerView={3}
                            onSwiper={setThumbsSwiper}
                            className="swiper-banner-thumb-2"
                        >
                            {bannerSlides.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <div className="single-item">
                                        <span className="number">0{slide.id}</span>
                                        <div className="inner">
                                            <span className="pre">{slide.preTitle.split(" & ")[0]}</span>
                                            <h6 className="title">{slide.title.split(" ")[0]}</h6>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerTwo