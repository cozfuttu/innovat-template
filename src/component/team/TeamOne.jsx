"use client";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";

const teamMembers = [
  {
    name: "Ahmet Yılmaz",
    role: "CEO",
    image: "/assets/images/team/01.jpg",
  },
  {
    name: "Mehmet Demir",
    role: "Proje Yöneticisi",
    image: "/assets/images/team/02.jpg",
  },
  {
    name: "Ayşe Kaya",
    role: "Yazılım Geliştirici",
    image: "/assets/images/team/03.jpg",
  },
  {
    name: "Murat Şahin",
    role: "Pazarlama Uzmanı",
    image: "/assets/images/team/04.jpg",
  },
];

function TeamOne() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 0 });
  }, []);

  return (
    <div className="team-area-start rts-section-gap">
      <div className="container">
        <div className="title-style-center">
          <div className="pre-title-area">
            <img src="/assets/images/about/02.png" alt="about" />
            <span className="pre-title">Ekibimiz</span>
          </div>
          <h2 className="title quote">
            Yetenekli Ekibimiz <br /> Yaratıcı Çözümler Sunuyor
          </h2>
        </div>

        <div className="row mt--30 g-24 rts-slide-up">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="col-lg-3 col-md-6 col-sm-6 col-12"
              data-aos="fade-up"
              data-aos-delay={100 + index * 200}
            >
              <div className="team-area-start-one">
                <Link href="/ekip" className="thumbnail">
                  <img src={member.image} alt={member.name} />
                </Link>
                <div className="team-content">
                  <div className="name-area">
                    <Link href="/ekip">
                      <h6 className="name">{member.name}</h6>
                    </Link>
                    <span className="desig pl--0 fs-4">{member.role}</span>
                  </div>
                  <div className="social-team-one">
                    <ul>
                      {["facebook-f", "twitter", "youtube", "linkedin-in"].map((icon) => (
                        <li key={icon}>
                          <Link href="#">
                            <i className={`fab fa-${icon}`} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamOne;
