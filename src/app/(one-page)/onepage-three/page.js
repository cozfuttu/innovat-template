"use client"
import HeaderThree from "@/component/header/HeaderThree";
import BackToTop from "@/component/backtotop/BackToTop";
import BannerThree from "@/component/banner/BannerThree";
import AboutThree from "@/component/about/AboutThree";
import ProjectThree from "@/component/project/ProjectThree";
import BrandThree from "@/component/brand/BrandThree";
import ServiceThree from "@/component/service/ServiceThree";
import VideoTwo from "@/component/video/VideoTwo";
import ScrollText from "@/component/scrolltext/ScrollText";
import TeamTwo from "@/component/team/TeamTwo";
import TestimonialsThree from "@/component/testimonials/TestimonialsThree";
import BlogTwo from "@/component/blog/BlogTwo";
import FooterThree from "@/component/footer/FooterThree";





export default function Home() {
    return (

        <div className="index-three">

            <HeaderThree />
            <BannerThree />
            <AboutThree />
            <ProjectThree />
            <BrandThree />
            <ServiceThree />
            <VideoTwo />
            <ScrollText />
            <TeamTwo />
            <TestimonialsThree />
            <BlogTwo />
            <FooterThree />
            <BackToTop />
        </div>
    );
}
