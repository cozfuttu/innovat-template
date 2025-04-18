import BannerFour from "@/component/banner/BannerFour";
import HeaderFour from "@/component/header/HeaderFour";

import FooterFour from "@/component/footer/FooterFour";
import BackToTop from "@/component/backtotop/BackToTop";
import ProjectFour from "@/component/project/ProjectFour";
import BrandFour from "@/component/brand/BrandFour";
import ServiceFour from "@/component/service/ServiceFour";
import AfterBefore from "@/component/afterbefore/AfterBefore";
import TeamTwo from "@/component/team/TeamTwo";
import BlogThree from "@/component/blog/BlogThree";
import GridLine from "@/component/common/GridLine";
import CtaTwo from "@/component/cta/CtaTwo";





export default function Home() {
    return (
        <div className="index-four with-grid in-dark">

            <GridLine />
            <HeaderFour />
            <BannerFour />
            <ProjectFour />
            <BrandFour />
            <ServiceFour />
            <AfterBefore />
            <TeamTwo />
            <BlogThree />
            <CtaTwo />


            <FooterFour />
            <BackToTop />
        </div>
    );
}
