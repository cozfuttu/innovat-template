"use client"
import React, { useState, useEffect } from 'react';
import SideBar from '../header/SideBar';
function HeaderFive() {
    const handleScroll = (e, id) => {
        e.preventDefault();
        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>

            {/* header three area start */}
            <header
                className={`header-three five header--sticky  ${isSticky ? 'sticky' : ''}`}
                style={{ position: "relative" }}
            >
                <a href="/" className="logo-area">
                    <img src="assets/images/logo/04.svg" alt="logo" />
                </a>
                <div className="header-right">
                    <div className="nav-area-center">
                        <nav className="navigation">
                            <ul className="parent-ul">
                                <li className="has-dropdown with-megamenu">
                                    <a className="nav-link" href="#home" onClick={(e) => handleScroll(e, "home")}>
                                        Home
                                    </a>
                                </li>
                                <li className="has-dropdown">
                                    <a className="nav-link" href="#about" onClick={(e) => handleScroll(e, "about")}>
                                        About
                                    </a>
                                </li>
                                <li className="has-dropdown">
                                    <a className="nav-link" href="#service" onClick={(e) => handleScroll(e, "service")}>
                                        Service
                                    </a>
                                </li>
                                <li className="has-dropdown">
                                    <a className="nav-link" href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
                                        Portfolio
                                    </a>
                                </li>
                                <li className="has-dropdown">
                                    <a className="nav-link" href="#blog" onClick={(e) => handleScroll(e, "blog")}>
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#get-contact" onClick={(e) => handleScroll(e, "get-contact")}>Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="action-area" id="menu-btn" onClick={toggleSidebar}>
                        <div className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={16}
                                viewBox="0 0 24 16"
                                fill="none"
                            >
                                <rect x={6} width={18} height={2} fill="#D9D9D9" />
                                <rect x={10} y={14} width={14} height={2} fill="#D9D9D9" />
                                <rect y={7} width={24} height={2} fill="#D9D9D9" />
                            </svg>
                        </div>
                        <span>Menu</span>
                    </div>
                </div>
            </header>
            {/* header three area end */}
            <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        </div>
    )
}

export default HeaderFive