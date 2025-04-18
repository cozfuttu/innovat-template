"use client"
import { useEffect } from 'react';
import HeaderTwo from "@/component/header/HeaderTwo";
import ProjectThreeShowcase from "@/component/project/ProjectThreeShowcase";


import BackToTop from "@/component/backtotop/BackToTop";


export default function Home() {
    return (
        <div className="showcase-fade-page">

            <HeaderTwo />

            <ProjectThreeShowcase />

            <BackToTop />
        </div>
    );
}
