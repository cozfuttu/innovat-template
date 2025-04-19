import AboutOne from "@/component/about/AboutOne";
import ServiceOne from "@/component/service/ServiceOne";
import ProcessOne from "@/component/workingprocess/ProcessOne";
import ProjectOne from "@/component/project/ProjectOne";
import CounterUpOne from "@/component/counterup/CounterUpOne";
import TestimonialsOne from "@/component/testimonials/TestimonialsOne";
import BlogOne from "@/component/blog/BlogOne";
import TeamOne from "@/component/team/TeamOne";
import BrandOne from "@/component/brand/BrandOne";
import BannerTwo from "@/component/banner/BannerTwo";

export default function Home() {
  return (
    <>
      <BannerTwo />
      <AboutOne />
      {/* <ServiceOne /> */}
      <ProcessOne />
      <ProjectOne />
      <CounterUpOne />
      <BrandOne />
      <TeamOne />
      <TestimonialsOne />
      <BlogOne />
    </>
  );
}
