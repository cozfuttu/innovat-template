import Link from 'next/link';

function BlogThree() {
    return (
        <div>

            {/* rts- blog area start */}
            <div className="rts-blog-area rts-section-gapBottom bg-3" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-three-left border-bottom-blog">
                                <span>Blog</span>
                                <h3 className="title-sm">
                                    Latest News and Updates <br />
                                    in Interior Design
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--40 rts-slide-up">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            {/* single blog area start */}
                            <div className="blog-style-three">
                                <Link href="/blog/11" className="thumbnail">
                                    <img data-aos="move-right" data-aos-delay="100" src="assets/images/blog/04.jpg" alt="blog" />
                                </Link>
                                <div className="body-information">
                                    <div className="blog-top">
                                        <span className="tag">Architecture </span>
                                        <span>08 Jun, 2023</span>
                                    </div>
                                    <Link href="/blog/11">
                                        <h2 className="title">
                                            The Retro Furniture Set That’s Like But Better
                                        </h2>
                                    </Link>
                                    <p className="disc">
                                        we are passionate about creating your exceptional interior the
                                        way you live.
                                    </p>
                                    <Link href="/blog/11" className="btn-read-more-blog">
                                        Read More <i className="fa-light fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            {/* single blog area end */}
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            {/* single blog area start */}
                            <div className="blog-style-three">
                                <Link href="/blog/12" className="thumbnail">
                                    <img data-aos="move-right" data-aos-delay="100" src="assets/images/blog/05.jpg" alt="blog" />
                                </Link>
                                <div className="body-information">
                                    <div className="blog-top">
                                        <span className="tag">Architecture </span>
                                        <span>08 Jun, 2023</span>
                                    </div>
                                    <Link href="/blog/12">
                                        <h2 className="title">
                                            How Much Does Interior Designer Cost in 2023?
                                        </h2>
                                    </Link>
                                    <p className="disc">
                                        we are passionate about creating your exceptional interior the
                                        way you live.
                                    </p>
                                    <Link href="/blog/12" className="btn-read-more-blog">
                                        Read More <i className="fa-light fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            {/* single blog area end */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogThree