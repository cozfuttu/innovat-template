"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
function VideoOne() {
  const [isOpen, setIsOpen] = useState(false);
  const videoLink = "https://www.youtube.com/watch?v=tVbtTL_sJHI"; // Define the video link here
  const [videoId, setVideoId] = useState(null);
  useEffect(() => {
    // Extract the video ID from the video link
    if (videoLink) {
      const urlParts = videoLink.split("v="); // Assuming YouTube URL with 'v=' param
      const id = urlParts.length > 1 ? urlParts[1].split("&")[0] : null;
      setVideoId(id);
    }
  }, [videoLink]);
  // Console log to debug
  console.log("Video ID:", videoId);
  return (
    <div>
      <>
        {/* cta-main wrapper start */}
        <div className="cta-area-two bg_image position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="vedio-icone">
                  <Link href={"#"} className="vedio-icone">
                    <span id="play-video" className="video-play-button" onClick={() => setIsOpen(true)}>
                      {/* <img
                                                    src="assets/images/about/shape/play-btn.png"
                                                    alt="Play btn"
                                                /> */}
                      <span />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cta-main wrapper end */}
        {videoId && (
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId={videoId} // Pass the dynamic video ID here
            onClose={() => setIsOpen(false)}
            youtube={{
              autoplay: 1,
            }}
          />
        )}
      </>
    </div>
  );
}

export default VideoOne;
