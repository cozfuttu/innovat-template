"use client";

import { useRef } from "react";

const VideoSection = () => {
    const videoRef = useRef(null);

    const handleToggleClass = () => {
        if (videoRef.current) {
            videoRef.current.classList.toggle("show");
            if (videoRef.current.classList.contains("show")) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <div className="rts-video-area bg-video-five bg_image">
            {/* Video element */}
            <video muted loop id="myVideo" ref={videoRef}>
                <source src="assets/images/banner/33.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="content">
                <button id="myBtn" onClick={handleToggleClass}>
                </button>
            </div>
        </div>
    );
};

export default VideoSection;
