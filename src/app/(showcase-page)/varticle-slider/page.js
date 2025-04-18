"use client"
import { useEffect } from 'react';
import HeaderOne from "@/component/header/HeaderOne";
import BannerOneFlip from "@/component/banner/BannerOneFlip";


import BackToTop from "@/component/backtotop/BackToTop";


export default function Home() {
    return (
        <div className="varticle-portfolio">

            <HeaderOne />

            <BannerOneFlip />

            <BackToTop />
        </div>
    );
}
