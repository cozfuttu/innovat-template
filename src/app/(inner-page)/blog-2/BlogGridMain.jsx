"use client"

const BlogGridMain = (props) => {
    const { Slug, blogImage, blogTitle } = props;
    return (
        <div>
            <a href={`/blog/${Slug}`} className="thumbnail">
                <img src={`assets/images/blog/${blogImage}`} alt="blog" />
                <span className="tag">Architecture</span>
            </a>
            <div className="inner-content">
                <a href={`/blog/${Slug}`}>
                    <h5 className="title">
                        {blogTitle ? blogTitle : 'How to growing your business'}
                    </h5>
                </a>
                <a className="btn-blog-readmore" href={`/blog/${Slug}`}>
                    {" "}
                    Read More +
                </a>
            </div>
        </div>
    )
}

export default BlogGridMain