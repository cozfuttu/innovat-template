"use client";
import Posts from "@/data/Posts.json";
import BlogListMain from "./BlogListMain";

const services = [
  { id: 1, title: "İç Mekan Tasarımı" },
  { id: 2, title: "İç Mekan Çözümleri" },
  { id: 3, title: "Yaşam Alanları" },
  { id: 4, title: "Fonksiyonellik" },
  { id: 5, title: "Proje Yönetimi" },
  { id: 6, title: "Sürdürülebilirlik" },
];

const recentPosts = [
  {
    id: 1,
    title: "İç Mekanda Dijitalleşme: Tasarımda Teknolojinin Yeri",
    image: "assets/images/blog/19.jpg",
    date: "15 Oca, 2023",
  },
  {
    id: 2,
    title: "Modern Yaşam Alanlarında Estetik ve Konfor",
    image: "assets/images/blog/20.jpg",
    date: "15 Oca, 2023",
  },
  {
    id: 3,
    title: "Dekoda Tasarım Süreci: İlham ve Yaratıcılık",
    image: "assets/images/blog/21.jpg",
    date: "15 Oca, 2023",
  },
];

const galleryImages = [
  "assets/images/blog/details/gallery/01.png", // Dekoda iç mekan projelerinden
  "assets/images/blog/details/gallery/02.png",
  "assets/images/blog/details/gallery/03.png",
  "assets/images/blog/details/gallery/04.png",
  "assets/images/blog/details/gallery/05.png",
  "assets/images/blog/details/gallery/06.png",
];

const tags = [
  "İç Mekan",
  "Estetik",
  "Fonksiyonellik",
  "Sürdürülebilir Tasarım",
  "Dekorasyon",
  "Yaşam Alanı",
  "Modern Tasarım",
  "İnovasyon",
];

export default function Home() {
  return (
    <div>
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
              {Posts.map((blog, index) => (
                <div key={index} className="single-blog-list-style-one mb--60">
                  <BlogListMain
                    blogCategory={blog.category}
                    Slug={blog.slug}
                    blogImage={blog.image}
                    authorImg={blog.authorImg}
                    blogTitle={blog.title}
                    blogAuthor={blog.author}
                    blogPublishedDate={blog.publishedDate}
                  />
                </div>
              )).slice(0, 3)}
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
                    {services.map((service) => (
                      <a href="#" key={service.id} className="single-short-service">
                        <span className="number">{String(service.id).padStart(2, "0")}.</span>
                        <p className="name">{service.title}</p>
                        <i className="fa-light fa-arrow-right" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="service-left-sidebar-wized mb--50">
                  <div className="topa-rea">
                    <h4 className="title">Son Yazılar</h4>
                  </div>
                  <div className="wized-body">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="recent-post-single">
                        <div className="thumbnail">
                          <a href="#">
                            <img src={post.image} alt="Blog_post" />
                          </a>
                        </div>
                        <div className="content-area text-start">
                          <div className="user">
                            <i className="fal fa-clock" />
                            <span>{post.date}</span>
                          </div>
                          <a className="post-title" href="#">
                            <h6 className="title">{post.title}</h6>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-left-sidebar-wized mb--50">
                  <div className="topa-rea">
                    <h4 className="title">Galeri</h4>
                  </div>
                  <div className="wized-body">
                    <div className="gallery-inner">
                      <div className="row-1 single-row">
                        {galleryImages.slice(0, 3).map((image, index) => (
                          <a href="#" key={index}>
                            <img src={image} alt="Galeri" />
                          </a>
                        ))}
                      </div>
                      <div className="row-2 single-row">
                        {galleryImages.slice(3).map((image, index) => (
                          <a href="#" key={index}>
                            <img src={image} alt="Galeri" />
                          </a>
                        ))}
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
                      {tags.map((tag, index) => (
                        <a href="#" key={index}>
                          {tag}
                        </a>
                      ))}
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
