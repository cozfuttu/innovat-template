// app/portfolio/page.tsx (veya uygun sayfa yolu)

const portfolioItems = [
  {
    id: 1,
    title: "Modern Oturma Alanı",
    image: "/assets/images/product/20.jpg",
    description: "Konforu ve zarafeti bir araya getiren çağdaş oturma alanı tasarımı.",
  },
  {
    id: 2,
    title: "Zamansız Yemek Alanı",
    image: "/assets/images/product/21.jpg",
    description: "Modern çizgilerle şekillendirilmiş, zamansız bir yemek deneyimi alanı.",
  },
  {
    id: 3,
    title: "Sıcak ve Şık Yatak Odası",
    image: "/assets/images/product/22.jpg",
    description: "Dinlendirici bir atmosfer sunan, ahşap dokularla zenginleştirilmiş yatak odası tasarımı.",
  },
  {
    id: 4,
    title: "Minimalist Mutfak Detayı",
    image: "/assets/images/product/23.jpg",
    description: "İşlevselliği estetikle buluşturan, sade ve modern mutfak çözümü.",
  },
  {
    id: 5,
    title: "Doğal Işık ile Banyo",
    image: "/assets/images/product/24.jpg",
    description: "Doğal ışıkla aydınlatılmış, ferah ve spa hissi veren banyo tasarımı.",
  },
  {
    id: 6,
    title: "Stüdyo Ofis Köşesi",
    image: "/assets/images/product/19.jpg",
    description: "Kompakt alanlarda maksimum verimlilik sağlayan yaratıcı çalışma köşesi.",
  },
];

export default function PortfolioPage() {
  return (
    <div>
      <div className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-area-inner">
                <div className="bottom-title">
                  <h1 className="title">Portfolio</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Area */}
      <div className="rts-portfolio-grid-col-2 rts-section-gap rts_portfolio_animation-wrapper">
        <div className="container">
          <div className="row g-80">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`col-lg-6 col-md-6 col-sm-12 col-12 ${index % 2 !== 0 ? "pl--30 pl_sm--0" : ""}`}
              >
                <div className="portfolio-grid-col-2-single rts-portfolio__item">
                  <a href="/product-details-4" className="thumbnail">
                    <img src={item.image} alt={item.title} />
                  </a>
                  <div className="inner-text">
                    <a href="/portfolio-detail">
                      <h5 className="title">{item.title}</h5>
                    </a>
                    <p className="disc">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
