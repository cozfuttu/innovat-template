"use client"
import Link from 'next/link';
function BlogFour() {
    return (
        <div>
            <>
                {/* rts blog area start */}
                <div className="rts-blog-area rts-parallex-top bg-white-para rts_portfolio_animation-wrapper-2 ptb_sm--80">
                    <div className="container border-top-in-container rts-section-gap ptb_sm--60">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="project-full-top-wrapper">
                                    {/* title-left */}
                                    <div className="title-area-style-six-left">
                                        <span className="pre">Blog</span>
                                        <h2 className="title">Latest News</h2>
                                    </div>
                                    {/* title mid text */}
                                    <p className="disc">
                                        Welcome to our architecture blog! Here, we dive into the world of
                                        architecture, design, and construction.
                                    </p>
                                    <Link href="/blog/15" className="rts-read-more-circle-btn">
                                        <i className="fa-solid fa-arrow-up-right" />
                                        <p>Read All</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--30 g-5">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* signle blog area start */}
                                <div className="rts-blog-area-start-six rts-portfolio__item-2">
                                    <Link href="/blog/15" className="thumbnail">
                                        <img src="assets/images/blog/06.jpg" alt="blog" />
                                    </Link>
                                    <div className="inner-content">
                                        <div className="top">
                                            <span>Interior</span>
                                            <span>08 Jun, 2023</span>
                                        </div>
                                        <Link href="/blog/15">
                                            <h3 className="title">
                                                How Much Does Interior Designer Cost in 2023?
                                            </h3>
                                        </Link>
                                        <Link href="/blog/15" className="rts-read-more">
                                            Read More
                                            <i className="fa-light fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                                {/* signle blog area end */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* signle blog area start */}
                                <div className="rts-blog-area-start-six rts-portfolio__item-2">
                                    <Link href="/blog/15" className="thumbnail">
                                        <img src="assets/images/blog/06.jpg" alt="blog" />
                                    </Link>
                                    <div className="inner-content">
                                        <div className="top">
                                            <span>Interior</span>
                                            <span>08 Jun, 2023</span>
                                        </div>
                                        <Link href="/blog/15">
                                            <h3 className="title">
                                                How Much Does Interior Designer Cost in 2023?
                                            </h3>
                                        </Link>
                                        <Link href="/blog/15" className="rts-read-more">
                                            Read More
                                            <i className="fa-light fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                                {/* signle blog area end */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* signle blog area start */}
                                <div className="rts-blog-area-start-six rts-portfolio__item-2">
                                    <Link href="/blog/15" className="thumbnail">
                                        <img src="assets/images/blog/06.jpg" alt="blog" />
                                    </Link>
                                    <div className="inner-content">
                                        <div className="top">
                                            <span>Interior</span>
                                            <span>08 Jun, 2023</span>
                                        </div>
                                        <Link href="/blog/15">
                                            <h3 className="title">
                                                How Much Does Interior Designer Cost in 2023?
                                            </h3>
                                        </Link>
                                        <Link href="/blog/15" className="rts-read-more">
                                            Read More
                                            <i className="fa-light fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                                {/* signle blog area end */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts blog area end */}
            </>

        </div>
    )
}

export default BlogFour