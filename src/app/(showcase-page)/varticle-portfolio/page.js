"use client"
import { useEffect } from 'react';
import HeaderVarticlePortfolio from "@/component/header/HeaderVarticlePortfolio";
import VarticlePortfolio from "@/component/project/VarticlePortfolio";


import BackToTop from "@/component/backtotop/BackToTop";


export default function Home() {
    return (
        <div className="varticle-portfolio">

            <HeaderVarticlePortfolio />

            <VarticlePortfolio />

            <BackToTop />
        </div>
    );
}
