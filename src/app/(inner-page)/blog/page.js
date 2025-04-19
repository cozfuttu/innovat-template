"use client";
import Posts from "@/data/Posts.json";
import BlogListMain from "./BlogListMain";

export default function Home() {
  return (
    <div className="">
      <div className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-area-inner">
                <div className="bottom-title">
                  <h1 className="title">Blog</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-list-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {Posts.map((blog, index) => {
                return (
                  <div key={index} className="single-blog-list-style-one mb--60">
                    {
                      <BlogListMain
                        blogCategory={blog.category}
                        Slug={blog.slug}
                        blogImage={blog.image}
                        authorImg={blog.authorImg}
                        blogTitle={blog.title}
                        blogAuthor={blog.author}
                        blogPublishedDate={blog.publishedDate}
                      />
                    }
                  </div>
                );
              }).slice(0, 3)}
            </div>
            <div className="col-lg-4 padding-left-sidebar mt_md--50 mt_sm--50">
              <div className="service-left-sidebar-wrapper">
                <div className="service-left-sidebar-wized mb--50">
                  <div className="search-area">
                    <input type="text" placeholder="Anahtar kelime ara..." />
                    <i className="fa-light fa-magnifying-glass" />
                  </div>
                </div>

                <div className="service-left-sidebar-wized mb--50">
                  <div className="topa-rea">
                    <h4 className="title">Hizmetlerimiz</h4>
                  </div>
                  <div className="body">
                    <a href="#" className="single-short-service">
                      <span className="number">01.</span>
                      <p className="name">Dijital Dönüşüm</p>
                      <i className="fa-light fa-arrow-right" />
                    </a>
                    <a href="#" className="single-short-service">
                      <span className="number">02.</span>
                      <p className="name">Yazılım Çözümleri</p>
                      <i className="fa-light fa-arrow-right" />
                    </a>
                    <a href="#" className="single-short-service">
                      <span className="number">03.</span>
                      <p className="name">Dijital Pazarlama</p>
                      <i className="fa-light fa-arrow-right" />
                    </a>
                    <a href="#" className="single-short-service">
                      <span className="number">04.</span>
                      <p className="name">UI/UX Tasarım</p>
                      <i className="fa-light fa-arrow-right" />
                    </a>
                    <a href="#" className="single-short-service">
                      <span className="number">05.</span>
                      <p className="name">SEO Optimizasyonu</p>
                      <i className="fa-light fa-arrow-right" />
                    </a>
                    <a href="#" className="single-short-service">
                      <span className="number">06.</span>
                      <p className="name">Sosyal Medya Yönetimi</p>
                      <i className="fa-light fa-arrow-right" />
                    </a>
                  </div>
                </div>

                <div className="service-left-sidebar-wized mb--50">
                  <div className="topa-rea">
                    <h4 className="title">Son Yazılar</h4>
                  </div>
                  <div className="wized-body">
                    <div className="recent-post-single">
                      <div className="thumbnail">
                        <a href="#">
                          <img src="assets/images/blog/19.jpg" alt="Blog_post" />
                        </a>
                      </div>
                      <div className="content-area text-start">
                        <div className="user">
                          <i className="fal fa-clock" />
                          <span>15 Oca, 2023</span>
                        </div>
                        <a className="post-title" href="#">
                          <h6 className="title">Dijital Dönüşümde Başarı Hikayeleri</h6>
                        </a>
                      </div>
                    </div>
                    <div className="recent-post-single">
                      <div className="thumbnail">
                        <a href="#">
                          <img src="assets/images/blog/20.jpg" alt="Blog_post" />
                        </a>
                      </div>
                      <div className="content-area text-start">
                        <div className="user">
                          <i className="fal fa-clock" />
                          <span>15 Oca, 2023</span>
                        </div>
                        <a className="post-title" href="#">
                          <h6 className="title">Yapay Zeka ve İş Dünyası</h6>
                        </a>
                      </div>
                    </div>
                    <div className="recent-post-single">
                      <div className="thumbnail">
                        <a href="#">
                          <img src="assets/images/blog/21.jpg" alt="Blog_post" />
                        </a>
                      </div>
                      <div className="content-area text-start">
                        <div className="user">
                          <i className="fal fa-clock" />
                          <span>15 Oca, 2023</span>
                        </div>
                        <a className="post-title" href="#">
                          <h6 className="title">Dijital Pazarlama Stratejileri</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-left-sidebar-wized mb--50">
                  <div className="topa-rea">
                    <h4 className="title">Galeri</h4>
                  </div>
                  <div className="wized-body">
                    <div className="gallery-inner">
                      <div className="row-1 single-row">
                        <a href="#">
                          <img src="assets/images/blog/details/gallery/01.png" alt="Galeri" />
                        </a>
                        <a href="#">
                          <img src="assets/images/blog/details/gallery/02.png" alt="Galeri" />
                        </a>
                        <a href="#">
                          <img src="assets/images/blog/details/gallery/03.png" alt="Galeri" />
                        </a>
                      </div>
                      <div className="row-2 single-row">
                        <a href="#">
                          <img src="assets/images/blog/details/gallery/04.png" alt="Galeri" />
                        </a>
                        <a href="#">
                          <img src="assets/images/blog/details/gallery/05.png" alt="Galeri" />
                        </a>
                        <a href="#">
                          <img src="assets/images/blog/details/gallery/06.png" alt="Galeri" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-left-sidebar-wized mb--50">
                  <div className="topa-rea">
                    <h4 className="title">Popüler Etiketler</h4>
                  </div>
                  <div className="wized-body">
                    <div className="tags-wrapper">
                      <a href="#">Hizmetler</a>
                      <a href="#">İş Dünyası</a>
                      <a href="#">Büyüme</a>
                      <a href="#">Finans</a>
                      <a href="#">UI/UX Tasarım</a>
                      <a href="#">Çözüm</a>
                      <a href="#">Hız</a>
                      <a href="#">Strateji</a>
                      <a href="#">Teknoloji</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
