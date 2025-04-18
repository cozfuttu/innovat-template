"use client"
import { useState, useRef, useEffect } from 'react';
import HeaderFive from "@/component/header/HeaderFive";


import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import CtaFive from '@/component/cta/CtaFive';

import FooterInner from '@/component/footer/FooterInner';

export default function Home() {

    const containerRef = useRef(null);
    const dividerRef = useRef(null);
    const resizeRef = useRef(null);
    const [sliderWidth, setSliderWidth] = useState("50%");

    // Handle drag and touch events for slider
    const handleDrag = (e) => {
        e.preventDefault();
        let moveX = e.pageX || e.touches[0].pageX;
        let container = containerRef.current;
        let containerOffset = container.offsetLeft;
        let containerWidth = container.offsetWidth;

        let leftValue = moveX - containerOffset;
        if (leftValue < 0) leftValue = 0;
        if (leftValue > containerWidth) leftValue = containerWidth;

        let widthValue = (leftValue / containerWidth) * 100 + "%";
        setSliderWidth(widthValue);
    };

    const handleDragEnd = () => {
        window.removeEventListener("mousemove", handleDrag);
        window.removeEventListener("touchmove", handleDrag);
    };

    const handleDragStart = (e) => {
        e.preventDefault();
        window.addEventListener("mousemove", handleDrag);
        window.addEventListener("mouseup", handleDragEnd);
        window.addEventListener("touchmove", handleDrag);
        window.addEventListener("touchend", handleDragEnd);
    };

    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="After Before" activeLink="After Before" />

            <div className="rts-after-before-area-start rts-section-gap">
                <div className="container-full">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="after-before-main-wrapper-one">
                                <div className="inner">
                                    <div className="comparison-slider-wrapper" ref={containerRef}>
                                        <div className="comparison-slider">
                                            <div className="before-image">
                                                <div className="overlay">Before Organized.</div>
                                                <img
                                                    src="assets/images/before-after/03.jpg"
                                                    alt="Before Image" // Image fits its container's width
                                                />
                                            </div>
                                            <div
                                                className="resize"
                                                style={{ width: sliderWidth }}
                                                ref={resizeRef}
                                            >
                                                <div className="overlay">After Organized.</div>
                                                <img
                                                    src="assets/images/before-after/04.jpg"
                                                    alt="After Image"

                                                />
                                            </div>
                                            <div
                                                className="divider"
                                                ref={dividerRef}
                                                onMouseDown={handleDragStart}
                                                onTouchStart={handleDragStart}
                                                style={{ left: sliderWidth }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="befores-after-small rts-section-gapBottom">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="after-before-main-wrapper-one">
                                <div className="inner">
                                    <div className="comparison-slider-wrapper" ref={containerRef}>
                                        <div className="comparison-slider">
                                            <div className="before-image">
                                                <div className="overlay">Before Organized.</div>
                                                <img
                                                    src="assets/images/before-after/01.png"
                                                    alt="Before Image" // Image fits its container's width
                                                />
                                            </div>
                                            <div
                                                className="resize"
                                                style={{ width: sliderWidth }}
                                                ref={resizeRef}
                                            >
                                                <div className="overlay">After Organized.</div>
                                                <img
                                                    src="assets/images/before-after/02.png"
                                                    alt="After Image"

                                                />
                                            </div>
                                            <div
                                                className="divider"
                                                ref={dividerRef}
                                                onMouseDown={handleDragStart}
                                                onTouchStart={handleDragStart}
                                                style={{ left: sliderWidth }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="after-before-main-wrapper-one">
                                <div className="inner">
                                    <div className="comparison-slider-wrapper" ref={containerRef}>
                                        <div className="comparison-slider">
                                            <div className="before-image">
                                                <div className="overlay">Before Organized.</div>
                                                <img
                                                    src="assets/images/before-after/01.png"
                                                    alt="Before Image" // Image fits its container's width
                                                />
                                            </div>
                                            <div
                                                className="resize"
                                                style={{ width: sliderWidth }}
                                                ref={resizeRef}
                                            >
                                                <div className="overlay">After Organized.</div>
                                                <img
                                                    src="assets/images/before-after/02.png"
                                                    alt="After Image"

                                                />
                                            </div>
                                            <div
                                                className="divider"
                                                ref={dividerRef}
                                                onMouseDown={handleDragStart}
                                                onTouchStart={handleDragStart}
                                                style={{ left: sliderWidth }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="cta-inner-area bg_image ptb--120">
                <div className="container-full">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-center">
                                <div className="pre-title-area">
                                    <img src="assets/images/about/02.png" alt="about" />
                                    <span className="pre-title">Work with us</span>
                                </div>
                                <h2 className="title">
                                    Have a Project in mind? <br />
                                    Do not hesitate to say hello.
                                </h2>
                                <a href="#" className="rts-btn  btn-border radious-3 mt--50">
                                    Let’s Build
                                    <i className="fa-regular fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterInner />
            <BackToTop />
        </div>
    );
}
