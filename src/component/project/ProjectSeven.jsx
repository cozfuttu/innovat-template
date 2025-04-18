"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioArea = () => {
    const [activeProject, setActiveProject] = useState('one');

    // Effect to manage hover state changes
    useEffect(() => {
        const handleHover = (project) => {
            setActiveProject(project);
        };

        return () => {
            // Cleanup if necessary, but none required here
        };
    }, []);

    return (
        <div className="rts-portfolio-area-bg-change rts-section-gapBottom with-grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project-full-top-wrapper">
                            <div className="title-left-style-seven-wrapper">
                                <span className="pre">Our Projects</span>
                                <h2 className="title">
                                    Explore our Amazing <br />
                                    Interior Designs
                                </h2>
                            </div>
                            <p className="disc">
                                At Luxury Living Designs, we specialize in creating extraordinary living spaces that exude elegance.
                            </p>
                            <a href="/portfolio-grid-col-4" className="rts-read-more-circle-btn">
                                <i className="fa-solid fa-arrow-up-right"></i>
                                <p>View All Projects</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-full position-relative mt--50">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product-area-full-width">
                            <div className="title-area">
                                {['one', 'two', 'three', 'four'].map((project, idx) => (
                                    <div
                                        key={idx}
                                        className={`single-projects-title ${project} ${activeProject === project ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveProject(project)}
                                    >
                                        <a href={`/product-details-${idx + 1}`}>
                                            <h5 className="title">
                                                {project === 'one' && 'Bathroom Remodeling'}
                                                {project === 'two' && 'Kitchen Renovations'}
                                                {project === 'three' && 'Living Room and Bedroom'}
                                                {project === 'four' && 'Paint and Wall Treatments'}
                                            </h5>
                                        </a>
                                        <span>Interior Remodeling</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-images">
                                {['33', '34', '35', '36'].map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`bg-image ${['one', 'two', 'three', 'four'][idx]} ${activeProject === ['one', 'two', 'three', 'four'][idx] ? 'active' : ''}`}
                                    >
                                        <Image
                                            src={`/assets/images/product/${img}.jpg`}
                                            alt={`product-${img}`}
                                            width={1920}
                                            height={580}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-line">
                    <div className="grid-lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioArea;
