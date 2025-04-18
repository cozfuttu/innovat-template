"use client"
import Link from 'next/link';

const BlogThreeMain = (props) => {
    const { Slug, blogImage, blogTitle } = props;
    return (
        <div>
            <a href={`/blog/${Slug}`} className="thumbnail">
            <img src={`assets/images/blog/${blogImage}`} alt="blog" />
          </a>
          <div className="body-information">
            <div className="blog-top">
              <span className="tag">Architecture </span>
              <span>08 Jun, 2023</span>
            </div>
            <a href={`/blog/${Slug}`}>
              <h2 className="title">
              {blogTitle ? blogTitle : 'How to growing your business'}
              </h2>
            </a>
            <p className="disc">
              we are passionate about creating your exceptional interior the way
              you live.
            </p>
            <a href={`/blog/${Slug}`} className="btn-read-more-blog">
              Read More <i className="fa-light fa-arrow-right" />
            </a>
          </div>
        </div>
    )
}

export default BlogThreeMain