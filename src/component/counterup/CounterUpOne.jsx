import React from "react";
import Image from "next/image";

function CounterUpOne() {
  return (
    <div>
      {/* rts counter up section start */}
      <div className="rts-counter-area pt--50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="float-right-content">
                <div className="counter-area-main-wrapper-rts">
                  <div className="title-style-left">
                    <div className="pre-title-area">
                      <img src="/assets/images/about/02.png" alt="about" />
                      <span className="pre-title">Dekoda</span>
                    </div>
                    <h2 className="title">
                      İlham veren
                      <br /> tasarımlar
                    </h2>
                  </div>
                  <div className="counter-inner-rts">
                    <div className="counter-wrapper-one">
                      {/* single-counter-wrapper */}
                      <div className="single-counter">
                        <div className="inner">
                          <h2 className="title">
                            <span className="counter animated fadeInDownBig">37</span>
                          </h2>
                          <p>Proje</p>
                        </div>
                      </div>
                      {/* single-counter-wrapper end */}
                      <div className="single-counter">
                        <div className="inner">
                          <h2 className="title">
                            <span className="counter animated fadeInDownBig">100</span>+
                          </h2>
                          <p>Memnun Müşteri</p>
                        </div>
                      </div>
                      <div className="single-counter">
                        <div className="inner">
                          <h2 className="title">
                            <span className="counter animated fadeInDownBig">15</span>+
                          </h2>
                          <p>Tasarım Ödülü</p>
                        </div>
                      </div>
                      <div className="single-counter">
                        <div className="inner">
                          <h2 className="title">
                            <span className="counter animated fadeInDownBig">10</span>+
                          </h2>
                          <p>Yıllık Deneyim</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="last-counter-section">
                    <img src="/assets/images/brand/05.png" alt="brand" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts counter up section end */}
    </div>
  );
}

export default CounterUpOne;
