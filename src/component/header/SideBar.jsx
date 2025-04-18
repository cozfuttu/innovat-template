"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';


function SideBar({ isSidebarOpen, toggleSidebar }) {

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuhome) => {
        setOpenMenu(openMenu === menuhome ? null : menuhome);
    };


    // useEffect(() => {
    //     const sidebar = document.getElementById('side-bar');
    //     const anywhereHome = document.getElementById('anywhere-home');

    //     if (isSidebarOpen) {
    //         sidebar.classList.add('show');
    //         anywhereHome.classList.add('bgshow');
    //     } else {
    //         sidebar.classList.remove('show');
    //         anywhereHome.classList.remove('bgshow');
    //     }
    // }, [isSidebarOpen]);


    return (
        <div>


            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="far fa-times"></i>
                </button>
                {/* inner menu area desktop start */}
                <div className="inner-main-wrapper-desk">
                    <div className="thumbnail">
                        <img src="assets/images/logo/01.svg" alt="Innovate" />
                    </div>
                    <div className="inner-content">
                        <p className="disc">
                            Innovate Architects is a full-service design firm providing architecture
                            architecture.
                        </p>
                        <div className="contact-information--sidebar">
                            <h6 className="title">Contact Info</h6>
                            <div className="single-info">
                                <a href="#">+123 456 789 33</a>
                            </div>
                            <div className="single-info">
                                <a href="#">
                                    3 innovate Street, NY United <br /> States of America
                                </a>
                            </div>
                            <div className="single-info">
                                <a href="#">Innovate@gmail.com</a>
                            </div>
                            <h6 className="title mt--30">Office Address</h6>
                            <div className="single-info">
                                <a href="#">
                                    +Time Square, New York <br /> USA, 3454
                                </a>
                            </div>
                            <div className="rts-social-style-one">
                                <ul>
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
                        <div className="footer">
                            <h4 className="title">Got a project in mind?</h4>
                            <a href="/contact" className="rts-btn btn-primary">
                                Let's talk
                            </a>
                        </div>
                    </div>
                </div>
                {/* mobile menu area start */}
                <div className="mobile-menu-main">
                    <nav className="nav-main mainmenu-nav mt--30">
                        <ul className="mainmenu metismenu" id="mobile-menu-active">
                            <li className="has-droupdown">
                                <a href="#" className="main" onClick={() => toggleMenu(1)}>
                                    Home
                                </a>
                                <ul className={`submenu ${openMenu === 1 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                    <li className="">
                                        <ul className="submenu-third-lvls">
                                            <li>
                                                <a href="/">
                                                    Home One
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/index-two">
                                                    Home Two
                                                </a>

                                            </li>
                                            <li>
                                                <a href="/index-three" >
                                                    Home Three
                                                </a>

                                            </li>
                                            <li>
                                                <a href="/index-four">
                                                    Home Four
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/index-five">
                                                    Home Five
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/index-six">
                                                    Home Six
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/index-seven">
                                                    Home Seven
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/onepage">
                                                    One Page One
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/onepage-two">
                                                    One Page Two
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/onepage-three">
                                                    One Page Three
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/onepage-four">
                                                    One Page Four
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/onepage-five">
                                                    One Page Five
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/onepage-six">
                                                    One Page Six
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/onepage-seven">
                                                    One Page Seven
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/portfolio-boxes">
                                                    Carousel Slider
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/varticle-portfolio">
                                                    Vertical Portfolio
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/varticle-slider">
                                                    Varticl Slider
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/varticle-slider-tab">
                                                    Vartical Tab Slider
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/showcase-fade">
                                                    Showcase Fade
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <a href="#" className="main" onClick={() => toggleMenu(2)}>
                                    Services
                                </a>
                                <ul className={`submenu ${openMenu === 2 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                    <li>
                                        <a className="mobile-menu-link" href="/service-1">
                                            Service One
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/service-2">
                                            Service Two
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/service-3">
                                            Service Three
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/service-4">
                                            Service Four
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/service-5">
                                            Service Five
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/service-details">
                                            Service Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <a href="#" className="main" onClick={() => toggleMenu(3)}>
                                    Portfolio
                                </a>
                                <ul className={`submenu ${openMenu === 3 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                    <li>
                                        <a className="mobile-menu-link" href="/portfolio-grid-1">
                                            Portfolio Grid
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/portfolio-grid-col-3">
                                            Portfolio Col-3
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/portfolio-grid-col-4">
                                            Portfolio Col-4
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="mobile-menu-link"
                                            href="/portfolio-varticle-grid"
                                        >
                                            Portfolio Mesonary
                                        </a>
                                    </li>
                                    <li className="has-droupdown third-lvl">
                                        <a className="main" href="#">
                                            Project Details
                                        </a>
                                        <ul className="submenu-third-lvl mm-collapse">
                                            <li>
                                                <a href="/project-details-1" />
                                                Project Details v.1
                                            </li>
                                            <li>
                                                <a href="/project-details-2" />
                                                Project Details v.2
                                            </li>
                                            <li>
                                                <a href="/project-details-3" />
                                                Project Details v.3
                                            </li>
                                            <li>
                                                <a href="/project-details-4" />
                                                Project Details v.4
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <a href="#" className="main" onClick={() => toggleMenu(4)}>
                                    Blog
                                </a>
                                <ul className={`submenu ${openMenu === 4 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                    <li>
                                        <a className="mobile-menu-link" href="/blog">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/blog-list">
                                            Blog List
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/blog-2">
                                            Blog v.2
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/blog-3">
                                            Blog v.3
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/blog-4">
                                            Blog v.4
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/blog-details">
                                            Blog Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <a href="#" className="main" onClick={() => toggleMenu(5)}>
                                    Pages
                                </a>
                                <ul className={`submenu ${openMenu === 5 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                    <li>
                                        <a className="mobile-menu-link" href="/about">
                                            About
                                        </a>
                                    </li>
                                    <li className="has-droupdown third-lvl">
                                        <a className="main" href="/#">
                                            Team
                                        </a>
                                        <ul className="submenu-third-lvl mm-collapse">
                                            <li>
                                                <a href="/team-1" />
                                                Team One
                                            </li>
                                            <li>
                                                <a href="/team-2" />
                                                Team Two
                                            </li>
                                            <li>
                                                <a href="/team-details" />
                                                Team Details
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/before-after">
                                            Before After
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/pricing-plane">
                                            Pricing Plan
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/faq">
                                            Faq's
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/terms-and-condition">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/privacy-policy">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mobile-menu-link" href="/error-404">
                                            404 Page
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/contact" className="main">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="rts-social-style-one pl--20 mt--100">
                        <ul>
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
                {/* mobile menu area end */}
            </div>



        </div>
    )
}

export default SideBar