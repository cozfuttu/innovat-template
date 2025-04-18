"use client"
import { useEffect } from 'react';
import HeaderFive from "@/component/header/HeaderFive";


import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import AOS from 'aos';
import TeamSix from '@/component/team/TeamSix';
import CtaFive from '@/component/cta/CtaFive';

import FooterInner from '@/component/footer/FooterInner';
import BrandEight from '@/component/brand/BrandEight';

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1500,  // Animation duration in ms
            once: true,
            offset: 0, // Whether animation should happen only once
        });
    }, []);
    return (
        <div className="">

            <HeaderFive />
            <Breadcrumb title="Our Team" activeLink="Our Team" />
            <TeamSix />
            <BrandEight />


            <CtaFive />
            <FooterInner />



            <BackToTop />
        </div>
    );
}
