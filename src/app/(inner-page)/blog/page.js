"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import FooterInner from '@/component/footer/FooterInner';
import Posts from '@/data/Posts.json';
import BlogGridMain from './BlogGridMain';

export default function Home() {
    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Blog V.1" activeLink="Blog V.1" />
            <div className="rts-blog-area rts-section-gap">
                <div className="container">
                    <div className="row g-24 mt--30">
                        {Posts.map((blog, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="signle-blog-style-one">
                                        {
                                            <BlogGridMain
                                                blogCategory={blog.category}
                                                Slug={blog.slug}
                                                blogImage={blog.image}
                                                authorImg={blog.authorImg}
                                                blogTitle={blog.title}
                                                blogAuthor={blog.author}
                                                blogPublishedDate={blog.publishedDate}
                                            />
                                        }
                                    </div>
                                </div>
                            )
                        }).slice(0, 6)}

                    </div>
                </div>
            </div>


            <FooterInner />
            <BackToTop />
        </div>
    );
}
