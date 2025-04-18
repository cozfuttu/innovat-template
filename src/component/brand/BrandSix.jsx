"use client"
import Link from 'next/link';
import Image from 'next/image';
function BrandSix() {
    return (
        <div>
            {/* rts brand area start */}
            <div className="rts-brand-area-start rts-section-gapBottom rts-parallex-top bg-white-para">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brand-area-wrapper-one">
                                {/* single branbd area */}
                                <Link href="#" className="single-brand">
                                    <img src="/assets/images/brand/01.png" alt="brand" />
                                </Link>
                                {/* single branbd area end */}
                                {/* single branbd area */}
                                <Link href="#" className="single-brand">
                                    <img src="/assets/images/brand/02.png" alt="brand" />
                                </Link>
                                {/* single branbd area end */}
                                {/* single branbd area */}
                                <Link href="#" className="single-brand">
                                    <img src="/assets/images/brand/03.png" alt="brand" />
                                </Link>
                                {/* single branbd area end */}
                                {/* single branbd area */}
                                <Link href="#" className="single-brand">
                                    <img src="/assets/images/brand/04.png" alt="brand" />
                                </Link>
                                {/* single branbd area end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandSix