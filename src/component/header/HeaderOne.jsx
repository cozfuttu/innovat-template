"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Nav from './Nav';
import SideBar from './SideBar';

function HeaderOne() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isSearchVisible, setSearchVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const handleSearchClick = () => setSearchVisible(true);
    const handleCloseClick = () => setSearchVisible(false);
    const handleBackgroundClick = () => setSearchVisible(false);

    return (
        <div>
            <div className={`rts-header-style-one header--sticky ${isSticky ? 'sticky' : ''}`}>
                <Link href="/" className="logo" prefetch>
                    <Image width={150} height={100} layout='responsive' src="/assets/images/logo/01.svg" alt="Cano Digital Logo" />
                </Link>

                <Nav />
                
                <div className="action-area">
                    <div id="search" onClick={handleSearchClick} className="search">
                        <i className="fa-light fa-magnifying-glass" />
                    </div>
                    <div className="menu-icon" id="menu-btn" onClick={toggleSidebar}>
                        <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.34375C0 0.886719 0.351562 0.5 0.84375 0.5H14.9062C15.3633 0.5 15.75 0.886719 15.75 1.34375C15.75 1.83594 15.3633 2.1875 14.9062 2.1875H0.84375C0.351562 2.1875 0 1.83594 0 1.34375ZM0 6.96875C0 6.51172 0.351562 6.125 0.84375 6.125H10.4062C10.8633 6.125 11.25 6.51172 11.25 6.96875C11.25 7.46094 10.8633 7.8125 10.4062 7.8125H0.84375C0.351562 7.8125 0 7.46094 0 6.96875ZM5.90625 13.4375H0.84375C0.351562 13.4375 0 13.0859 0 12.5938C0 12.1367 0.351562 11.75 0.84375 11.75H5.90625C6.36328 11.75 6.75 12.1367 6.75 12.5938C6.75 13.0859 6.36328 13.4375 5.90625 13.4375Z" fill="#30373E" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className={`search-input-area ${isSearchVisible ? 'show' : ''}`}>
                <div className="container">
                    <div className="search-input-inner">
                        <div className="input-div">
                            <input
                                id="searchInput1"
                                className="search-input"
                                type="text"
                                placeholder="Anahtar kelime veya # ile arama yapın"
                            />
                            <button>
                                <i className="far fa-search" />
                            </button>
                        </div>
                    </div>
                </div>
                <div id="close" className="search-close-icon" onClick={handleCloseClick}>
                    <i className="far fa-times" />
                </div>
            </div>
            <div id="anywhere-home" className={isSearchVisible ? 'bgshow' : ''} onClick={handleBackgroundClick}></div>

            <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default HeaderOne