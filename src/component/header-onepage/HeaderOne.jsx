"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SideBar from '../header/SideBar';
function HeaderOne() {
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
  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(true);
  };

  const handleCloseClick = () => {
    setSearchVisible(false);
  };

  const handleBackgroundClick = () => {
    setSearchVisible(false);
  };
  return (
    <div>
      <>
        {/* header style one */}
        <div className={`rts-header-style-one header--sticky  ${isSticky ? 'sticky' : ''}`}>
          {/* logo area start */}
          <a href="/" className="logo">
            <img src="assets/images/logo/01.svg" alt="logo-" />
          </a>
          {/* logo area end */}
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
                  <a href="#get-contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="action-area">
            <div id="search" className="search" onClick={handleSearchClick}>
              <i className="fa-light fa-magnifying-glass" />
            </div>
            <div className="menu-icon" id="menu-btn" onClick={toggleSidebar}>
              <svg
                width={16}
                height={14}
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.34375C0 0.886719 0.351562 0.5 0.84375 0.5H14.9062C15.3633 0.5 15.75 0.886719 15.75 1.34375C15.75 1.83594 15.3633 2.1875 14.9062 2.1875H0.84375C0.351562 2.1875 0 1.83594 0 1.34375ZM0 6.96875C0 6.51172 0.351562 6.125 0.84375 6.125H10.4062C10.8633 6.125 11.25 6.51172 11.25 6.96875C11.25 7.46094 10.8633 7.8125 10.4062 7.8125H0.84375C0.351562 7.8125 0 7.46094 0 6.96875ZM5.90625 13.4375H0.84375C0.351562 13.4375 0 13.0859 0 12.5938C0 12.1367 0.351562 11.75 0.84375 11.75H5.90625C6.36328 11.75 6.75 12.1367 6.75 12.5938C6.75 13.0859 6.36328 13.4375 5.90625 13.4375Z"
                  fill="#30373E"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* header style one end */}
        {/* End header area */}
        <div className={`search-input-area ${isSearchVisible ? 'show' : ''}`}>
          <div className="container">
            <div className="search-input-inner">
              <div className="input-div">
                <input
                  id="searchInput1"
                  className="search-input"
                  type="text"
                  placeholder="Search by keyword or #"
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
      </>

    </div>
  )
}

export default HeaderOne