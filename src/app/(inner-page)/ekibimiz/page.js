"use client";
import { useEffect } from "react";
import Breadcrumb from "@/component/banner/Breadcrumb";
import AOS from "aos";
import CtaFive from "@/component/cta/CtaFive";
import BrandEight from "@/component/brand/BrandEight";
import TeamOne from "@/component/team/TeamOne";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      offset: 0,
    });
  }, []);
  return (
    <div className="">
      <Breadcrumb title="Ekibimiz" />
      <TeamOne />
      <BrandEight />
      <CtaFive />
    </div>
  );
}
