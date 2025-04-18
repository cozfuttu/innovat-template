"use client"
import React, { useState } from "react";

const ServiceArea = () => {
    // State to track the active service list
    const [activeIndex, setActiveIndex] = useState(0);

    // Array for services
    const services = [
        {
            id: "one",
            number: "01",
            title: "Architectural Design",
            description: "Space planning is a fundamental aspect of interior design.",
            image: "assets/images/about/10.jpg",
        },
        {
            id: "two",
            number: "02",
            title: "Home Renovation",
            description: "Space planning is a fundamental aspect of interior design.",
            image: "assets/images/about/15.jpg",
        },
        {
            id: "three",
            number: "03",
            title: "Space Planning",
            description: "Space planning is a fundamental aspect of interior design.",
            image: "assets/images/about/16.jpg",
        },
        {
            id: "four",
            number: "04",
            title: "Contractors & Builders",
            description: "Space planning is a fundamental aspect of interior design.",
            image: "assets/images/about/17.jpg",
        },
    ];

    // Handle mouse enter to update the activeIndex
    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="rts-service-area rts-section-gapBottom">
            <div className="container rts-slide-up">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="project-full-top-wrapper">
                            {/* Title-left */}
                            <div className="title-area-style-six-left">
                                <span className="pre">Feature Services</span>
                                <h2 className="title">Our Services</h2>
                            </div>
                            {/* Title mid text */}
                            <p className="disc">
                                In our interior design projects, we aim to create environments
                                that inspire, uplift, &amp; enhance the lives of those who
                                inhabit.
                            </p>
                            <a
                                href="service-1.html"
                                className="rts-read-more-circle-btn under-line"
                            >
                                <i className="fa-solid fa-arrow-up-right" />
                                <p>View All Services</p>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="row mt--90 align-items-center">

                    <div className="col-xl-5 col-lg-12 col-md-12">
                        <div className="thumbnail-serice-6-left">
                            <div className="image-hover-bg">
                                {services.map((service, index) => (
                                    <div
                                        key={service.id}
                                        className={`rts-img-hover ${service.id} ${activeIndex === index ? "active" : ""
                                            }`}
                                    >
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-7 col-lg-12 col-md-12 mt_md--50 mt_sm--50">
                        <div className="service-list-one-wrapper">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`signle-service-list ${service.id} ${activeIndex === index ? "active" : ""
                                        }`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                >
                                    <div className="left-one">
                                        <span>{service.number}</span>
                                        <a href="/service-details">
                                            <h5 className="title">{service.title}</h5>
                                        </a>
                                    </div>
                                    <div className="center-area">
                                        <p className="disc">{service.description}</p>
                                    </div>
                                    <a href="/service-details" className="rts-read-more-circle-btn">
                                        <i className="fa-solid fa-arrow-up-right" />
                                        <p>View Details</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceArea;
