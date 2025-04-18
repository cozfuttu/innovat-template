import React from 'react'

function VideoTwo() {
    return (
        <div>
            <>
                {/* rts video area start */}
                <div className="rts-video-area rts-section-gap2 bg_video-three bg_image">
                    <div className="vedio-icone">
                        <a
                            className="play-video popup-youtube video-play-button"
                            href="https://www.youtube.com/watch?v=MnrJzXM7a6o"
                        >
                            <span />
                        </a>
                        <div className="video-overlay">
                            <a className="video-overlay-close">×</a>
                        </div>
                    </div>
                    <div className="bottom-counter-area">
                        {/* ingle counter */}
                        <div className="counter-main-wrapper-two counter_animation">
                            {/* ingle counter up */}
                            <div className="counter-single counter__anim">
                                <div className="inner">
                                    <h2 className="title">
                                        <span className="counter">36</span>k
                                    </h2>
                                    <p>Award Winning</p>
                                </div>
                            </div>
                            {/* ingle counter up end */}
                            {/* ingle counter up */}
                            <div className="counter-single counter__anim">
                                <div className="inner">
                                    <h2 className="title">
                                        <span className="counter">25</span>+
                                    </h2>
                                    <p>Project Done</p>
                                </div>
                            </div>
                            {/* ingle counter up end */}
                            {/* ingle counter up */}
                            <div className="counter-single counter__anim">
                                <div className="inner">
                                    <h2 className="title">
                                        <span className="counter">120</span>+
                                    </h2>
                                    <p>Award Winning</p>
                                </div>
                            </div>
                            {/* ingle counter up end */}
                            {/* ingle counter up */}
                            <div className="counter-single counter__anim">
                                <div className="inner">
                                    <h2 className="title">
                                        <span className="counter">16</span>k
                                    </h2>
                                    <p>Year Experience</p>
                                </div>
                            </div>
                            {/* ingle counter up end */}
                        </div>
                        {/* ingle counter end */}
                    </div>
                </div>
                {/* rts video area end */}
            </>

        </div>
    )
}

export default VideoTwo