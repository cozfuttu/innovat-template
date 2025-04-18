"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import FooterInner from '@/component/footer/FooterInner';
export default function Home() {



    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Grid Portfolio" activeLink="Grid Portfolio" />

  {/* rts portfoliooa area inner page */}
  <div className="rts-portfolio-grid-col-2 rts-section-gap rts_portfolio_animation-wrapper">
    <div className="container">
      <div className="row g-80">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          {/* single portfolio grid col-2 */}
          <div className="portfolio-grid-col-2-single rts-portfolio__item">
            <a href="product-details-1" className="thumbnail">
              <img src="assets/images/product/19.jpg" alt="portfolio" />
            </a>
            <div className="inner-text">
              <a href="product-details-1">
                <h5 className="title">commercial Architecture</h5>
              </a>
              <p className="disc">
                Creating vibrant and integrated spaces that combine residential,
                commercial, and leisure elements.
              </p>
            </div>
          </div>
          {/* single portfolio grid col-2 end */}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          {/* single portfolio grid col-2 */}
          <div className="portfolio-grid-col-2-single rts-portfolio__item pl--30 pl_sm--0">
            <a href="product-details-1" className="thumbnail">
              <img src="assets/images/product/20.jpg" alt="portfolio" />
            </a>
            <div className="inner-text">
              <a href="product-details-1">
                <h5 className="title">Steel Water Bottle</h5>
              </a>
              <p className="disc">
                Creating vibrant and integrated spaces that combine residential,
                commercial, and leisure elements.
              </p>
            </div>
          </div>
          {/* single portfolio grid col-2 end */}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          {/* single portfolio grid col-2 */}
          <div className="portfolio-grid-col-2-single rts-portfolio__item">
            <a href="product-details-1" className="thumbnail">
              <img src="assets/images/product/21.jpg" alt="portfolio" />
            </a>
            <div className="inner-text">
              <a href="product-details-1">
                <h5 className="title">Stainless Steel Travel Mug</h5>
              </a>
              <p className="disc">
                Creating vibrant and integrated spaces that combine residential,
                commercial, and leisure elements.
              </p>
            </div>
          </div>
          {/* single portfolio grid col-2 end */}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          {/* single portfolio grid col-2 */}
          <div className="portfolio-grid-col-2-single rts-portfolio__item pl--30 pl_sm--0">
            <a href="product-details-1" className="thumbnail">
              <img src="assets/images/product/22.jpg" alt="portfolio" />
            </a>
            <div className="inner-text">
              <a href="product-details-1">
                <h5 className="title">Portable Bluetooth Speaker</h5>
              </a>
              <p className="disc">
                Creating vibrant and integrated spaces that combine residential,
                commercial, and leisure elements.
              </p>
            </div>
          </div>
          {/* single portfolio grid col-2 end */}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          {/* single portfolio grid col-2 */}
          <div className="portfolio-grid-col-2-single rts-portfolio__item">
            <a href="product-details-1" className="thumbnail">
              <img src="assets/images/product/23.jpg" alt="portfolio" />
            </a>
            <div className="inner-text">
              <a href="product-details-1">
                <h5 className="title">Digital Camera with Zoom</h5>
              </a>
              <p className="disc">
                Creating vibrant and integrated spaces that combine residential,
                commercial, and leisure elements.
              </p>
            </div>
          </div>
          {/* single portfolio grid col-2 end */}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          {/* single portfolio grid col-2 */}
          <div className="portfolio-grid-col-2-single rts-portfolio__item pl--30 pl_sm--0">
            <a href="product-details-1" className="thumbnail">
              <img src="assets/images/product/24.jpg" alt="portfolio" />
            </a>
            <div className="inner-text">
              <a href="product-details-1">
                <h5 className="title">Gourmet Coffee Gift Set</h5>
              </a>
              <p className="disc">
                Creating vibrant and integrated spaces that combine residential,
                commercial, and leisure elements.
              </p>
            </div>
          </div>
          {/* single portfolio grid col-2 end */}
        </div>
      </div>
    </div>
  </div>
  {/* rts portfoliooa area inner page end */}


            <FooterInner />
            <BackToTop />
        </div >
    );
}
