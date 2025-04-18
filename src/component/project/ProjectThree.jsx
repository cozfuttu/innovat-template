"use client"
import { useState } from 'react';
import Image from 'next/image';

const ProjectShowcase = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const projects = [
        {
            title: "Urban Oasis",
            imgSrc: "/assets/images/product/06.jpg", // Update your image paths
            href: "/product-details-1",
        },
        {
            title: "Luxe Living",
            imgSrc: "/assets/images/product/07.jpg",
            href: "/product-details-1",
        },
        {
            title: "Minimalist Haven",
            imgSrc: "/assets/images/product/46.jpg",
            href: "/product-details-1",
        },
        {
            title: "Vintage Revival",
            imgSrc: "/assets/images/product/47.jpg",
            href: "/product-details-1",
        },
    ];

    return (
        <div className={`our-project-area-start rts-section-gap2Bottom bg-3`}>
            <div className="container-200">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="title-large-3 text-center end">
                            Our Latest <span>Project</span>
                        </h2>
                    </div>
                </div>
                <div className="row mt--80">
                    <div className="col-lg-12">
                        <div className="showcase-images-area-main-wrapper">
                            {/* Button Area */}
                            <div className="hover-btn-area">
                                <ul>
                                    {projects.map((project, index) => (
                                        <li
                                            key={index}
                                            className={`single-btn-bg ${index === activeIndex ? "active" : ""}`}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                        >
                                            <a href={project.href}>{project.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Image Hover Area */}
                            <div className="img-hover-area">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className={`rts-img-hover ${index === activeIndex ? "active" : ""}`}
                                    >
                                        <Image
                                            src={project.imgSrc}
                                            alt={project.title}
                                            width={800}
                                            height={600} // Adjust dimensions accordingly
                                            layout="responsive" // Adjust to your needs
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;
