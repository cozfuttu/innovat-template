"use client"
import { useEffect } from 'react';
function ProjectFour() {

    return (
        <div>

            {/* project area start */}
            <div className="our-project-area-start rts-section-gapBottom bg-3" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="title-large-3 text-center wow move-right">
                                Our Latest <span>Project</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row mt--150 mb--50 rts-slide-up">
                        <div className="col-lg-12">
                            {/* project-area main -wrapper */}
                            <div className="project-area-main-wrapper-four">
                                {/* single projects */}
                                <div className="project-single-four mb--110">
                                    <a href="/product-details-1">
                                        <span className="number">01</span>
                                        <h2 className="title">Urban Oasis</h2>
                                        <img src="assets/images/product/14.jpg" alt="product" />
                                    </a>
                                </div>
                                {/* single projects end */}
                                {/* single projects */}
                                <div className="project-single-four mb--110">
                                    <a href="/product-details-1">
                                        <span className="number">02</span>
                                        <h2 className="title">Vintage </h2>
                                        <img src="assets/images/product/48.jpg" alt="product" />
                                    </a>
                                </div>
                                {/* single projects end */}
                                {/* single projects */}
                                <div className="project-single-four mb--110">
                                    <a href="/product-details-1">
                                        <span className="number">03</span>
                                        <h2 className="title">Luxe Living</h2>
                                        <img src="assets/images/product/49.jpg" alt="product" />
                                    </a>
                                </div>
                                {/* single projects end */}
                                {/* single projects */}
                                <div className="project-single-four mb_sm--110">
                                    <a href="/product-details-1">
                                        <span className="number">04</span>
                                        <h2 className="title">Minimalist</h2>
                                        <img src="assets/images/product/50.jpg" alt="product" />
                                    </a>
                                </div>
                                {/* single projects end */}
                                {/* single projects */}
                                <div className="project-single-four">
                                    <a href="/product-details-1">
                                        <span className="number">05</span>
                                        <h2 className="title">Innovation</h2>
                                        <img src="assets/images/product/51.jpg" alt="product" />
                                    </a>
                                </div>
                                {/* single projects end */}
                                {/* single projects */}
                                <div className="project-single-four">
                                    <a href="/product-details-1">
                                        <span className="number">06</span>
                                        <h2 className="title">Urban Oasis</h2>
                                        <img src="assets/images/product/52.jpg" alt="product" />
                                    </a>
                                </div>
                                {/* single projects end */}
                            </div>
                            {/* project-area main -wrapper end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* project area end */}


        </div>
    )
}

export default ProjectFour