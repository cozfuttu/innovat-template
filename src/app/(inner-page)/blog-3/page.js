"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import FooterInner from '@/component/footer/FooterInner';
import Posts from '@/data/Posts.json';
import BlogThreeMain from './BlogThreeMain';

export default function Home() {
    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Blog List" activeLink="Blog List" />


            <div className="rts-blog-area rts-section-gap ">
                <div className="container">
                    <div className="row g-5 mt--40">
                        {Posts.map((blog, index) => {
                            return (
                                <div key={index} className="col-xl-6 col-lg-12 col-md-12 col-sm-6">
                                    <div className="blog-style-three when-bg-white rts-slide-up">
                                        {
                                            <BlogThreeMain
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
                        }).slice(9, 13)}

                    </div>
                </div>
            </div>



            <FooterInner />
            <BackToTop />
        </div>
    );
}
