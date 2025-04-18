import React from 'react'
import Image from 'next/image';
function CounterUpOne() {
    return (
        <div>
            {/* rts counter up section start */}
            <div className="rts-counter-area pt--50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="float-right-content">
                                <div className="counter-area-main-wrapper-rts">
                                    <div className="title-style-left">
                                        <div className="pre-title-area">
                                            <img src="/assets/images/about/02.png" alt="about" />
                                            <span className="pre-title">Our Achievement</span>
                                        </div>
                                        <h2 className="title">
                                            We take pride in successfully <br /> completing numerous
                                            interior <br /> design projects
                                        </h2>
                                    </div>
                                    <div className="counter-inner-rts">
                                        <div className="counter-wrapper-one">
                                            {/* single-counter-wrapper */}
                                            <div className="single-counter">
                                                <div className="inner">
                                                    <h2 className="title">
                                                        <span className="counter animated fadeInDownBig">
                                                            37
                                                        </span>
                                                        k
                                                    </h2>
                                                    <p>Project Done</p>
                                                </div>
                                            </div>
                                            {/* single-counter-wrapper end */}
                                            {/* single-counter-wrapper */}
                                            <div className="single-counter">
                                                <div className="inner">
                                                    <h2 className="title">
                                                        <span className="counter animated fadeInDownBig">
                                                            200
                                                        </span>
                                                        +
                                                    </h2>
                                                    <p>Happy Clients</p>
                                                </div>
                                            </div>
                                            {/* single-counter-wrapper end */}
                                            {/* single-counter-wrapper */}
                                            <div className="single-counter">
                                                <div className="inner">
                                                    <h2 className="title">
                                                        <span className="counter animated fadeInDownBig">
                                                            25
                                                        </span>
                                                        +
                                                    </h2>
                                                    <p>Award Winning</p>
                                                </div>
                                            </div>
                                            {/* single-counter-wrapper end */}
                                            {/* single-counter-wrapper */}
                                            <div className="single-counter">
                                                <div className="inner">
                                                    <h2 className="title">
                                                        <span className="counter animated fadeInDownBig">
                                                            16
                                                        </span>
                                                        +
                                                    </h2>
                                                    <p>Year Experience</p>
                                                </div>
                                            </div>
                                            {/* single-counter-wrapper end */}
                                        </div>
                                    </div>
                                    <div className="last-counter-section">
                                        <img src="/assets/images/brand/05.png" alt="brand" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts counter up section end */}
        </div>
    )
}

export default CounterUpOne