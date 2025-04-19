"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/component/banner/Breadcrumb";
import Posts from "@/data/Posts.json";

export default function BlogDetails() {
  const { slug } = useParams(); // Get the slug from URL parameters
  const blogPost = Posts.find((post) => post.slug === slug);

  if (!blogPost) {
    return <div>Post not found Man!</div>;
  }

  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    comment: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, topic, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [topic]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([{ ...formData }, ...comments]); // Add new comment to the top
    setFormData({ name: "", email: "", topic: "", comment: "" }); // Clear form
  };

  return (
    <div className="">
      <Breadcrumb title="Blog Details" />

      {/* blog details area start */}
      <div className="rts-blog-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              {/* single post */}
              <div className="blog-single-post-listing details mb--0">
                <div className="thumbnail">
                  <img src={`${blogPost.bannerImg}`} alt={blogPost.title} />
                </div>
                <div className="blog-listing-content">
                  <div className="user-info">
                    {/* single info */}
                    <div className="single">
                      <i className="far fa-user-circle" />
                      <span>by David Smith</span>
                    </div>
                    {/* single infoe end */}
                    {/* single info */}
                    <div className="single">
                      <i className="far fa-clock" />
                      <span>2 min Read</span>
                    </div>
                    {/* single infoe end */}
                    {/* single info */}
                    <div className="single">
                      <i className="far fa-tags" />
                      <span>Graphic Design</span>
                    </div>
                    {/* single infoe end */}
                  </div>
                  <h3 className="title animated fadeIn">{blogPost.title}</h3>
                  <p className="disc para-1 mb--15">
                    Küresel ölçekte ucuz yöntemlerle iş birliği içinde öncü kaynaklar üzerine derin düşünelim; zamanında
                    web uyumluluğuna sahip, çok disiplinli ve uyumlu mimarileri başlatalım. Takdire şayan şekilde, öncü
                    büyüme stratejilerini yeniden kullanıma sunalım ve zamanında meta hizmetlerle iletişim kuralım.
                  </p>
                  <p className="disc">
                    Onubia her zaman ilerler, ta ki döngü tamamlanana dek; Fusce, zarif tavırlarla örülmüş yapısıyla
                    uyumu arar. Lacinia'nın ötesinde, dersler bir araya gelirken iç içe geçmiş yapılar bir düzen
                    oluşturur. Her kıvrım, duygusal bir sistemde yeni bir boyuta evrilir. Gravida'nın ritmiyle hareket
                    eden yapılar, sosyalleşmiş formların denge noktalarında yeniden doğar. Ridiculus ile çizilen
                    sınırlar, anlamın sınırlarını zorlar; ve hiçbir şey, kendi içinde oluşan enerjiden daha ikna edici
                    değildir. Montes’in sessizliğinde şekillenen fikirler, çeşitliliği kucaklayan dinamiklerle geleceğe
                    taşınır.
                  </p>
                  {/* quote area start */}
                  <div className="rts-quote-area text-center">
                    <h5 className="title title-g">
                      "Başarılı bir ticari yapı oluşturmanın, yenilikçi tasarımın gücüne, işlevsel alanlara ve
                      sürdürülebilir çözümlere inanmaktan geçtiğine inanıyoruz. Ekibimiz, işinize özel ihtiyaçlara göre
                      şekillenen mükemmeliyeti sunmaya kendini adamıştır."
                    </h5>
                  </div>
                  {/* quote area end */}
                  <p className="disc">
                    Dinamik bir uyum içinde şekillenen yapılar, akıcı geçişler ve güçlü temellerle hayat bulur. Her
                    adım, sadece bir tasarım değil; aynı zamanda uyumun, işlevin ve estetiğin ortak bir bileşimidir.
                    Ortaya çıkan form, toplumsal dokuyu besleyen bir yaşanabilirlik vizyonunu temsil eder. Birlikte
                    büyüyen yapılar, gelişen ihtiyaçlara cevap verirken, yeni nesil alanlarda insan odaklı deneyimleri
                    mümkün kılar. Mimari sadece yapı değil, kültürle harmanlanan bir yaşam formudur.
                  </p>
                  <div className="row g-24">
                    <div className="col-lg-12">
                      <div className="thumbnail details">
                        <img src="/assets/images/blog/11.jpg" alt="finbiz_buseness" />
                      </div>
                    </div>
                  </div>
                  <h4 className="title mt--40 mt_sm--20">Ultimate Business Strategy Solution</h4>
                  <p className="disc mb--25">
                    Güçlü temellere dayanan bir uyum içinde gelişen yapılar, birlikte büyüyen toplulukların simgesidir.
                    Yumuşak geçişlerle tasarlanan alanlar, fonksiyonelliği estetikle buluşturur; her detay, insanın
                    yaşam alanına duyduğu ihtiyacın bir cevabıdır. Geleceğe dönük bakışla şekillenen mimari, sadece
                    barınma değil, aynı zamanda aidiyet ve deneyim vadeder.
                  </p>
                  <p className="disc mt--30">
                    Derinlemesine düşünülmüş yapılar, dengeli geçişlerle hayat bulan alanlar yaratır. Yaşamı destekleyen
                    bu sistemler; uyum, hareket ve insan deneyimi etrafında şekillenir. Her katman, hem estetik hem de
                    işlevsel bir amaca hizmet ederken; sosyal bağları güçlendiren yapılar ortaya çıkar. Yaşam alanı
                    sadece bir mekân değil, insanın kendini bulduğu bir deneyimdir.
                  </p>
                  <div className="row  align-items-center">
                    <div className="col-lg-6 col-md-12">
                      {/* tags details */}
                      <div className="details-tag">
                        <h6>Etiketler:</h6>
                        <button>Hizmetler</button>
                        <button>İş Dünyası</button>
                        <button>Büyüme</button>
                        <button>Finans</button>
                        <button>UI/UX Tasarım</button>
                        <button>Çözüm</button>
                        <button>Hız</button>
                        <button>Strateji</button>
                        <button>Teknoloji</button>
                      </div>
                      {/* tags details End */}
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="details-share">
                        <h6>Paylaş:</h6>
                        <button>
                          <i className="fab fa-facebook-f" />
                        </button>
                        <button>
                          <i className="fab fa-twitter" />
                        </button>
                        <button>
                          <i className="fab fa-instagram" />
                        </button>
                        <button>
                          <i className="fab fa-linkedin-in" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="comment-section">
                    {comments.map((comment, index) => (
                      <div key={index} className="author-area single-comment reveal">
                        <div className="thumbnail details mb_sm--15">
                          <img src="/assets/images/blog/15.jpg" alt="finbiz_business" />
                        </div>
                        <div className="author-details team">
                          <span className="title-g">{comment.topic}</span>
                          <h5 className="title-g">{comment.name}</h5>
                          <p className="disc title-g">{comment.comment}</p>
                        </div>
                      </div>
                    ))}

                    <div className="replay-area-details">
                      <h4 className="title">Leave a Reply</h4>
                      <form onSubmit={handleSubmit}>
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="col-lg-6">
                            <input
                              type="email"
                              name="email"
                              placeholder="Your Email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="col-12">
                            <input
                              type="text"
                              name="topic"
                              placeholder="Select Topic"
                              value={formData.topic}
                              onChange={handleChange}
                            />
                            <textarea
                              name="comment"
                              placeholder="Your Comment"
                              value={formData.comment}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <button type="submit" className="rts-btn btn-primary">
                          Submit Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* single post End*/}
            </div>
            <div className="col-xl-4 col-lg-4 pl--60 padding-left-sidebar pl_md--15 pl_sm--5 mt_sm--50 mt_md--50">
              {/* service left side bar area start */}
              <div className="service-left-sidebar-wrapper">
                <div className="service-left-sidebar-wized mb--50">
                  <div className="search-area">
                    <input type="text" placeholder="Enter Keyword" />
                    <i className="fa-light fa-magnifying-glass" />
                  </div>
                </div>
                {/* service left sidebar single wized */}
                <div className="service-left-sidebar-wized mb--50">
                  <div className="topa-rea">
                    <h4 className="title">Tüm Hizmetler</h4>
                  </div>
                  <div className="body">
                    {/* inglle short service */}
                    <a href="#" className="single-short-service">
                      <span className="number">01.</span>
                      <p className="name">Alan Planlaması</p>
                      <i className="fa-light fa-arrow-right" />
                    </a>
                    {/* inglle short service end */}
                    {/* inglle short service */}
                    <a href="#" className="single-short-service">
                      <span className="number">02.</span>
                      <p className="name">İç Tasarım</p>
                      <i className="fa-light fa-arrow-right" />
                    </a>
                    {/* inglle short service end */}
                    {/* inglle short service */}
                    <a href="#" className="single-short-service">
                      <span className="number">03.</span>
                      <p className="name">Tamamlama Hizmetleri</p>
                      <i className="fa-light fa-arrow-right" />
                    </a>
                    {/* inglle short service end */}
                    {/* inglle short service */}
                    <a href="#" className="single-short-service">
                      <span className="number">04.</span>
                      <p className="name">Şehir Planlaması</p>
                      <i className="fa-light fa-arrow-right" />
                    </a>
                    {/* inglle short service end */}
                    {/* inglle short service */}
                    <a href="#" className="single-short-service">
                      <span className="number">05.</span>
                      <p className="name">Mutfak Sandalye</p>
                      <i className="fa-light fa-arrow-right" />
                    </a>
                    {/* inglle short service end */}
                    {/* inglle short service */}
                    <a href="#" className="single-short-service">
                      <span className="number">06.</span>
                      <p className="name">3D Görselleştirme</p>
                      <i className="fa-light fa-arrow-right" />
                    </a>
                    {/* inglle short service end */}
                  </div>
                </div>
                {/* service left sidebar single wized end */}
                <div className="service-left-sidebar-wized mb--50">
                  <div className="topa-rea">
                    <h4 className="title">Son Yazılar</h4>
                  </div>
                  <div className="wized-body">
                    <div className="recent-post-single">
                      <div className="thumbnail">
                        <a href="#">
                          <img src="/assets/images/blog/19.jpg" alt="Blog_post" />
                        </a>
                      </div>
                      <div className="content-area text-start">
                        <div className="user">
                          <i className="fal fa-clock" />
                          <span>15 Ocak, 2023</span>
                        </div>
                        <a className="post-title" href="#">
                          <h6 className="title"> Alan Planlaması</h6>
                        </a>
                      </div>
                    </div>
                    <div className="recent-post-single">
                      <div className="thumbnail">
                        <a href="#">
                          <img src="/assets/images/blog/20.jpg" alt="Blog_post" />
                        </a>
                      </div>
                      <div className="content-area text-start">
                        <div className="user">
                          <i className="fal fa-clock" />
                          <span>15 Ocak, 2023</span>
                        </div>
                        <a className="post-title" href="#">
                          <h6 className="title">Alan Planlaması</h6>
                        </a>
                      </div>
                    </div>
                    <div className="recent-post-single">
                      <div className="thumbnail">
                        <a href="#">
                          <img src="/assets/images/blog/21.jpg" alt="Blog_post" />
                        </a>
                      </div>
                      <div className="content-area text-start">
                        <div className="user">
                          <i className="fal fa-clock" />
                          <span>15 Ocak, 2023</span>
                        </div>
                        <a className="post-title" href="#">
                          <h6 className="title">Alan Planlaması</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-left-sidebar-wized mb--50">
                  <div className="topa-rea">
                    <h4 className="title">Galeri Yazıları</h4>
                  </div>
                  <div className="wized-body">
                    <div className="gallery-inner">
                      <div className="row-1 single-row">
                        <a href="#">
                          <img src="/assets/images/blog/details/gallery/01.png" alt="Gallery" />
                        </a>
                        <a href="#">
                          <img src="/assets/images/blog/details/gallery/02.png" alt="Gallery" />
                        </a>
                        <a href="#">
                          <img src="/assets/images/blog/details/gallery/03.png" alt="Gallery" />
                        </a>
                      </div>
                      <div className="row-2 single-row">
                        <a href="#">
                          <img src="/assets/images/blog/details/gallery/04.png" alt="Gallery" />
                        </a>
                        <a href="#">
                          <img src="/assets/images/blog/details/gallery/05.png" alt="Gallery" />
                        </a>
                        <a href="#">
                          <img src="/assets/images/blog/details/gallery/06.png" alt="Gallery" />
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
              {/* service left side bar area end */}
            </div>
          </div>
        </div>
      </div>
      {/* blog details area end */}
    </div>
  );
}
