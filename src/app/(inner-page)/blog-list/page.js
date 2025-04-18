"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import FooterInner from '@/component/footer/FooterInner';
import Posts from '@/data/Posts.json';
import BlogListMain from './BlogListMain';

export default function Home() {
    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Blog List" activeLink="Blog List" />


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
                                )
                            }).slice(6, 9)}
                            
                        </div>
                        <div className="col-lg-4 padding-left-sidebar mt_md--50 mt_sm--50">
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
                                        <h4 className="title">All Services</h4>
                                    </div>
                                    <div className="body">
                                        {/* inglle short service */}
                                        <a href="#" className="single-short-service">
                                            <span className="number">01.</span>
                                            <p className="name">Space Planning</p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                        {/* inglle short service */}
                                        <a href="#" className="single-short-service">
                                            <span className="number">02.</span>
                                            <p className="name">Interior Design</p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                        {/* inglle short service */}
                                        <a href="#" className="single-short-service">
                                            <span className="number">03.</span>
                                            <p className="name">Remodeling Services</p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                        {/* inglle short service */}
                                        <a href="#" className="single-short-service">
                                            <span className="number">04.</span>
                                            <p className="name">Urban Planning</p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                        {/* inglle short service */}
                                        <a href="#" className="single-short-service">
                                            <span className="number">05.</span>
                                            <p className="name">Kitchen Cabinet</p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                        {/* inglle short service */}
                                        <a href="#" className="single-short-service">
                                            <span className="number">06.</span>
                                            <p className="name">3d Visualization </p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                    </div>
                                </div>
                                {/* service left sidebar single wized end */}
                                <div className="service-left-sidebar-wized mb--50">
                                    <div className="topa-rea">
                                        <h4 className="title">Recent Posts</h4>
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
                                                    <span>15 Jan, 2023</span>
                                                </div>
                                                <a className="post-title" href="#">
                                                    <h6 className="title">
                                                        We would love to share a similar experience
                                                    </h6>
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
                                                    <span>15 Jan, 2023</span>
                                                </div>
                                                <a className="post-title" href="#">
                                                    <h6 className="title">
                                                        We would love to share a similar experience
                                                    </h6>
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
                                                    <span>15 Jan, 2023</span>
                                                </div>
                                                <a className="post-title" href="#">
                                                    <h6 className="title">
                                                        We would love to share a similar experience
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-left-sidebar-wized mb--50">
                                    <div className="topa-rea">
                                        <h4 className="title">Gallery Posts</h4>
                                    </div>
                                    <div className="wized-body">
                                        <div className="gallery-inner">
                                            <div className="row-1 single-row">
                                                <a href="#">
                                                    <img
                                                        src="assets/images/blog/details/gallery/01.png"
                                                        alt="Gallery"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        src="assets/images/blog/details/gallery/02.png"
                                                        alt="Gallery"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        src="assets/images/blog/details/gallery/03.png"
                                                        alt="Gallery"
                                                    />
                                                </a>
                                            </div>
                                            <div className="row-2 single-row">
                                                <a href="#">
                                                    <img
                                                        src="assets/images/blog/details/gallery/04.png"
                                                        alt="Gallery"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        src="assets/images/blog/details/gallery/05.png"
                                                        alt="Gallery"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        src="assets/images/blog/details/gallery/06.png"
                                                        alt="Gallery"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-left-sidebar-wized mb--50">
                                    <div className="topa-rea">
                                        <h4 className="title">Popular Tags</h4>
                                    </div>
                                    <div className="wized-body">
                                        <div className="tags-wrapper">
                                            <a href="#">Services</a>
                                            <a href="#">Business</a>
                                            <a href="#">Growth</a>
                                            <a href="#">Finance</a>
                                            <a href="#">UI/UX Design</a>
                                            <a href="#">Solution</a>
                                            <a href="#">Speed</a>
                                            <a href="#">Strategy</a>
                                            <a href="#">Technology</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* service left side bar area end */}
                        </div>
                    </div>
                </div>
            </div>


            <FooterInner />
            <BackToTop />
        </div>
    );
}
