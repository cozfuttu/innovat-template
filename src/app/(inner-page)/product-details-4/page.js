"use client"
import { useEffect } from 'react';
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import FooterInner from '@/component/footer/FooterInner';
import AOS from 'aos';
export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1200,  // Animation duration in ms
            once: true,
            offset: 0, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="">
            <HeaderFive />


            <div className="breadcrumb-area-bg bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bread-crumb-area-inner">
                                <div className="breadcrumb-top">
                                    <a href="#">Home</a> /
                                    <a className="active" href="#">
                                        Bathroom Remodeling
                                    </a>
                                </div>
                                <div className="bottom-title">
                                    <h1 className="title">Bathroom Remodeling</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bread croumba rea end */}
            {/* header three area end */}
            <div className="product-details-style-one-main rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="product-details-left-one">
                                <h3 className="title mt--0">Project Brief</h3>
                                <p className="disc">
                                    <b className="mb--0">Project Overview: </b> <br />
                                    The Riverfront Redevelopment Project aims to transform an
                                    underutilized industrial area along the river into a vibrant
                                    mixed-use district that enhances the city's urban fabric and
                                    reconnects the community to the waterfront. Through thoughtful
                                    urban planning and architectural design, the project will
                                    revitalize the area, create new opportunities for economic growth,
                                    and improve the overall quality of life for residents and
                                    visitors.
                                </p>
                                <p className="disc">
                                    <b>Project Scope:</b> <br />
                                    The project focuses on a specific site spanning 30 acres along the
                                    riverfront. It includes both brownfield areas and vacant lots,
                                    offering an opportunity to repurpose existing structures and
                                    introduce new developments that align with the project's
                                    objectives.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 pl--60 pl_md--15 pl_sm--15 mt_md--50 mt_sm--50">
                            <div className="product-details-right-one">
                                <div className="details-infor-1">
                                    {/* single detrails short */}
                                    <div className="single-details-short">
                                        <div className="left">
                                            <span>Project Name:</span>
                                            <p className="name">Commercial Building</p>
                                        </div>
                                        <div className="right">
                                            <span>Client Name:</span>
                                            <p className="name">Robert Richard</p>
                                        </div>
                                    </div>
                                    {/* single detrails short end */}
                                    {/* single detrails short */}
                                    <div className="single-details-short">
                                        <div className="left">
                                            <span>Start Date:</span>
                                            <p className="name">12.07.2023</p>
                                        </div>
                                        <div className="right">
                                            <span>Project Duration:</span>
                                            <p className="name">6 Month</p>
                                        </div>
                                    </div>
                                    {/* single detrails short end */}
                                    {/* single detrails short */}
                                    <div className="single-details-short">
                                        <div className="left">
                                            <span>Location:</span>
                                            <p className="name">Los Angeles</p>
                                        </div>
                                        <div className="right">
                                            <span>Share Project:</span>
                                            <ul className="share">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa-brands fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa-brands fa-youtube" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* single detrails short end */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--40">
                        <div className="col-lg-12">
                            <div className="thumbnail-project-details-top" data-aos="move-right">
                                <img
                                    src="assets/images/product/details/10.jpg"
                                    alt="product_details"
                                />
                                <span>Los Angeles Commercial Building Made by Innovat Ltd.</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-details-padding-lr">
                                <h4 className="title">Project solution:</h4>
                                <p className="disc">
                                    <b>Site Analysis and Planning:</b> Conduct a detailed site
                                    analysis to understand the existing conditions, including
                                    topography, natural features, infrastructure, and historical
                                    elements. Identify potential constraints and opportunities for
                                    development. Develop a comprehensive master plan that outlines the
                                    zoning, land use, and overall layout of the district.
                                </p>
                                <ul>
                                    <li>Architectural Design and Urban Form</li>
                                    <li>Waterfront Promenade and Public Spaces</li>
                                    <li>Monitoring and Evaluation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--60 g-5">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="thumbnail-g-3" data-aos="move-right">
                                <img src="assets/images/product/details/11.jpg" alt="product" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="thumbnail-g-3" data-aos="move-right" data-aos-delay='.2s'>
                                <img src="assets/images/product/details/12.jpg" alt="product" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="thumbnail-g-3" data-aos="move-right" data-aos-delay='.4s'>
                                <img src="assets/images/product/details/13.jpg" alt="product" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt--100">
                        <div className="col-lg-6">
                            <div className="project-challenge-details">
                                <h5 className="title">Project Challenge</h5>
                                <p className="disc">
                                    interior design project challenge related to the living room.
                                    Based on that, here are some common challenges you might encounter
                                    and possible solutions:
                                </p>
                                <p className="disc">
                                    <b>Limited space:</b> If your living room is small, focus on
                                    maximizing the available space. Use multifunctional furniture
                                    pieces like storage ottomans or coffee tables with hidden storage.
                                </p>
                                <p className="disc">
                                    <b>Awkward layout or architectural features:</b> If your living
                                    room has an odd layout or architectural features like pillars or
                                    windows in unusual places.
                                </p>
                                <p className="disc">
                                    <b>Budget constraints:</b> If you have a limited budget,
                                    prioritize your spending on key items like seating, lighting, and
                                    flooring.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail-pd-video" data-aos="move-right">
                                <img
                                    src="assets/images/product/details/14.jpg"
                                    alt="product-details"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50">
                        <div className="col-lg-12">
                            <div className="details-4-bottom">
                                <h5 className="title">Project Solution</h5>
                                <p className="disc">
                                    To provide a solution for your living room interior design
                                    project, I will offer some general guidelines based on common
                                    design principles. Keep in mind that these suggestions are not
                                    specific to your space, as I don't have the precise details.
                                    However, they can serve as a starting point for your project:
                                </p>
                                <p className="disc">
                                    <b>Define a cohesive style:</b> Choose a design style that appeals
                                    to you and aligns with your desired atmosphere. This could be
                                    modern, contemporary, traditional, industrial, rustic, or any
                                    other style that resonates with your preferences.
                                </p>
                                <p className="disc">
                                    <b>Create a focal point:</b> Determine a focal point in the living
                                    room that draws attention and sets the tone for the space. It
                                    could be a fireplace, a statement piece of furniture, a large
                                    artwork, or a beautiful view from a window.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="next-prev-product-details">
                                <span className="left">
                                    {" "}
                                    <i className="fa-light fa-arrow-left" /> Previous{" "}
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={19}
                                    height={19}
                                    viewBox="0 0 19 19"
                                    fill="none"
                                >
                                    <rect
                                        x="7.17188"
                                        y="0.74585"
                                        width={4}
                                        height={4}
                                        fill="#30373E"
                                    />
                                    <rect
                                        x="7.17188"
                                        y="7.78369"
                                        width={4}
                                        height={4}
                                        fill="#30373E"
                                    />
                                    <rect
                                        x="7.17188"
                                        y="14.8218"
                                        width={4}
                                        height={4}
                                        fill="#30373E"
                                    />
                                    <rect
                                        x="0.1875"
                                        y="0.74585"
                                        width={4}
                                        height={4}
                                        fill="#30373E"
                                    />
                                    <rect
                                        x="0.1875"
                                        y="7.78369"
                                        width={4}
                                        height={4}
                                        fill="#30373E"
                                    />
                                    <rect
                                        x="0.1875"
                                        y="14.8218"
                                        width={4}
                                        height={4}
                                        fill="#30373E"
                                    />
                                    <rect
                                        x="14.1953"
                                        y="0.74585"
                                        width={4}
                                        height={4}
                                        fill="#30373E"
                                    />
                                    <rect
                                        x="14.1953"
                                        y="7.78369"
                                        width={4}
                                        height={4}
                                        fill="#30373E"
                                    />
                                    <rect
                                        x="14.1953"
                                        y="14.8218"
                                        width={4}
                                        height={4}
                                        fill="#30373E"
                                    />
                                </svg>
                                <span className="left">
                                    Next <i className="fa-light fa-arrow-right" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <FooterInner />
            <BackToTop />
        </div >
    );
}
