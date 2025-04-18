import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


function BrandOne() {
    return (
        <div>
            {/* rts brand area start */}
            <div className="rts-brand-area-start pt--80">
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
            {/* rts brand area end */}

        </div>
    )
}

export default BrandOne