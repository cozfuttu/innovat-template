"use client"
import Link from 'next/link';

const BlogThreeMain = (props) => {
    const { Slug, blogImage, blogTitle } = props;
    return (
        <div>
            <Link href={`/blog/${Slug}`} className="thumbnail">
                <img src={`assets/images/blog/${blogImage}`} alt="blog" />
            </Link>
            <div className="inner-content">
                <div className="top">
                <span>Interior</span>
                <span>08 Jun, 2023</span>
                </div>
                <Link href={`/blog/${Slug}`}>
                <h3 className="title animated fadeIn">
                {blogTitle ? blogTitle : 'How to growing your business'}
                </h3>
                </Link>
                <Link href={`/blog/${Slug}`} className="rts-read-more">
                Read More
                <i className="fa-light fa-arrow-right" />
                </Link>
            </div>
        </div>
    )
}

export default BlogThreeMain