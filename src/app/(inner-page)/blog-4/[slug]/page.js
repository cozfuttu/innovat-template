"use client"
import { useState } from 'react';
import { useParams } from 'next/navigation';
import HeaderFive from "@/component/header/HeaderFive";


import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import Posts from '@/data/Posts.json';

import FooterInner from '@/component/footer/FooterInner';

export default function BlogDetails() {

    const { slug } = useParams(); // Get the slug from URL parameters
    const blogPost = Posts.find(post => post.slug === slug);

    if (!blogPost) {
        return <div>Post not found Man!</div>;
    }


    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: '',
        comment: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, topic, value, } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            [topic]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setComments([{ ...formData }, ...comments]); // Add new comment to the top
        setFormData({ name: '', email: '', topic: '', comment: '' }); // Clear form
    };

    return (
        <div className="">

            <HeaderFive />
            <Breadcrumb title="Blog Details" activeLink="Blog Details" />


            {/* blog details area start */}
            <div className="rts-blog-details-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                            {/* single post */}
                            <div className="blog-single-post-listing details mb--0">
                                <div className="thumbnail">
                                    <img src={`${blogPost.bannerImg}`}
                                        alt={blogPost.title} />
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
                                    <h3 className="title animated fadeIn">
                                        {blogPost.title}
                                    </h3>
                                    <p className="disc para-1 mb--15">
                                        Collaboratively pontificate bleeding edge resources with
                                        inexpensive methodologies globally initiate multidisciplinary
                                        compatible architectures pidiously repurpose leading edge growth
                                        strategies with just in time web readiness communicate timely
                                        meta services
                                    </p>
                                    <p className="disc">
                                        Onubia semper vel donec torquent fusce mauris felis aptent
                                        lacinia nisl, lectus himenaeos euismod molestie iaculis interdum
                                        in laoreet condimentum dictum, quisque quam risus sollicitudin
                                        gravida ut odio per a et. Gravida maecenas lobortis suscipit mus
                                        sociosqu convallis, mollis vestibulum donec aliquam risus sapien
                                        ridiculus, nulla sollicitudin eget in venenatis. Tortor montes
                                        platea iaculis posuere per mauris, eros porta blandit curabitur
                                        ullamcorper varius
                                    </p>
                                    {/* quote area start */}
                                    <div className="rts-quote-area text-center">
                                        <h5 className="title title-g">
                                            “To create a successful commercial building, we believe in the
                                            power of the innovative design, functional spaces, and
                                            sustainable solutions. Our team is dedicated to delivering
                                            excellence, tailored to meet your specific business”
                                        </h5>
                                    </div>
                                    {/* quote area end */}
                                    <p className="disc">
                                        Ultrices iaculis commodo parturient euismod pulvinar donec cum
                                        eget a, accumsan viverra cras praesent cubilia dignissim ad
                                        rhoncus. Gravida maecenas lobortis suscipit mus sociosqu
                                        convallis, mollis vestibulum donec aliquam risus sapien
                                        ridiculus, nulla sollicitudin eget in venenatis. Tortor montes
                                        platea iaculis posuere per mauris, eros porta blandit curabitur
                                        ullamcorper varius, nostra ante risus egestas suscipit. Quisque
                                        interdum nec parturient facilisis nunc ac quam, ad est cubilia
                                        mauris himenaeos nascetur vestibulum.
                                    </p>
                                    <div className="row g-24">
                                        <div className="col-lg-12">
                                            <div className="thumbnail details">
                                                <img
                                                    src="/assets/images/blog/11.jpg"
                                                    alt="finbiz_buseness"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="title mt--40 mt_sm--20">
                                        Ultimate Business Strategy Solution
                                    </h4>
                                    <p className="disc mb--25">
                                        Gravida maecenas lobortis suscipit mus sociosqu convallis,
                                        mollis vestibulum donec aliquam risus sapien ridiculus, nulla
                                        sollicitudin eget in venenatis. Tortor montes platea iaculis
                                        posuere per mauris, eros porta blandit curabitur ullamcorper
                                        varius nostra ante risus egestas.
                                    </p>
                                    <p className="disc mt--30">
                                        Cubilia hendrerit luctus sem aptent curae gravida maecenas
                                        eleifend nunc nec vitae morbi sodales fusce tristique aenean
                                        habitasse mattis sociis feugiat conubia mus auctor praesent urna
                                        tincidunt taciti dui lobortis nullam. Mattis placerat feugiat
                                        ridiculus sed a per curae fermentum aenean facilisi, vitae urna
                                        imperdiet ac mauris non inceptos luctus hac odio.
                                    </p>
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            {/* tags details */}
                                            <div className="details-tag">
                                                <h6>Tags:</h6>
                                                <button>Services</button>
                                                <button>Business</button>
                                                <button>Growth</button>
                                            </div>
                                            {/* tags details End */}
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="details-share">
                                                <h6>Share:</h6>
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
                                                    <img src="/assets/images/blog/19.jpg" alt="Blog_post" />
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
                                                    <img src="/assets/images/blog/20.jpg" alt="Blog_post" />
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
                                                    <img src="/assets/images/blog/21.jpg" alt="Blog_post" />
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
                                                        src="/assets/images/blog/details/gallery/01.png"
                                                        alt="Gallery"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        src="/assets/images/blog/details/gallery/02.png"
                                                        alt="Gallery"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        src="/assets/images/blog/details/gallery/03.png"
                                                        alt="Gallery"
                                                    />
                                                </a>
                                            </div>
                                            <div className="row-2 single-row">
                                                <a href="#">
                                                    <img
                                                        src="/assets/images/blog/details/gallery/04.png"
                                                        alt="Gallery"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        src="/assets/images/blog/details/gallery/05.png"
                                                        alt="Gallery"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        src="/assets/images/blog/details/gallery/06.png"
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
            {/* blog details area end */}



            <FooterInner />



            <BackToTop />
        </div>
    );
}
