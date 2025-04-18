"use client"
import AOS from 'aos';
import { useEffect } from 'react';
import HeaderEight from "@/component/header/HeaderEight";
import BackToTop from "@/component/backtotop/BackToTop";
import BannerNine from "@/component/banner/BannerNine";


export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1200,  // Animation duration in ms
            once: true,
            offset: 0, // Whether animation should happen only once
        });
    }, []);
    return (
        <div className="index-eight">

            <HeaderEight />
            <BannerNine />


            <BackToTop />
        </div>
    );
}
