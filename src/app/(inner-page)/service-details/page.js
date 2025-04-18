"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import BrandEight from '@/component/brand/BrandEight';
import ProcessTwo from '@/component/workingprocess/ProcessTwo';
import FooterInner from '@/component/footer/FooterInner';
export default function Home() {



    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Space Planning" activeLink="Space Planning" />



            {/* service details area start */}
            <div className="service-details-area-start rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 pr--70 pr_md--10 pr_sm--10">
                            {/* service left side bar area start */}
                            <div className="service-left-sidebar-wrapper">
                                {/* service left sidebar single wized */}
                                <div className="service-left-sidebar-wized mb--50">
                                    <div className="topa-rea">
                                        <h4 className="title">All Services</h4>
                                    </div>
                                    <div className="body">
                                        {/* inglle short service */}
                                        <a href="#" className="single-short-service">
                                            <span className="number">01.</span>
                                            <p className="name">Space Planning</p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                        {/* inglle short service */}
                                        <a href="#" className="single-short-service">
                                            <span className="number">02.</span>
                                            <p className="name">Interior Design</p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                        {/* inglle short service */}
                                        <a href="#" className="single-short-service">
                                            <span className="number">03.</span>
                                            <p className="name">Remodeling Services</p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                        {/* inglle short service */}
                                        <a href="#" className="single-short-service">
                                            <span className="number">04.</span>
                                            <p className="name">Urban Planning</p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                        {/* inglle short service */}
                                        <a href="#" className="single-short-service">
                                            <span className="number">05.</span>
                                            <p className="name">Kitchen Cabinet</p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                        {/* inglle short service */}
                                        <a href="#" className="single-short-service">
                                            <span className="number">06.</span>
                                            <p className="name">3d Visualization </p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                    </div>
                                </div>
                                {/* service left sidebar single wized end */}
                                {/* service left sidebar single wized */}
                                <div className="service-left-sidebar-wized">
                                    <div className="topa-rea">
                                        <span className="pre">Contact</span>
                                        <h4 className="title">Let's start new project.</h4>
                                    </div>
                                    <div className="body">
                                        {/* form area start */}
                                        <form action="#">
                                            <input type="text" placeholder="Your Name" />
                                            <input type="number" placeholder="Your Number" />
                                            <textarea placeholder="Message" defaultValue={""} />
                                            <button className="rts-btn btn-primary">Start Project</button>
                                        </form>
                                        {/* form area end */}
                                    </div>
                                </div>
                                {/* service left sidebar single wized end */}
                            </div>
                            {/* service left side bar area end */}
                        </div>
                        <div className="col-lg-8 mt_md--50 mt_sm--50">
                            {/* service -details right-content start */}
                            <div className="service-details-content-right">
                                <div className="large-image">
                                    <img src="assets/images/service/10.jpg" alt="service" />
                                </div>
                                <h3 className="title-main-s">
                                    Space Planning is a crucial aspect <br />
                                    of interior design
                                </h3>
                                <p className="disc">
                                    Our space planning service aims to create harmonious and
                                    well-organized interior environments that maximize the
                                    functionality and visual appeal of the space. We believe that
                                    thoughtful space planning is the foundation for creating a
                                    comfortable and efficient space that aligns with the client's
                                    lifestyle and objectives.
                                </p>
                                <p className="disc">
                                    Our process begins by thoroughly evaluating the space, taking into
                                    account its dimensions, architectural features, and any existing
                                    structural limitations. We then engage in comprehensive
                                    discussions with the client to understand their specific
                                    requirements, preferences, and any special considerations. Using
                                    this information, our team of experienced designers develops a
                                    customized space plan that optimizes the layout and flow of the
                                    space. We carefully consider factors such as traffic patterns,
                                    spatial relationships, furniture placement, and functional
                                    requirements to create a design that best suits the intended
                                    purpose of the space.
                                </p>
                            </div>
                            {/* service -details right-content end */}
                            <div className="row mt--40 mb--40">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <img
                                        style={{ width: "100%" }}
                                        src="assets/images/service/11.jpg"
                                        alt="services"
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <img
                                        style={{ width: "100%" }}
                                        src="assets/images/service/12.jpg"
                                        alt="services"
                                    />
                                </div>
                            </div>
                            <h3 className="title-main-s">
                                careful consideration must be given to various
                            </h3>
                            <p className="disc">
                                Architecture spacing planning is a crucial step in the design
                                process that involves determining the arrangement and allocation of
                                spaces within a building or structure. This planning stage is
                                essential for creating functional, safe, and aesthetically pleasing
                                environments that meet the needs of the intended users.
                            </p>
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="service-details-list-check-bullet">
                                        <div className="single">
                                            <p>Collaboration and Feedback</p>
                                        </div>
                                        <div className="single">
                                            <p>Evaluate Space Constraints</p>
                                        </div>
                                        <div className="single">
                                            <p>Establish Functional Zones</p>
                                        </div>
                                        <div className="single">
                                            <p>Safety and Building Codes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="slice-iameg-service-detials">
                                        <img src="assets/images/service/13.jpg" alt="service" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt--30">
                                <div className="col-lg-12">
                                    <p className="disc">
                                        The primary objective of spacing planning is to ensure that each
                                        space within the building serves its intended purpose
                                        effectively. This involves identifying the different functions
                                        or activities that will take place and allocating appropriate
                                        areas for each. For instance, in an office space, considerations
                                        may include workstations, meeting rooms, reception areas, and
                                        collaborative spaces. In residential buildings, it may involve
                                        allocating spaces for bedrooms, living rooms, kitchens, and
                                        bathrooms.
                                    </p>
                                </div>
                            </div>
                            <div className="row mt--40">
                                <div className="col-lg-4">
                                    <img src="assets/images/service/14.jpg" alt="service" />
                                </div>
                                <div className="col-lg-8">
                                    <p className="disc mb--10">
                                        A well-designed spacing plan takes into account the flow and
                                        circulation patterns within the building. Efficient movement and
                                        logical connections between spaces are essential for a smooth
                                        user experience.
                                    </p>
                                    <p className="disc">
                                        Architecture spacing planning is a critical stage in the design
                                        process, involving the thoughtful allocation and arrangement of
                                        spaces within a building. By considering functionality, flow,
                                        safety, flexibility, lighting, ergonomics, aesthetics,
                                        technology, and other important factors, architects and
                                        designers can create well-designed spaces that meet the needs of
                                        occupants while enhancing their overall experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service details area end */}




            <FooterInner />
            <BackToTop />
        </div >
    );
}
