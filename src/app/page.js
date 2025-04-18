import BannerOne from "@/component/banner/BannerOne";
import HeaderOne from "@/component/header/HeaderOne";


import FooterOne from "@/component/footer/FooterOne";
import BackToTop from "@/component/backtotop/BackToTop";
import AboutOne from "@/component/about/AboutOne";
import ServiceOne from "@/component/service/ServiceOne";
import ProcessOne from "@/component/workingprocess/ProcessOne";
import ProjectOne from "@/component/project/ProjectOne";
import CounterUpOne from "@/component/counterup/CounterUpOne";
import TestimonialsOne from "@/component/testimonials/TestimonialsOne";
import BlogOne from "@/component/blog/BlogOne";
import TeamOne from "@/component/team/TeamOne";
import BrandOne from "@/component/brand/BrandOne";






export default function Home() {
  return (
    <div className="#">

      <HeaderOne />
      <BannerOne />
      <AboutOne />
      <ServiceOne />
      <ProcessOne />
      <ProjectOne />
      <CounterUpOne />
      <BrandOne />
      <TeamOne />
      <TestimonialsOne />
      <BlogOne />


      <FooterOne />
      <BackToTop />
    </div>
  );
}
