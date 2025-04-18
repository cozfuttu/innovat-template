'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';
function BannerFour() {
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

            {/* rts banner area start */}
            <div className="rts-banner-area rts-section-gap bg_banner-4 bg_image" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-content-wrapper-4">
                                <span className="pre">Best Interior</span>
                                <h1 className="title rts_hero__title">
                                    Kitchen <br />{" "}
                                    <span className="left-gap">
                                        De <span>sign</span>{" "}
                                    </span>
                                </h1>
                                <p className="disc">
                                    we are passionate about creating exceptional interior spaces that
                                    elevate the way you live, work, and experience a team of talented
                                    designers and a commitment excellence we have established
                                    ourselves as a leading.
                                </p>
                                <a
                                    href="/portfolio-grid-1"
                                    className="rts-btn btn-border radious"
                                >
                                    Recent Project
                                    <i className="fa-thin fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video-button-area">
                    <div className="vedio-icone" onClick={() => setIsOpen(true)}>
                        <a className="play-video popup-youtube video-play-button">
                            <span />
                            <img src="assets/images/banner/25.png" alt="banner_video-icon" />
                        </a>
                    </div>
                </div>
                <div className="right-image-bottom">
                    <img
                        className="move-left wow"
                        src="assets/images/banner/16.jpg"
                        alt=""
                    />
                </div>
                <div className="left-image-center">
                    <img
                        className="move-left wow"
                        src="assets/images/banner/17.jpg"
                        alt=""
                    />
                </div>
            </div>
            {/* rts banner area end */}

            {/* about area */}
            <div className="rts-about-area-three rts-section-gap" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* about left area start home three */}
                            <div className="about-left-three-start">
                                <div className="title-style-three-left">
                                    <span>About US</span>
                                    <h2 className="title">
                                        we are passionate <br />
                                        <span>interior</span> spaces
                                    </h2>
                                </div>
                                <p className="disc">
                                    we are passionate about creating exceptional interior spaces that
                                    elevate the way you live, work, and experience your surroundings.
                                    With a team of talented designers and a commitment to excellence,
                                    we have established ourselves as a leading provider of interior
                                    design services.
                                </p>
                                <a href="/about" className="rts-btn btn-border radious-3">
                                    About Us
                                    <i className="fa-thin fa-arrow-right" />
                                </a>
                            </div>
                            {/* about left area start home three end */}
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50">
                            {/* about style six */}
                            <div className="about-style-three-right">
                                <img src="assets/images/about/06.png" alt="about" />
                                <p className="disc">
                                    <span>Professional Work</span> Experience
                                </p>
                                <div className="progress-wrapper-main">
                                    <div
                                        className="single-progress-area-h"
                                        data-sal-delay={150}
                                        data-sal="slide-up"
                                        data-sal-duration={800}
                                    >
                                        <div className="progress-top">
                                            <p className="name">Interior Design</p>
                                            <span className="parcent">65%</span>
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar wow fadeInLeft bg--primary"
                                                role="progressbar"
                                                style={{ width: "65%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            ></div>
                                        </div>
                                    </div>
                                    <div
                                        className="single-progress-area-h"
                                        data-sal-delay={150}
                                        data-sal="slide-up"
                                        data-sal-duration={800}
                                    >
                                        <div className="progress-top">
                                            <p className="name">Renovation</p>
                                            <span className="parcent">85%</span>
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar wow fadeInLeft bg--primary"
                                                role="progressbar"
                                                style={{ width: "85%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* about style six end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* about area end */}

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

export default BannerFour