"use client"
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import { useEffect } from 'react';

function ServiceOne() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 0,
        });
    }, []);
    return (
        <div>
            {/* rts service area start */}
            <div className="rts-service-area rts-section-gap" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-center">
                                <div className="pre-title-area">
                                    <img src="/assets/images/about/02.png" alt="about" />
                                    <span className="pre-title">Hizmetlerimiz</span>
                                </div>
                                <h2 className="title quote">
                                    Dijital Dönüşüm Çözümlerimiz
                                </h2>
                                <p className="disc">
                                    İşletmenizin ihtiyaçlarına özel, yenilikçi ve etkili dijital çözümler sunuyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--30 rts-slide-up">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="100">
                            {/* single service area start */}
                            <div className="single-service-one">
                                <div className="thumbnail">
                                    <Image
                                        src="/assets/images/service/01.jpg"
                                        alt="service"
                                        width={370}
                                        height={250}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/hizmetlerimiz/dijital-donusum">Dijital Dönüşüm</Link>
                                    </h4>
                                    <p className="disc">
                                        İşletmenizi dijital çağa hazırlayın. Modern teknolojiler ve stratejilerle 
                                        rekabet avantajı kazanın.
                                    </p>
                                    <Link href="/hizmetlerimiz/dijital-donusum" className="rts-btn btn-border">
                                        Detayları Gör
                                    </Link>
                                </div>
                            </div>
                            {/* single service area end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="300">
                            {/* single service area start */}
                            <div className="single-service-one">
                                <div className="thumbnail">
                                    <Image
                                        src="/assets/images/service/02.jpg"
                                        alt="service"
                                        width={370}
                                        height={250}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/hizmetlerimiz/yazilim-cozumleri">Yazılım Çözümleri</Link>
                                    </h4>
                                    <p className="disc">
                                        Özel yazılım geliştirme ve entegrasyon hizmetleriyle iş süreçlerinizi 
                                        optimize edin.
                                    </p>
                                    <Link href="/hizmetlerimiz/yazilim-cozumleri" className="rts-btn btn-border">
                                        Detayları Gör
                                    </Link>
                                </div>
                            </div>
                            {/* single service area end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="500">
                            {/* single service area start */}
                            <div className="single-service-one">
                                <div className="thumbnail">
                                    <Image
                                        src="/assets/images/service/03.jpg"
                                        alt="service"
                                        width={370}
                                        height={250}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/hizmetlerimiz/dijital-pazarlama">Dijital Pazarlama</Link>
                                    </h4>
                                    <p className="disc">
                                        Markanızı dijital dünyada öne çıkarın. Etkili pazarlama stratejileriyle 
                                        hedef kitlenize ulaşın.
                                    </p>
                                    <Link href="/hizmetlerimiz/dijital-pazarlama" className="rts-btn btn-border">
                                        Detayları Gör
                                    </Link>
                                </div>
                            </div>
                            {/* single service area end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service area end */}
        </div>
    )
}

export default ServiceOne