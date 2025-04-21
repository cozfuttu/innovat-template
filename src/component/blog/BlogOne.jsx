"use client";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";

const blogs = [
  {
    title: "Dekorasyonda Son Trendler: 2024'te Evimizi Nasıl Yenileyebiliriz?",
    category: "İç Mekan",
    image: "/assets/images/blog/01.jpg", // Görsel değiştirilmedi
    link: "/blog/1",
  },
  {
    title: "Dekorasyonda Doğal Malzemelerin Yeri ve Önemi",
    category: "Sürdürülebilir",
    image: "/assets/images/blog/02.jpg", // Görsel değiştirilmedi
    link: "/blog/2",
  },
  {
    title: "Minimalist Ev Tasarımları: Şıklığı Basitlikte Bulmak",
    category: "Dekorasyon",
    image: "/assets/images/blog/03.jpg", // Görsel değiştirilmedi
    link: "/blog/3",
  },
];

function BlogOne() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      once: true,
      offset: 0, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      {/* rts blog area start */}
      <div className="rts-blog-area rts-section-gap" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-center">
                <div className="pre-title-area">
                  <img src="/assets/images/about/02.png" alt="about" />
                  <span className="pre-title">Blog</span>
                </div>
                <h2 className="title quote">
                  İç Mekan Tasarımında <br />
                  Son Gelişmeler ve İlham Veren Fikirler
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-24 rts-slide-up mt--30">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12 col-12"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                {/* single blog area start */}
                <div className="signle-blog-style-one">
                  <Link href={blog.link} className="thumbnail">
                    <img src={blog.image} alt="blog" />
                    <span className="tag">{blog.category}</span>
                  </Link>
                  <div className="inner-content">
                    <Link href={blog.link}>
                      <h5 className="title">{blog.title}</h5>
                    </Link>
                    <Link className="btn-blog-readmore" href={blog.link}>
                      {" "}
                      Devamını Oku +
                    </Link>
                  </div>
                </div>
                {/* single blog area end */}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* rts blog area end */}
    </div>
  );
}

export default BlogOne;
