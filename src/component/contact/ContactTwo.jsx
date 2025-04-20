"use client";
import AOS from "aos";
import { useEffect } from "react";

function ContactTwo() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 0,
    });
  }, []);

  return (
    <div>
      {/* iletişim alanı başlangıcı */}
      <div className="rts-contact-area rts-section-gap">
        <div className="container">
          <div className="row">
            {/* Görsel */}
            <div className="col-lg-6">
              <div className="contct-thumbnail-left" data-aos="move-left">
                <img src="assets/images/contact/01.jpg" alt="İletişim" />
              </div>
            </div>

            {/* Form */}
            <div className="col-lg-6 pl--60 pr--100 pr_md--10 pr_sm--10 pl_sm--10 pl_md--10 pt_md--50 pt_sm--50">
              <div className="easy-appoinment-area">
                <div className="title-left-style-seven-wrapper">
                  <span className="pre">Bizimle İletişime Geçin</span>
                  <h2 className="title">Herhangi bir sorunuz mu var?</h2>
                </div>
                <form action="#">
                  <input type="text" placeholder="Adınız" />
                  <input type="text" placeholder="Telefon Numaranız" />
                  <textarea placeholder="Mesajınız" defaultValue={""} />
                  <button className="rts-btn btn-primary">Gönder</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* iletişim alanı bitişi */}
    </div>
  );
}

export default ContactTwo;
