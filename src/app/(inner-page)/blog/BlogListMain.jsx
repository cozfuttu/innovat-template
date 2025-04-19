"use client";
import Link from "next/link";

const BlogGridMain = (props) => {
  const { Slug, blogImage, blogTitle } = props;
  return (
    <div>
      <Link href={`/blog/${Slug}`} className="thumbnail">
        <img src={`assets/images/blog/${blogImage}`} alt="blog-area" />
      </Link>
      <div className="blog-body">
        <div className="top">
          <div className="single">
            <i className="fa-light fa-circle-user" />
            <span>by Zeynep Güzel</span>
          </div>
          <div className="single">
            <i className="fa-light fa-clock" />
            <span>15 Ocak, 2023</span>
          </div>
          <div className="single">
            <i className="far fa-tags" />
            <span>Şehir Planlaması</span>
          </div>
        </div>
        <div className="inner">
          <Link href={`/blog/${Slug}`}>
            <h4 className="title">{blogTitle ? blogTitle : "Şehir Planlaması"}</h4>
          </Link>
          <p className="disc">
            Avrupa Komisyonu tarafından benimsenen ve OECD, Dünya Bankası ve UN-Habitat gibi birçok büyük uluslararası
            kuruluş tarafından da paylaşılan şehir tanımına göre, dünya nüfusunun yaklaşık %75’i kentleşmiş bölgelerde
            yaşamaktadır...
          </p>
          <Link href={`/blog/${Slug}`} className="rts-btn btn-primary">
            Daha Fazla
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogGridMain;
