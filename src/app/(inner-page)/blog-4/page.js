"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import FooterInner from '@/component/footer/FooterInner';
import Posts from '@/data/Posts.json';
import BlogFourMain from './BlogFourMain';

export default function Home() {
    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Blog V.1" activeLink="Blog V.1" />
            <div className="rts-blog-area">
                <div className="container border-top-in-container rts-section-gap">
                    <div className="row mt--30 g-5">
                        {Posts.map((blog, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="rts-blog-area-start-six">
                                        {
                                            <BlogFourMain
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
                        }).slice(13, 22)}


                    </div>
                </div>
            </div>
            <FooterInner />
            <BackToTop />
        </div>
    );
}
