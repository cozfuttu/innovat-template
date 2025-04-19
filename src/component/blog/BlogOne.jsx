"use client";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";
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
                  Dijital Dönüşümde <br />
                  Son Gelişmeler ve Haberler
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-24 rts-slide-up mt--30">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="100">
              {/* single blog area start */}
              <div className="signle-blog-style-one">
                <Link href="/blog/1" className="thumbnail">
                  <img src="/assets/images/blog/01.jpg" alt="blog" />
                  <span className="tag">Dijital Dönüşüm</span>
                </Link>
                <div className="inner-content">
                  <Link href="/blog/1">
                    <h5 className="title">İşletmeler İçin Dijital Dönüşümün Önemi ve Adımları</h5>
                  </Link>
                  <Link className="btn-blog-readmore" href="/blog/1">
                    {" "}
                    Devamını Oku +
                  </Link>
                </div>
              </div>
              {/* single blog area end */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="300">
              {/* single blog area start */}
              <div className="signle-blog-style-one">
                <Link href="/blog/2" className="thumbnail">
                  <img src="/assets/images/blog/02.jpg" alt="blog" />
                  <span className="tag">Yazılım</span>
                </Link>
                <div className="inner-content">
                  <Link href="/blog/2">
                    <h5 className="title">Yapay Zeka ve Makine Öğrenmesi: İş Dünyasında Yeni Trendler</h5>
                  </Link>
                  <Link className="btn-blog-readmore" href="/blog/2">
                    {" "}
                    Devamını Oku +
                  </Link>
                </div>
              </div>
              {/* single blog area end */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="500">
              {/* single blog area start */}
              <div className="signle-blog-style-one">
                <Link href="/blog/3" className="thumbnail">
                  <img src="/assets/images/blog/03.jpg" alt="blog" />
                  <span className="tag">Pazarlama</span>
                </Link>
                <div className="inner-content">
                  <Link href="/blog/3">
                    <h5 className="title">Dijital Pazarlama Stratejileri: 2024'te Öne Çıkan Trendler</h5>
                  </Link>
                  <Link className="btn-blog-readmore" href="/blog/3">
                    {" "}
                    Devamını Oku +
                  </Link>
                </div>
              </div>
              {/* single blog area end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogOne;
