"use client"
import { useState, useRef, useEffect } from 'react';
function BoforeAfterTwo() {
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
        <div>

            {/* rts-after befores are start */}
            <div className="rts-after-before-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
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
                        <div className="col-lg-5 pl--80 col-md-12 pl_md--15 pl_sm--15 mt_md--50 mt_sm--50 rts-slide-up">
                            <div className="after-before-main-wrapper-conetnt">
                                <div className="title-left-style-seven-wrapper">
                                    <span className="pre">Feature</span>
                                    <h2 className="title">Before and After Interior Renovations</h2>
                                </div>
                                <p className="disc">
                                    Welcome to our "Transformations: Before and After Interior
                                    Renovations" section. Explore the remarkable changes.
                                </p>
                                <div className="step-by-step">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={60}
                                        height={61}
                                        viewBox="0 0 60 61"
                                        fill="none"
                                    >
                                        <g clipPath="url(#clip0_452_134)">
                                            <path
                                                d="M54.7266 52.7866C54.5273 52.7866 54.3516 52.6812 54.2461 52.5171L51.8203 48.9546L52.793 48.2866L54.7266 51.1226L58.9336 44.7358L59.918 45.3804L55.2305 52.5171C55.1133 52.6694 54.9258 52.7866 54.7266 52.7866Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M54.7266 55.0132C52.0195 55.0132 49.7812 52.9624 49.4883 50.3257H31.2891C30.9609 50.3257 30.7031 50.0679 30.7031 49.7397V12.2397C30.7031 11.9116 30.9609 11.6538 31.2891 11.6538H54.7266C55.0547 11.6538 55.3125 11.9116 55.3125 12.2397V45.0522C55.3125 45.3804 55.0547 45.6382 54.7266 45.6382C52.4648 45.6382 50.625 47.478 50.625 49.7397C50.625 52.0015 52.4648 53.8413 54.7266 53.8413C56.9883 53.8413 58.8281 52.0015 58.8281 49.7397C58.8281 48.7788 58.4883 47.8413 57.8672 47.103L58.7695 46.353C59.5664 47.3022 60.0117 48.5093 60.0117 49.7515C60 52.646 57.6328 55.0132 54.7266 55.0132ZM31.875 49.1538H49.4883C49.7578 46.7163 51.7031 44.771 54.1406 44.5015V12.8257H31.875V49.1538Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M24.0234 55.0132C21.1172 55.0132 18.75 52.646 18.75 49.7397C18.75 46.8335 21.1172 44.4663 24.0234 44.4663C26.9297 44.4663 29.2969 46.8335 29.2969 49.7397C29.2969 52.646 26.9297 55.0132 24.0234 55.0132ZM24.0234 45.6382C21.7617 45.6382 19.9219 47.478 19.9219 49.7397C19.9219 52.0015 21.7617 53.8413 24.0234 53.8413C26.2852 53.8413 28.125 52.0015 28.125 49.7397C28.125 47.478 26.2852 45.6382 24.0234 45.6382Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M25.3643 47.5601L26.1928 48.3886L22.6799 51.9015L21.8513 51.073L25.3643 47.5601Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M22.6836 47.5615L26.1965 51.0744L25.368 51.9029L21.8551 48.39L22.6836 47.5615Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M9.96094 22.2007H20.5078V23.3726H9.96094V22.2007Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M5.85938 25.1304C4.57031 25.1304 3.51562 24.0757 3.51562 22.7866C3.51562 21.4976 4.57031 20.4429 5.85938 20.4429C7.14844 20.4429 8.20312 21.4976 8.20312 22.7866C8.20312 24.0757 7.14844 25.1304 5.85938 25.1304ZM5.85938 21.6147C5.21484 21.6147 4.6875 22.1421 4.6875 22.7866C4.6875 23.4312 5.21484 23.9585 5.85938 23.9585C6.50391 23.9585 7.03125 23.4312 7.03125 22.7866C7.03125 22.1421 6.50391 21.6147 5.85938 21.6147Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M9.96094 30.4038H20.5078V31.5757H9.96094V30.4038Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M5.85938 33.3335C4.57031 33.3335 3.51562 32.2788 3.51562 30.9897C3.51562 29.7007 4.57031 28.646 5.85938 28.646C7.14844 28.646 8.20312 29.7007 8.20312 30.9897C8.20312 32.2788 7.14844 33.3335 5.85938 33.3335ZM5.85938 29.8179C5.21484 29.8179 4.6875 30.3452 4.6875 30.9897C4.6875 31.6343 5.21484 32.1616 5.85938 32.1616C6.50391 32.1616 7.03125 31.6343 7.03125 30.9897C7.03125 30.3452 6.50391 29.8179 5.85938 29.8179Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M9.96094 38.6069H20.5078V39.7788H9.96094V38.6069Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M5.85938 41.5366C4.57031 41.5366 3.51562 40.4819 3.51562 39.1929C3.51562 37.9038 4.57031 36.8491 5.85938 36.8491C7.14844 36.8491 8.20312 37.9038 8.20312 39.1929C8.20312 40.4819 7.14844 41.5366 5.85938 41.5366ZM5.85938 38.021C5.21484 38.021 4.6875 38.5483 4.6875 39.1929C4.6875 39.8374 5.21484 40.3647 5.85938 40.3647C6.50391 40.3647 7.03125 39.8374 7.03125 39.1929C7.03125 38.5483 6.50391 38.021 5.85938 38.021Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M40.6641 22.2007H51.2109V23.3726H40.6641V22.2007Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M36.5625 25.1304C35.2734 25.1304 34.2188 24.0757 34.2188 22.7866C34.2188 21.4976 35.2734 20.4429 36.5625 20.4429C37.8516 20.4429 38.9062 21.4976 38.9062 22.7866C38.9062 24.0757 37.8516 25.1304 36.5625 25.1304ZM36.5625 21.6147C35.918 21.6147 35.3906 22.1421 35.3906 22.7866C35.3906 23.4312 35.918 23.9585 36.5625 23.9585C37.207 23.9585 37.7344 23.4312 37.7344 22.7866C37.7344 22.1421 37.207 21.6147 36.5625 21.6147Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M40.6641 30.4038H51.2109V31.5757H40.6641V30.4038Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M36.5625 33.3335C35.2734 33.3335 34.2188 32.2788 34.2188 30.9897C34.2188 29.7007 35.2734 28.646 36.5625 28.646C37.8516 28.646 38.9062 29.7007 38.9062 30.9897C38.9062 32.2788 37.8516 33.3335 36.5625 33.3335ZM36.5625 29.8179C35.918 29.8179 35.3906 30.3452 35.3906 30.9897C35.3906 31.6343 35.918 32.1616 36.5625 32.1616C37.207 32.1616 37.7344 31.6343 37.7344 30.9897C37.7344 30.3452 37.207 29.8179 36.5625 29.8179Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M40.6641 38.6069H51.2109V39.7788H40.6641V38.6069Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M36.5625 41.5366C35.2734 41.5366 34.2188 40.4819 34.2188 39.1929C34.2188 37.9038 35.2734 36.8491 36.5625 36.8491C37.8516 36.8491 38.9062 37.9038 38.9062 39.1929C38.9062 40.4819 37.8516 41.5366 36.5625 41.5366ZM36.5625 38.021C35.918 38.021 35.3906 38.5483 35.3906 39.1929C35.3906 39.8374 35.918 40.3647 36.5625 40.3647C37.207 40.3647 37.7344 39.8374 37.7344 39.1929C37.7344 38.5483 37.207 38.021 36.5625 38.021Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M47.4258 8.021C42.3867 4.18896 36.3633 2.16162 30 2.16162C23.6836 2.16162 17.6836 4.16553 12.6562 7.9624L11.9531 7.0249C17.1797 3.07568 23.4258 0.989746 30 0.989746C36.6094 0.989746 42.8789 3.09912 48.1289 7.0835L47.4258 8.021Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M30 60.9897C23.4258 60.9897 17.1797 58.9038 11.9531 54.9546L12.6562 54.0171C17.6836 57.814 23.6836 59.8179 30 59.8179C36.3516 59.8179 42.375 57.7905 47.4258 53.9585L48.1289 54.896C42.8789 58.8804 36.6094 60.9897 30 60.9897Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M7.38281 15.4038H17.2266V16.5757H7.38281V15.4038Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M38.0859 15.4038H47.9297V16.5757H38.0859V15.4038Z"
                                                fill="#30373E"
                                            />
                                            <path
                                                d="M16.9922 50.3257H0.585938C0.257812 50.3257 0 50.0679 0 49.7397V12.2397C0 11.9116 0.257812 11.6538 0.585938 11.6538H24.0234C24.3516 11.6538 24.6094 11.9116 24.6094 12.2397V45.0522H23.4375V12.8257H1.17188V49.1538H16.9922V50.3257Z"
                                                fill="#30373E"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_452_134">
                                                <rect
                                                    width={60}
                                                    height={60}
                                                    fill="white"
                                                    transform="translate(0 0.989746)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div className="right">
                                        <h6 className="title">Side-by-Side Comparison</h6>
                                        <p className="disc">
                                            Present the before and after images side by side, allowing
                                            viewers to easily compare.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="/before-after"
                                    className="rts-read-more-circle-btn mt--40"
                                >
                                    <i className="fa-solid fa-arrow-up-right" />
                                    <p>Learn More</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts-after befores are end */}


        </div>
    )
}

export default BoforeAfterTwo