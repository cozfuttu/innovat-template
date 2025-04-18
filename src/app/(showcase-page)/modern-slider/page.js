"use client"
import { useEffect } from 'react';
import HeaderFive from "@/component/header/HeaderFive";
import ProjectModernSlider from "@/component/project/ProjectModernSlider";


import BackToTop from "@/component/backtotop/BackToTop";


export default function Home() {
    return (
        <div className="modern-slider">

            <HeaderFive />

            <ProjectModernSlider />

            <BackToTop />
        </div>
    );
}
