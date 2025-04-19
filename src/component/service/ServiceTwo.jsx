"use client"
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import { useEffect } from 'react';
function ServiceTwo() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 0,
        });
    }, []);
    return (
        <div>
            <div className="rts-service-area rts-section-gap" id='service'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-multiple-elements">
                                <div className="title-left-style-two">
                                    <div className="pre-title">
                                        <span className="pre-title">Hizmetlerimiz</span>
                                        <img src="/assets/images/service/02.png" alt="hizmet" />
                                    </div>
                                    <h2 className="title">
                                        Kapsamlı Dijital <br />
                                        Dönüşüm Hizmetleri
                                    </h2>
                                </div>
                                <p className="disc">
                                    İşletmenizin dijital dönüşüm yolculuğunda ihtiyaç duyduğu tüm teknoloji ve 
                                    inovasyon çözümlerini sunuyoruz.
                                </p>
                                <Link href="/hizmetlerimiz" className="view-servce-btn">
                                    Tüm Hizmetleri Gör <i className="fa-thin fa-chevron-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--30 rts-slide-up">
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
                            <div className="singe-serice-style-two">
                                <Link href="/hizmetlerimiz/dijital-donusum" className="thumbnail">
                                    <img src="/assets/images/service/03.jpg" alt="dijital dönüşüm" />
                                </Link>
                                <div className="body">
                                    <div className="wrapper">
                                        <div className="icon-area">
                                            <div className="icon">
                                                <i className="fa-solid fa-laptop-code fa-2x"></i>
                                            </div>
                                            <span>01</span>
                                        </div>
                                        <div className="inner">
                                            <Link href="/hizmetlerimiz/dijital-donusum">
                                                <h6 className="title">Dijital Dönüşüm</h6>
                                            </Link>
                                            <p className="disc">
                                                İşletmenizin dijital olgunluk seviyesini artırarak, verimliliği ve rekabet 
                                                gücünü yükseltiyoruz.
                                            </p>
                                            <Link
                                                href="/hizmetlerimiz/dijital-donusum"
                                                className="arrow-btn-read-more"
                                            >
                                                Detaylı Bilgi <i className="fa-thin fa-chevron-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300">
                            <div className="singe-serice-style-two">
                                <Link href="/hizmetlerimiz/fintech-cozumleri" className="thumbnail">
                                    <img src="/assets/images/service/04.jpg" alt="fintech çözümleri" />
                                </Link>
                                <div className="body">
                                    <div className="wrapper">
                                        <div className="icon-area">
                                            <div className="icon">
                                                <i className="fa-solid fa-chart-line fa-2x"></i>
                                            </div>
                                            <span>02</span>
                                        </div>
                                        <div className="inner">
                                            <Link href="/hizmetlerimiz/fintech-cozumleri">
                                                <h6 className="title">Fintech Çözümleri</h6>
                                            </Link>
                                            <p className="disc">
                                                Modern finans teknolojileri ile işletmenizin finansal süreçlerini 
                                                optimize ediyoruz.
                                            </p>
                                            <Link
                                                href="/hizmetlerimiz/fintech-cozumleri"
                                                className="arrow-btn-read-more"
                                            >
                                                Detaylı Bilgi <i className="fa-thin fa-chevron-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="500">
                            <div className="singe-serice-style-two">
                                <Link href="/hizmetlerimiz/dijital-is-kulturu" className="thumbnail">
                                    <img src="/assets/images/service/05.jpg" alt="dijital iş kültürü" />
                                </Link>
                                <div className="body">
                                    <div className="wrapper">
                                        <div className="icon-area">
                                            <div className="icon">
                                                <i className="fa-solid fa-users-gear fa-2x"></i>
                                            </div>
                                            <span>03</span>
                                        </div>
                                        <div className="inner">
                                            <Link href="/hizmetlerimiz/dijital-is-kulturu">
                                                <h6 className="title">Dijital İş Kültürü</h6>
                                            </Link>
                                            <p className="disc">
                                                Modern çalışma modellerini ve dijital araçları kullanarak iş kültürünüzü 
                                                dönüştürüyoruz.
                                            </p>
                                            <Link
                                                href="/hizmetlerimiz/dijital-is-kulturu"
                                                className="arrow-btn-read-more"
                                            >
                                                Detaylı Bilgi <i className="fa-thin fa-chevron-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceTwo