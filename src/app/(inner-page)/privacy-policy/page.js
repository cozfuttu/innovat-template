"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import FooterInner from '@/component/footer/FooterInner';
export default function Home() {



    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Terms & Condition" activeLink="Terms & Condition" />



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
                                <p className="disc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                                    cum esse possimus officiis amet ea voluptatibus libero! Dolorum
                                    assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis
                                    tenetur at, quis nostrum facere excepturi architecto totam.
                                </p>
                                <p className="disc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero
                                    velit rerum. It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at its
                                    layout. The point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters, as opposed to using
                                    ‘Content here, content here’, making it look like readable
                                    English.
                                </p>
                                <p className="disc">
                                    Sequi, cum esse possimus officiis amet ea voluptatibus libero!
                                    Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error
                                    nobis tenetur at, quis nostrum facere excepturi architecto totam.
                                </p>
                                <p className="disc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero
                                    velit rerum. It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at its
                                    layout. The point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters, as opposed to using
                                    ‘Content here, content here’, making it look like readable
                                    English.
                                </p>
                                <h4 className="title">
                                    Determination of personal information of users
                                </h4>
                                <div className="listof-privacy-policy">
                                    <ul>
                                        <li>
                                            All the Lorem Ipsum generators on the Internet tend to repeat
                                            predefined chunks as necessary, making this the first true
                                            generator on the Internet.
                                        </li>
                                        <li>
                                            All the Lorem Ipsum generators on the Internet tend to repeat
                                            predefined chunks as necessary, making this the first true
                                            generator on the Internet.
                                        </li>
                                        <li>
                                            All the Lorem Ipsum generators on the Internet tend to repeat
                                            predefined chunks as necessary, making this the first true
                                            generator on the Internet.
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="title">
                                    Reasons for collecting and processing user personal information
                                </h4>
                                <div className="listof-privacy-policy mb--30">
                                    <ol>
                                        <li>
                                            All the Lorem Ipsum generators on the Internet tend to repeat
                                            predefined chunks as necessary, making this the first true
                                            generator on the Internet.
                                        </li>
                                        <li>
                                            All the Lorem Ipsum generators on the Internet tend to repeat
                                            predefined chunks as necessary, making this the first true
                                            generator on the Internet.
                                        </li>
                                        <li>
                                            All the Lorem Ipsum generators on the Internet tend to repeat
                                            predefined chunks as necessary, making this the first true
                                            generator on the Internet.
                                        </li>
                                    </ol>
                                </div>
                                <p className="disc">
                                    All generators on the Internet tend to repeat predefined chunks as
                                    necessary, making this the first true generator on the Internet.
                                    It uses a dictionary of over 200 Latin words, combined with a
                                    handful of model sentence structures, to generate Lorem Ipsum
                                    which looks reasonable. The generated Lorem Ipsum is therefore
                                    always free from repetition, injected humour, or
                                    non-characteristic words etc.
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
