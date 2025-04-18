import React from 'react'
import Link from 'next/link';
function Nav() {
    return (
        <div>
            <div className="nav-area-center">
                <nav className="navigation">
                    <ul className="parent-ul">
                        <li className="has-dropdown with-megamenu">
                            <Link className="nav-link" href="#" prefetch>
                                Home
                            </Link>
                            <ul className="submenu">
                                <li className="mega-menu-item">
                                    <ul className="pages">
                                        <li>
                                            <Link className="sdm-main title-top" href="#" prefetch>
                                                Home Pages
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/" prefetch>
                                                Home One
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/index-two" prefetch>
                                                Home Two
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/index-three" prefetch>
                                                Home Three
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/index-four" prefetch>
                                                Home Four
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/index-five">
                                                Home Five
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/index-six">
                                                Home Six
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/index-seven">
                                                Home Seven
                                            </Link>
                                        </li>
                                        <li className="last-left">
                                            <Link className="last sdm-main" href="/index-eight">
                                                Home Eight
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="mega-menu-item">
                                    <ul className="pages">
                                        <li>
                                            <Link className="sdm-main title-top" href="#">
                                                One Pages
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/onepage-one">
                                                One Page One
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/onepage-two">
                                                One Page Two
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/onepage-three">
                                                One Page Three
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/onepage-four">
                                                One Page Four
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/onepage-five">
                                                One Page Five
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/onepage-six">
                                                One Page Six
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/onepage-seven">
                                                One Page Seven
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main last" href="/onepage-eight">
                                                One Page Eight
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="mega-menu-item">
                                    <ul className="pages">
                                        <li>
                                            <Link className="sdm-main title-top" href="#">
                                                Showcase Pages
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/portfolio-boxes">
                                                Carousel Slider
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/varticle-portfolio">
                                                Varticle Portfolio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/varticle-slider">
                                                Varticle Slider
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/varticle-slider-tab">
                                                Varticle Tab Slider
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/showcase-fade">
                                                Showcase Fade
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/modern-slider">
                                                Modern slider
                                            </Link>
                                        </li>
                                        <li className="last-right">
                                            <Link className="sdm-main last" href="#">
                                                Coming Soon
                                            </Link>
                                        </li>
                                        <li className="last-right">
                                            <Link className="sdm-main last" href="#">
                                                Coming Soon
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="#">
                                Pages
                            </Link>
                            <ul className="submenu">
                                <li className="lim">
                                    <Link className="sdm-main" href="about">
                                        About Us
                                    </Link>
                                </li>
                                <li className="sub-dropdown lim">
                                    <Link className="sdm-main" href="#">
                                        Team
                                    </Link>
                                    <ul className="submenu third-lvl base">
                                        <li className="lim">
                                            <Link className="mobile-menu-link" href="/team-1">
                                                Team One
                                            </Link>
                                        </li>
                                        <li className="lim">
                                            <Link className="mobile-menu-link" href="/team-2">
                                                Team Two
                                            </Link>
                                        </li>
                                        <li className="lim">
                                            <Link
                                                className="mobile-menu-link last"
                                                href="team-single"
                                            >
                                                Team Details
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/before-after">
                                        Before After
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/pricing-plane">
                                        Pricing Plan
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/faq">
                                        Faq's
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/contact">
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/terms-and-condition">
                                        Terms &amp; Condition
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="last sdm-main" href="/error-404">
                                        404 Page
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="#">
                                Services
                            </Link>
                            <ul className="submenu">
                                <li className="lim">
                                    <Link className="sdm-main" href="/service-1">
                                        Service One
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/service-2">
                                        Service Two
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/service-3">
                                        Service Three
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/service-4">
                                        Service Four
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/service-5">
                                        Service Five
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="last sdm-main" href="/service-details">
                                        Service Details
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="#">
                                Portfolio
                            </Link>
                            <ul className="submenu">
                                <li className="lim">
                                    <Link className="sdm-main" href="/portfolio-grid-1">
                                        Portfolio Grid
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/portfolio-grid-col-3">
                                        Portfolio Col-3
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/portfolio-grid-col-4">
                                        Portfolio Col-4
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/portfolio-varticle-grid">
                                        Portfolio Mesonary
                                    </Link>
                                </li>
                                <li className="sub-dropdown last lim">
                                    <Link className="sdm-main last" href="#">
                                        Project Details
                                    </Link>
                                    <ul className="submenu third-lvl base">
                                        <li className="lim">
                                            <Link
                                                className="mobile-menu-link"
                                                href="/product-details-1"
                                            >
                                                Project Details v.1
                                            </Link>
                                        </li>
                                        <li className="lim">
                                            <Link
                                                className="mobile-menu-link"
                                                href="/product-details-2"
                                            >
                                                Project Details v.2
                                            </Link>
                                        </li>
                                        <li className="lim">
                                            <Link
                                                className="mobile-menu-link"
                                                href="/product-details-3"
                                            >
                                                Project Details v.3
                                            </Link>
                                        </li>
                                        <li className="lim">
                                            <Link
                                                className="mobile-menu-link last"
                                                href="/product-details-4"
                                            >
                                                Project Details v.4
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="#">
                                Blog
                            </Link>
                            <ul className="submenu">
                                <li className="lim">
                                    <Link className="sdm-main" href="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/blog-list">
                                        Blog List
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/blog-2">
                                        Blog v.2
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/blog-3">
                                        Blog v.3
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/blog-4">
                                        Blog v.4
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main last" href="/blog/7">
                                        Blog Details
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav