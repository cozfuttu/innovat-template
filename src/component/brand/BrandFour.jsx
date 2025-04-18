import React from 'react'
import Link from "next/link";
import Image from 'next/image';
function BrandFour() {
    return (
        <div>

            {/* rts client area start */}
            <div className="rts-client-area rts-section-gapBottom bg-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="title-style-three-left">
                                <span>Our Clients</span>
                                <h3 className="title-sm">
                                    we have served over 200 amazing global <br /> clients throughout
                                    our journey.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--60 rts-slide-up">
                        <div className="col-lg-12">
                            {/* brand style three */}
                            <div className="brand-style-three">
                                <Link href="#">
                                    <img src="/assets/images/brand/01.png" alt="brnad" />
                                </Link>
                                <Link href="#">
                                    <img src="/assets/images/brand/02.png" alt="brnad" />
                                </Link>
                                <Link href="#">
                                    <img src="/assets/images/brand/03.png" alt="brnad" />
                                </Link>
                                <Link href="#">
                                    <img src="/assets/images/brand/04.png" alt="brnad" />
                                </Link>
                            </div>
                            {/* single brand end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* rts client area end */}

        </div>
    )
}

export default BrandFour