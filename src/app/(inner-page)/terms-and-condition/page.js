"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import FooterInner from '@/component/footer/FooterInner';
export default function Home() {



    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Privacy Policy" activeLink="Privacy Policy" />


            {/* terms and condition area main */}
            <div className="terms-and-condition-wrapper rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="terms-wrapper-main">
                                <p className="disc">
                                    Terms of use dolor sit amet consectetur, adipisicing elit.
                                    Recusandae provident ullam aperiam quo ad non corrupti sit vel
                                    quam repellat ipsa quod sed, repellendus adipisci, ducimus ea modi
                                    odio assumenda. Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Praesentium necessitatibus totam debitis saepe earum. A
                                    ipsum nostrum in possimus officia! Lorem ipsum dolor sit amet
                                    consectetur adipisicing.
                                </p>
                                <h4 className="title">Disclaimers</h4>
                                <p className="disc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                                    cum esse possimus officiis amet ea voluptatibus libero! Dolorum
                                    assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis
                                    tenetur at, quis nostrum facere excepturi architecto totam.
                                </p>
                                <p className="disc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero
                                    velit rerum.
                                </p>
                                <h4 className="title">Limitation on Liability</h4>
                                <p className="disc">
                                    Sequi, cum esse possimus officiis amet ea voluptatibus libero!
                                    Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error
                                    nobis tenetur at, quis nostrum facere excepturi architecto totam.
                                </p>
                                <p className="disc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero
                                    velit rerum.
                                </p>
                                <h4 className="title">Copyright Policy</h4>
                                <p className="disc">
                                    Dolor sit amet consectetur adipisicing elit. Sequi, cum esse
                                    possimus officiis amet ea voluptatibus libero! Dolorum assumenda
                                    esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at,
                                    quis nostrum facere excepturi architecto totam.
                                </p>
                                <p className="disc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero
                                    velit rerum.
                                </p>
                                <h4 className="title">General</h4>
                                <p className="disc">
                                    Dolor sit amet consectetur adipisicing elit. Sequi, cum esse
                                    possimus officiis amet ea voluptatibus libero! Dolorum assumenda
                                    esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at,
                                    quis nostrum facere excepturi architecto totam.
                                </p>
                                <p className="disc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero
                                    velit rerum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* terms and condition area main end */}



            <FooterInner />
            <BackToTop />
        </div >
    );
}
