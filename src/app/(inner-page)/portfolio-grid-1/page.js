"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import FooterInner from '@/component/footer/FooterInner';
import ProjectSix from "@/component/project/ProjectSix";
export default function Home() {



    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Grid Portfolio" activeLink="Grid Portfolio" />



            <ProjectSix />



            <FooterInner />
            <BackToTop />
        </div >
    );
}
