"use client";
import { useEffect } from "react";
import AOS from "aos";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      once: true,
      offset: 0, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="">
      <div className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-area-inner">
                <div className="breadcrumb-top">
                  <a href="#">Portfolyo</a> /
                  <a className="active" href="#">
                    Proje Özeti
                  </a>
                </div>
                <div className="bottom-title">
                  <h1 className="title">Proje Özeti</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bread croumba rea end */}
      {/* header three area end */}
      <div className="product-details-style-one-main rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="product-details-left-one">
                <h3 className="title mt--0">Proje Özeti</h3>
                <p className="disc">
                  <b className="mb--0">Proje Özeti: </b> <br />
                  Nehir Kıyısı Yeniden Geliştirme Projesi, nehir kıyısındaki atıl sanayi alanını dönüştürmeyi
                  amaçlamaktadır. nehri, kentin kentsel dokusunu geliştiren ve kenti yeniden birbirine bağlayan canlı
                  bir karma kullanım bölgesine topluluğu sahile taşıyor. Düşünceli kentsel planlama ve mimari tasarım
                  sayesinde proje bölgeyi yeniden canlandıracak, ekonomik büyüme için yeni fırsatlar yaratacak ve genel
                  olarak sakinleri ve ziyaretçiler için yaşam kalitesi.
                </p>
                <p className="disc">
                  <b>Proje Kapsamı:</b> <br />
                  Proje, nehir kıyısında 30 dönüm alanını kapsayan belirli bir alanı hedef alır. Hem kırık alanlar hem
                  boş alanlar içerir, mevcut yapıları yeniden kullanma ve projenin amaçlarına uygun yeni gelişimler
                  sunma fırsatı sunar.
                </p>
              </div>
            </div>
            <div className="col-lg-4 pl--60 pl_md--15 pl_sm--15 mt_md--50 mt_sm--50">
              <div className="product-details-right-one">
                <div className="details-infor-1">
                  {/* single detrails short */}
                  <div className="single-details-short">
                    <div className="left">
                      <span>Proje Adı:</span>
                      <p className="name">Ticari Bina</p>
                    </div>
                    <div className="right">
                      <span>Müşteri Adı:</span>
                      <p className="name">Robert Richard</p>
                    </div>
                  </div>
                  {/* single detrails short end */}
                  {/* single detrails short */}
                  <div className="single-details-short">
                    <div className="left">
                      <span>Başlangıç Tarihi:</span>
                      <p className="name">12.07.2023</p>
                    </div>
                    <div className="right">
                      <span>Proje Süresi:</span>
                      <p className="name">6 Ay</p>
                    </div>
                  </div>
                  {/* single detrails short end */}
                  {/* single detrails short */}
                  <div className="single-details-short">
                    <div className="left">
                      <span>Konum:</span>
                      <p className="name">İstanbul</p>
                    </div>
                    <div className="right">
                      <span>Proje Paylaş:</span>
                      <ul className="share">
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* single detrails short end */}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt--40">
            <div className="col-lg-12">
              <div className="thumbnail-project-details-top" data-aos="move-right">
                <img src="assets/images/product/details/10.jpg" alt="product_details" />
                <span>İstanbul'da Yapılan İnşaat Projesi</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product-details-padding-lr">
                <h4 className="title">Proje Çözümü:</h4>
                <p className="disc">
                  <b>Site Analizi ve Planlama:</b> Mevcut şartları anlamak için ayrıntılı bir site analizi yapın,
                  yükseklik, doğal özellikler, altyapı ve tarihi unsurları içeren mevcut şartları anlayın. Gelişim için
                  potansiyel kısıtlamalar ve fırsatları belirleyin. Genel bir plan oluşturun ki bu plan, bölgenin zemin
                  kullanımı, kullanım alanı ve genel düzenini belirler.
                </p>
                <ul>
                  <li>Mimari Tasarım ve Kentsel Form</li>
                  <li>Su Kıyısı ve Kamu Alanları</li>
                  <li>İzleme ve Değerlendirme</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt--60 g-5">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="thumbnail-g-3" data-aos="move-right">
                <img src="assets/images/product/details/11.jpg" alt="product" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="thumbnail-g-3" data-aos="move-right" data-aos-delay=".2s">
                <img src="assets/images/product/details/12.jpg" alt="product" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="thumbnail-g-3" data-aos="move-right" data-aos-delay=".4s">
                <img src="assets/images/product/details/13.jpg" alt="product" />
              </div>
            </div>
          </div>
          <div className="row mt--100">
            <div className="col-lg-6">
              <div className="project-challenge-details">
                <h5 className="title"> Proje Zorlukları</h5>
                <p className="disc">
                  Proje zorlukları, iç tasarım projesine ilgili oturma odası için zorluklar. Bu yüzden, burada bazı
                  ortak zorluklarla karşılaşabileceğiniz ve mümkün çözümler:
                </p>
                <p className="disc">
                  <b>Kısıtlı alan:</b> Oturma odasınız küçükse, mevcut alanı maksimize etmeye odaklanın. Depolama
                  ottomansı veya gizli depolama özellikleri olan kafes tabloları gibi çok amaçlı mobilyalar kullanın.
                </p>
                <p className="disc">
                  <b>Sıkışık düzen ve mimari özellikler:</b> Oturma odasınızda rastgele düzenleme veya pencereler gibi
                  rastgele mimari özellikler varsa.
                </p>
                <p className="disc">
                  <b>Bütçe kısıtlamaları:</b> Eğer bir bütçe kısıtlaması varsa, koltuk, aydınlatma ve döşeme gibi önemli
                  öğeler için harcamayı önceliklendirin.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="thumbnail-pd-video" data-aos="move-right">
                <img src="assets/images/product/details/14.jpg" alt="product-details" />
              </div>
            </div>
          </div>
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="details-4-bottom">
                <h5 className="title">Proje Çözümü</h5>
                <p className="disc">
                  Projeniniz için bir çözüm sunmak için genel tasarım prensiplerine dayalı bazı genel yönergeler
                  sunacağım. Bununla birlikte, bu öneriler, tam olarak detaylarınızı bilmiyorum, bu yüzden bu öneriler
                  sadece başlangıç noktası olarak kullanılabilir.
                </p>
                <p className="disc">
                  <b>Bir uyumlu stil seçin:</b> Stilinizi seçin ve istediğiniz atmosferle uyumlu olarak tercih edin. Bu,
                  modern, klasik, tarihi, sanayi, doğal veya herhangi bir stil olabilir, bu stillere uygun olarak tercih
                  edilir.
                </p>
                <p className="disc">
                  <b>Bir odak noktası oluşturun:</b> Oturma odasında bir odak noktası belirleyin ki bu nokta odanın
                  atmosferini belirler. Bu, bir ateş çukuru, bir büyük sanat eseri, bir büyük pencere görüntüsü veya
                  herhangi bir şey olabilir.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="next-prev-product-details">
                <span className="left">
                  {" "}
                  <i className="fa-light fa-arrow-left" /> Önceki{" "}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 19 19" fill="none">
                  <rect x="7.17188" y="0.74585" width={4} height={4} fill="#30373E" />
                  <rect x="7.17188" y="7.78369" width={4} height={4} fill="#30373E" />
                  <rect x="7.17188" y="14.8218" width={4} height={4} fill="#30373E" />
                  <rect x="0.1875" y="0.74585" width={4} height={4} fill="#30373E" />
                  <rect x="0.1875" y="7.78369" width={4} height={4} fill="#30373E" />
                  <rect x="0.1875" y="14.8218" width={4} height={4} fill="#30373E" />
                  <rect x="14.1953" y="0.74585" width={4} height={4} fill="#30373E" />
                  <rect x="14.1953" y="7.78369" width={4} height={4} fill="#30373E" />
                  <rect x="14.1953" y="14.8218" width={4} height={4} fill="#30373E" />
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
