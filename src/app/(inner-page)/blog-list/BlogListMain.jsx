"use client"
import Link from 'next/link';

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
                        <span>by David Smith</span>
                    </div>
                    <div className="single">
                        <i className="fa-light fa-clock" />
                        <span>15 Jan, 2023</span>
                    </div>
                    <div className="single">
                        <i className="far fa-tags" />
                        <span>Business Solution</span>
                    </div>
                </div>
                <div className="inner">
                    <Link href={`/blog/${Slug}`}>
                        <h4 className="title">
                            {blogTitle ? blogTitle : 'How to growing your business'}
                        </h4>
                    </Link>
                    <p className="disc">
                        according to a newly adopted definition of cities proposed by
                        the European Commission and now shared by a number of major
                        international organizations such as the OECD, the World Bank and
                        UN-Habitat, an estimated 75% of the world's population live in
                        urbanized areas...
                    </p>
                    <Link href={`/blog/${Slug}`} className="rts-btn btn-primary">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogGridMain