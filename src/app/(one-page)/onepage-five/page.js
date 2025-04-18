import BannerSix from "@/component/banner/BannerSix";
import HeaderFive from "@/component/header-onepage/HeaderFive";
import FooterOne from "@/component/footer/FooterOne";
import BackToTop from "@/component/backtotop/BackToTop";
import BannerFive from "@/component/banner/BannerFive";
import AboutFour from "@/component/about/AboutFour";
import ServiceFive from "@/component/service/ServiceFive";
import ProjectFive from "@/component/project/ProjectFive";
import ProcessOne from "@/component/workingprocess/ProcessOne";
import VideoThree from "@/component/video/VideoThree";
import BrandFive from "@/component/brand/BrandFive";
import CtaThree from "@/component/cta/CtaThree";
import ContactOnepageThree from "@/component/contact/ContactOnepageThree";



export default function Home() {
    return (
        <div className="onepage">

            <HeaderFive />
            <BannerFive />
            <BannerSix />
            <AboutFour />
            <ServiceFive />
            <ProjectFive />
            <ProcessOne />
            <VideoThree />
            <BrandFive />
            <ContactOnepageThree />
            <CtaThree />


            <FooterOne />
            <BackToTop />
        </div>
    );
}
