
import HeaderSix from "@/component/header/HeaderSix";
import FooterFive from "@/component/footer/FooterFive";
import BackToTop from "@/component/backtotop/BackToTop";
import BannerSeven from "@/component/banner/BannerSeven";
import ProjectSix from "@/component/project/ProjectSix";
import CtaFour from "@/component/cta/CtaFour";
import AboutFive from "@/component/about/AboutFive";
import ServiceSix from "@/component/service/ServiceSix";
import TeamThree from "@/component/team/TeamThree";
import TestimonialsFour from "@/component/testimonials/TestimonialsFour";
import BlogFour from "@/component/blog/BlogFour";
import BrandSix from "@/component/brand/BrandSix";
import ContactOnepageFour from "@/component/contact/ContactOnepageFour";


export default function Home() {
    return (
        <div className="index-six onepage">

            <HeaderSix />
            <BannerSeven />
            <ProjectSix />
            <CtaFour />
            <AboutFive />
            <ServiceSix />
            <TeamThree />
            <TestimonialsFour />
            <BlogFour />
            <BrandSix />
            <ContactOnepageFour />

            <FooterFive />
            <BackToTop />
        </div>
    );
}
