"use client"
import { useEffect } from 'react';
import HeaderTwo from "@/component/header/HeaderTwo";
import BannerTwoShowcase from "@/component/banner/BannerTwoShowcase";


import BackToTop from "@/component/backtotop/BackToTop";


export default function Home() {
    return (
        <div className="showcase-tab-varticle">

            <HeaderTwo />

            <BannerTwoShowcase />

            <BackToTop />
        </div>
    );
}
