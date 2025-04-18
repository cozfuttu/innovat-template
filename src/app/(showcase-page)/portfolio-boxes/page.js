"use client"
import { useEffect } from 'react';
import HeaderFive from "@/component/header/HeaderFive";
import PortfolioBoxShowcase from "@/component/project/PortfolioBoxShowcase";
import BackToTop from "@/component/backtotop/BackToTop";


export default function Home() {
    return (
        <div className="portfolio-boxes">

            <HeaderFive />

            <PortfolioBoxShowcase />

            <BackToTop />
        </div>
    );
}
