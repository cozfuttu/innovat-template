"use client"
import { useState, useRef, useEffect } from 'react';
const AfterBeforeArea = () => {
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
        <div className="rts-after-before-area-start">
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
    );
};

export default AfterBeforeArea;
