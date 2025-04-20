import React from "react";

const processSteps = [
  {
    id: 1,
    className: "active",
    title: "Keşif ve Danışmanlık",
    description:
      "İhtiyaçlarınızı anlamak için sizi dinliyor, mekânı yerinde inceliyoruz. Tasarıma ilham verecek detayları birlikte keşfediyoruz.",
  },
  {
    id: 2,  
    className: "two",
    title: "Tasarım ve Konsept Geliştirme",
    description:
      "Yaşam tarzınıza ve zevkinize özel, estetik ve işlevsel bir konsept oluşturuyoruz. Renk, malzeme ve detayları özenle seçiyoruz.",
  },
  {
    id: 3,
    className: "three",
    title: "Uygulama ve Takip",
    description:
      "Tasarımları hayata geçiriyor, süreci titizlikle yönetiyoruz. Her aşamada kalite kontrol ve zaman yönetimi önceliğimiz.",
  },
  {
    id: 4,
    className: "four",
    title: "Teslim ve Memnuniyet",
    description:
      "Projenizi planlanan sürede teslim ediyor, memnuniyetinizi garanti altına alıyoruz. Dekoda ile her detayda fark yaratıyoruz.",
  },
];

function ProcessOne() {
  return (
    <div>
      {/* our woring process area start */}
      <div className="our-working-process rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-process-stock-text">
                <h2 className="stock-text-1 title-large-3" data-aos="move-right" data-aos-delay="100">
                  ÇALIŞMA SÜRECİMİZ
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30 mt_sm--0 separetor-process-top rts-slide-up">
            {processSteps.map((step) => (
              <div key={step.id} className={`col-lg-3 col-md-6 col-sm-6 col-12 pt--50 pt_md--15 pt_sm--10`}>
                {/* single working process start */}
                <div className={`single-working-prcess-one ${step.className}`}>
                  <div className="inner">
                    <span>{step.id.toString().padStart(2, "0")}</span>
                    <h4 className="title">{step.title}</h4>
                    <p className="disc">{step.description}</p>
                  </div>
                </div>
                {/* single working process end */}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* our woring process area end */}
    </div>
  );
}

export default ProcessOne;
