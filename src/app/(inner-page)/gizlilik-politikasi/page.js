import Breadcrumb from "@/component/banner/Breadcrumb";

export default function Home() {
  return (
    <div className="">
      <Breadcrumb title="Gizlilik Politikası" />

      {/* terms and condition area main */}
      <div className="terms-and-condition-wrapper rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms-wrapper-main">
                <p className="disc">
                  Gizlilik politikamız, kullanıcılarımızın kişisel verilerinin korunması ve işlenmesi konusundaki
                  yaklaşımımızı açıklamaktadır. Cano Digital olarak, kullanıcılarımızın gizliliğine büyük önem veriyor
                  ve kişisel verilerin güvenli bir şekilde işlenmesi için gerekli tüm önlemleri alıyoruz.
                </p>
                <p className="disc">
                  Bu gizlilik politikası, web sitemizi ziyaret eden veya hizmetlerimizi kullanan tüm kullanıcılar için
                  geçerlidir. Kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu anlamanızı
                  sağlamak için bu politikayı dikkatle okumanızı öneririz.
                </p>
                <p className="disc">
                  Kişisel verileriniz, hizmetlerimizi sunmak, iyileştirmek ve size daha iyi bir deneyim sağlamak
                  amacıyla kullanılmaktadır. Verileriniz, yasal yükümlülüklerimiz ve gizlilik standartlarımız
                  doğrultusunda işlenmektedir.
                </p>
                <p className="disc">
                  Gizlilik politikamız, KVKK (Kişisel Verilerin Korunması Kanunu) ve ilgili diğer mevzuat hükümlerine
                  uygun olarak hazırlanmıştır. Verilerinizin güvenliği ve gizliliği konusundaki taahhüdümüzü sürdürmeye
                  devam edeceğiz.
                </p>
                <p className="disc">
                  Bu politika, zaman zaman güncellenebilir. Değişiklikler yapıldığında, web sitemizde yayınlanacak ve
                  gerekli durumlarda size bildirilecektir.
                </p>
                <h4 className="title">Kullanıcıların Kişisel Bilgilerinin Belirlenmesi</h4>
                <div className="listof-privacy-policy">
                  <ul>
                    <li>Ad, soyad, e-posta adresi, telefon numarası gibi temel iletişim bilgileri</li>
                    <li>IP adresi, tarayıcı bilgileri, cihaz bilgileri gibi teknik veriler</li>
                    <li>Hizmet kullanım verileri ve tercihleriniz</li>
                  </ul>
                </div>
                <h4 className="title">Kullanıcı Kişisel Bilgilerinin Toplanma ve İşlenme Nedenleri</h4>
                <div className="listof-privacy-policy mb--30">
                  <ol>
                    <li>Hizmetlerimizi sunmak ve iyileştirmek</li>
                    <li>Müşteri ilişkilerini yönetmek ve destek sağlamak</li>
                    <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                  </ol>
                </div>
                <p className="disc">
                  Kişisel verileriniz, yalnızca belirtilen amaçlar doğrultusunda ve yasal sınırlar içinde işlenmektedir.
                  Verilerinizin güvenliği için gerekli teknik ve idari önlemleri alıyor, üçüncü taraflarla paylaşımını
                  minimum düzeyde tutuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* terms and condition area main end */}
    </div>
  );
}
