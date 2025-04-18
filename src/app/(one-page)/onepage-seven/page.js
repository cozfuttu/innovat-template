
import HeaderSeven from "@/component/header-onepage/HeaderSeven";
import FooterFive from "@/component/footer/FooterFive";
import BackToTop from "@/component/backtotop/BackToTop";
import BannerEight from "@/component/banner/BannerEight";
import BrandSeven from "@/component/brand/BrandSeven";
import AboutSix from "@/component/about/AboutSix";
import ServiceSeven from "@/component/service/ServiceSeven";
import FaqOne from "@/component/faq/FaqOne";
import CounterUpThree from "@/component/counterup/CounterUpThree";
import BeforeAfterTwo from "@/component/afterbefore/BeforeAfterTwo";
import ProjectSeven from "@/component/project/ProjectSeven";
import TeamFour from "@/component/team/TeamFour";
import BlogFive from "@/component/blog/BlogFive";
import ContactOne from "@/component/contact/ContactOne";




export default function Home() {
    return (
        <div className="index-six">

            <HeaderSeven />
            <BannerEight />
            <BrandSeven />
            <AboutSix />
            <ServiceSeven />
            <FaqOne />
            <CounterUpThree />
            <BeforeAfterTwo />
            <ProjectSeven />
            <TeamFour />
            <BlogFive />
            <ContactOne />


            <FooterFive />
            <BackToTop />
        </div>
    );
}
