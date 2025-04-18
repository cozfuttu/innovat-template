"use client"
import React, { useEffect, useState } from 'react';

const BackToTop = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const progressPath = document.querySelector('.progress-wrap path');
        const pathLength = progressPath.getTotalLength();

        // Initialize path length for animation
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;

        const updateProgress = () => {
            const scroll = window.scrollY || window.pageYOffset;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength) / height;

            // Update stroke offset
            progressPath.style.strokeDashoffset = progress;

            // Show/hide back to top button
            setIsVisible(scroll > 50);
        };

        window.addEventListener('scroll', updateProgress);
        updateProgress(); // Call initially to set progress

        return () => {
            window.removeEventListener('scroll', updateProgress);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`progress-wrap ${isVisible ? 'active-progress' : ''}`} onClick={scrollToTop}>
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
            </svg>
        </div>
    );
};

export default BackToTop;
