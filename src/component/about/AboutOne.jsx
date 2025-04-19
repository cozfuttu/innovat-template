"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
function AboutOne() {
    useEffect(() => {
        AOS.init({
            duration: 1200,  // Animation duration in ms
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
                                <img  data-aos="move-right"
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
                                        <img src="/assets/images/about/02.png" alt="about" />
                                        <span className="pre-title">Hakkımızda</span>
                                    </div>
                                    <h2 className="title mt--0 mb--25 quote">
                                        Dijital Dönüşümde Öncü Çözümler Sunuyoruz
                                    </h2>
                                </div>
                                <p className="disc mb--15" data-aos="fade-up" data-aos-delay="300">
                                    Cano Digital olarak, işletmelerin dijital dönüşüm yolculuğunda 
                                    güvenilir bir partner olmayı hedefliyoruz. Uzman ekibimiz ve 
                                    yenilikçi yaklaşımımızla, müşterilerimize en iyi hizmeti sunmak 
                                    için çalışıyoruz.
                                </p>
                                <p className="disc" data-aos="fade-up" data-aos-delay="500">
                                    Dijital dönüşümün işletmelerin başarısı için kritik öneme sahip 
                                    olduğuna inanıyoruz. İster küçük bir işletme olun, ister büyük 
                                    bir kurum, size özel çözümler geliştirerek dijital potansiyelinizi 
                                    en üst düzeye çıkarıyoruz.
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
    )
}

export default AboutOne