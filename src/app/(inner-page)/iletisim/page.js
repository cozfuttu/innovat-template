"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Gönderiliyor...");

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        {
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
        },
        "your_public_key"
      )
      .then(() => {
        setStatus("Mesajınız başarıyla gönderildi!");
        setFormData({ name: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Mesaj gönderilirken hata oluştu:", error);
        setStatus("Mesaj gönderilemedi.");
      });
  };

  return (
    <div className="">
      <div className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-area-inner">
                <div className="bottom-title">
                  <h1 className="title">İletişim</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-info-area-start rts-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top">
                <h2 className="title">Bize Ulaşın</h2>
              </div>
            </div>
          </div>
          <div className="row mt--0 g-5">
            <div className="col-lg-4 col-md-6">
              <div className="left-contact">
                <p className="top mb--30">Cano Digital Teknoloji</p>
                <p className="disc mb--20">
                  Dijital dönüşüm ve teknoloji alanında uzmanlaşmış profesyonel bir ekibiz. İşletmenizin dijitalleşme
                  sürecinde size en iyi çözümleri sunuyoruz.
                </p>
                <a href="#">Telefon: +90 (212) 123 45 67</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pl--50 pl_md--15 pl_sm--15">
              <div className="contact-info-mid">
                <p className="top-contact mb--20">İletişim Bilgileri</p>
                <div className="single-information mt--30">
                  <span>Adres:</span>
                  <p className="address" style={{ textDecoration: "underline" }}>
                    Maslak, Büyükdere Cad. No:255 <br />
                    Sarıyer/İstanbul
                  </p>
                </div>
                <div className="single-information">
                  <span>Telefon:</span>
                  <a href="Tel:123-456-7890">+90 (212) 123 45 67</a>
                </div>
                <div className="single-information">
                  <span>E-posta:</span>
                  <a href="mailto:info@canodigital.com">info@canodigital.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <form action="#" className="contact-form-conatct-page" onSubmit={handleSubmit}>
                <p className="top-contact mb--20">İletişim Formu</p>
                <input
                  type="text"
                  placeholder="Adınız"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Telefon Numaranız"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <textarea placeholder="Mesajınız" name="message" value={formData.message} onChange={handleChange} />
                <button className="rts-btn btn-primary mt--30" type="submit">
                  Gönder
                </button>
                <p>{status}</p>
              </form>
            </div>
          </div>
        </div>
        <div className="container mt--120">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.9999999999995!2d29.021999999999996!3d41.123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac790b17ba89d%3A0x1c3a8d6b0b1b1b1b!2sMaslak%2C%20B%C3%BCy%C3%BCkdere%20Cad.%20No%3A255%2C%2034373%20Sarıyer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1641234567890!5m2!1str!2str"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
