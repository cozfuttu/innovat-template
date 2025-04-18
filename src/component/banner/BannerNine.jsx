'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
function BannerNine() {
    const [isOpen, setIsOpen] = useState(false);
    const videoLink = 'https://www.youtube.com/watch?v=vZbx44S9mAI'; // Define the video link here
    const [videoId, setVideoId] = useState(null);
    useEffect(() => {
        // Extract the video ID from the video link
        if (videoLink) {
            const urlParts = videoLink.split('v='); // Assuming YouTube URL with 'v=' param
            const id = urlParts.length > 1 ? urlParts[1].split('&')[0] : null;
            setVideoId(id);
        }
    }, [videoLink]);
    // Console log to debug
    console.log('Video ID:', videoId);
    return (
        <div>
            {/* banner area start */}
            <div className="banner-area-eight">
                <div className="banckground-image-eight"></div>
            </div>
            {/* banner area end */}

            {/* content-area start */}
            <div className="rts-right-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-laft-compleate-project" data-aos="move-right" data-aos-delay="100">
                                <img src="assets/images/banner/06.png" alt="banner" />
                            </div>
                            <div className="thumbnail-banner-08" data-aos="move-left" data-aos-delay="100">
                                <img src="assets/images/banner/05.png" alt="banner" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="rts-about-right-area-eight rts-section-separator-right">
                                <div className="title-style-left mb--50">
                                    <div className="pre-title-area" data-aos="fade-up" data-aos-delay="100">
                                        <img src="assets/images/about/02.png" alt="about" />
                                        <span className="pre-title">Welcome</span>
                                    </div>
                                    <h1 className="title-main rts_hero__title" data-aos="fade-up" data-aos-delay="300">
                                        I’m Jon William <br /> Professional Interior <br /> Designer
                                        &amp; <span>Architecture</span>{" "}
                                    </h1>
                                </div>
                                <div className="vide-area-eight" data-aos="fade-up" data-aos-delay="500">
                                    <div className="vedio-icone">
                                        <a className="video-play-button play-video" onClick={() => setIsOpen(true)} href="#">
                                            <span />
                                        </a>
                                    </div>
                                </div>
                                <p className="disc" data-aos="fade-up" data-aos-delay="800">
                                    An interior designer is a professional who plans, coordinates, and
                                    executes the design of residential or commercial spaces. Their
                                    goal is to create aesthetically pleasing.
                                </p>
                            </div>
                            {/* aboout */}
                            <div id="about" className="rts-about-right-area-eight bottom-1 rts-section-separator-right" data-aos="fade-left" data-aos-delay="100">
                                <div className="title-style-left mb--30">
                                    <div className="pre-title-area">
                                        <img src="assets/images/about/02.png" alt="about" />
                                        <span className="pre-title">About Me</span>
                                    </div>
                                    <h3 className="title">
                                        Aesthetic Alchemy: Jon William <br /> Approach
                                    </h3>
                                </div>
                                <p className="disc">
                                    Hello! I'm Jon William, an interior designer passionate about
                                    transforming spaces into personalized havens. With a 5 year in
                                    Interior Design from Coloba, I've had the privilege of working on
                                    diverse projects, from cozy residential homes to vibrant
                                    commercial spaces.
                                </p>
                                <div className="button-social-area-8 mt--30">
                                    <a href="/contact" className="rts-btn btn-border radious">
                                        Hire Me
                                    </a>
                                    <div className="social-follow-8">
                                        <span>Follow:</span>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Partner */}
                            <div className="rts-about-right-area-eight bottom-1 rts-section-separator-right" data-aos="fade-left" data-aos-delay="100">
                                <div className="title-style-left mb--30">
                                    <div className="pre-title-area">
                                        <img src="assets/images/about/02.png" alt="about" />
                                        <span className="pre-title">Partner</span>
                                    </div>
                                    <h3 className="title">
                                        Collaboration is at the core of <br /> our design philosophy
                                    </h3>
                                </div>
                                <div className="partner-area-8">
                                    <div className="single-partner">
                                        <p>2023 — Harmony Heights — Interior Design</p>
                                    </div>
                                    <div className="single-partner">
                                        <p>2022 — Elysium Heights — Architecture</p>
                                    </div>
                                    <div className="single-partner">
                                        <p>2019 — Lumina City — Residence</p>
                                    </div>
                                    <div className="single-partner">
                                        <p>2018 — London City Library — City Mark</p>
                                    </div>
                                </div>
                            </div>
                            {/* Partner end */}
                            {/* Service */}
                            <div id="service" className="rts-about-right-area-eight bottom-1 rts-section-separator-right" data-aos="fade-left" data-aos-delay="100">
                                <div className="title-style-left mb--30">
                                    <div className="pre-title-area">
                                        <img src="assets/images/about/02.png" alt="about" />
                                        <span className="pre-title">Services</span>
                                    </div>
                                    <h3 className="title">
                                        Architects of Ambiance: Crafting <br /> Extraordinary
                                        Environments
                                    </h3>
                                </div>
                                <div className="service-radious-8">
                                    <div className="single-service">
                                        <a href="/service-details">Structural Design</a>
                                    </div>
                                    <div className="single-service">
                                        <a href="/service-details">Residential Space</a>
                                    </div>
                                    <div className="single-service">
                                        <a href="/service-details">City Planning</a>
                                    </div>
                                    <div className="single-service">
                                        <a href="/service-details">Residential Space</a>
                                    </div>
                                    <div className="single-service">
                                        <a href="/service-details">Project Analysis</a>
                                    </div>
                                    <div className="single-service">
                                        <a href="/service-details">Renovation</a>
                                    </div>
                                    <div className="single-service">
                                        <a href="/service-details">Landscape Architecture</a>
                                    </div>
                                    <div className="single-service">
                                        <a href="/service-details">Interior Design</a>
                                    </div>
                                </div>
                            </div>
                            {/* Partner end */}
                            {/* Portfolio start */}
                            <div className="rts-about-right-area-eight bottom-1 rts-section-separator-right" data-aos="fade-left" data-aos-delay="100">
                                <div className="title-style-left mb--30">
                                    <div className="pre-title-area">
                                        <img src="assets/images/about/02.png" alt="about" />
                                        <span className="pre-title">Projects</span>
                                    </div>
                                    <h3 className="title">Featured Projects</h3>
                                </div>
                                <div className="row g-5">
                                    <div className="col-lg-12">
                                        <div className="single-project-style-8">
                                            <a href="/product-details-1" className="thumbnail">
                                                <img src="assets/images/product/57.jpg" alt="product" />
                                                <div className="tags">
                                                    <span>Urban City</span>
                                                    <span>Interior</span>
                                                </div>
                                            </a>
                                            <div className="title-area">
                                                <a href="/product-details-1">
                                                    <h4 className="title">
                                                        Urban Interior Design &amp; Architecture{" "}
                                                        <i className="fa-regular fa-chevron-right" />
                                                    </h4>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="single-project-style-8">
                                            <a href="/product-details-1" className="thumbnail">
                                                <img src="assets/images/product/58.jpg" alt="product" />
                                                <div className="tags">
                                                    <span>Urban City</span>
                                                    <span>Interior</span>
                                                </div>
                                            </a>
                                            <div className="title-area">
                                                <a href="/product-details-1">
                                                    <h4 className="title">
                                                        Bath Interior Design
                                                        <i className="fa-regular fa-chevron-right" />
                                                    </h4>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="single-project-style-8">
                                            <a href="/product-details-1" className="thumbnail">
                                                <img src="assets/images/product/58.jpg" alt="product" />
                                                <div className="tags">
                                                    <span>Urban City</span>
                                                    <span>Interior</span>
                                                </div>
                                            </a>
                                            <div className="title-area">
                                                <a href="/product-details-1">
                                                    <h4 className="title">
                                                        Bath Interior Design{" "}
                                                        <i className="fa-regular fa-chevron-right" />
                                                    </h4>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio end */}
                            {/* My Clients Feedback start */}
                            <div id="portfolio" className="rts-about-right-area-eight bottom-1 rts-section-separator-right" data-aos="fade-left" data-aos-delay="100">
                                <div className="title-style-left mb--30">
                                    <div className="pre-title-area">
                                        <img src="assets/images/about/02.png" alt="about" />
                                        <span className="pre-title">Projects</span>
                                    </div>
                                    <h3 className="title">My Clients Feedback</h3>
                                </div>
                                <div className="testimonials-style-8">
                                    <div className="client-author">
                                        <img
                                            src="assets/images/testimonials/09.png"
                                            alt="testimonials"
                                        />
                                        <div className="info">
                                            <h5 className="title">Michael H.</h5>
                                            <span className="desig">CEO of InTech</span>
                                        </div>
                                    </div>
                                    <p className="disc">
                                        Jon William is a true professional with a keen eye for design.
                                        They took the time to understand our needs and preferences and
                                        the final design our expectations.
                                    </p>
                                    <span className="stars">4.5 Stars</span>
                                </div>
                                <div className="rts-brand-area">
                                    <div className="brand-main-wrapper-8">
                                        <img src="assets/images/brand/01.png" alt="brand" />
                                        <img src="assets/images/brand/02.png" alt="brand" />
                                        <img src="assets/images/brand/03.png" alt="brand" />
                                        <img src="assets/images/brand/04.png" alt="brand" />
                                    </div>
                                </div>
                            </div>
                            {/* My Clients Feedback end */}
                            {/* My Achievement start */}
                            <div className="rts-about-right-area-eight bottom-1 rts-section-separator-right" data-aos="fade-left" data-aos-delay="100">
                                <div className="title-style-left mb--30">
                                    <div className="pre-title-area">
                                        <img src="assets/images/about/02.png" alt="about" />
                                        <span className="pre-title">Award</span>
                                    </div>
                                    <h3 className="title">My Achievement</h3>
                                </div>
                                <div className="rts-brand-area">
                                    <div className="brand-main-wrapper-8">
                                        <img src="assets/images/brand/09.png" alt="brand" />
                                        <img src="assets/images/brand/06.png" alt="brand" />
                                        <img src="assets/images/brand/07.png" alt="brand" />
                                        <img src="assets/images/brand/08.png" alt="brand" />
                                    </div>
                                </div>
                            </div>
                            {/* My Achievement end */}
                            {/* Contact Me start */}
                            <div className="rts-about-right-area-eight bottom-1 rts-section-separator-right" data-aos="fade-left" data-aos-delay="100" id="get-contact">
                                <div className="title-style-left mb--30">
                                    <div className="pre-title-area">
                                        <img src="assets/images/about/02.png" alt="about" />
                                        <span className="pre-title">Get In Touch</span>
                                    </div>
                                    <h3 className="title">Contact Me</h3>
                                </div>
                                <form action="#" className="form-8">
                                    <input type="text" placeholder="Your Name" required="" />
                                    <input type="text" placeholder="Your Number" />
                                    <input type="text" placeholder="Service Type" />
                                    <input type="text" placeholder="Your Location" />
                                    <button className="rts-btn btn-border">Send Now</button>
                                </form>
                            </div>
                            {/* Contact Me end */}
                            <div className="copyright-8">
                                <p>Copyright 2024. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {videoId && (
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={videoId} // Pass the dynamic video ID here
                    onClose={() => setIsOpen(false)}
                />
            )}
        </div>
    )
}

export default BannerNine