import React from 'react'
import Link from "next/link";
import Image from 'next/image';
function BrandTwo() {
    return (
        <div>
            <>
                {/* rts brand area start3 */}
                <div className="rts-brand-area ptb--100 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="titlte-brand-small">
                                    <p> 200+ Our Awesome global client</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="brand-area-wrapper-one">
                                    {/* single branbd area */}
                                    <Link href="#" className="single-brand">
                                        <Image width={132} height={65} src="/assets/images/brand/01.png" alt="brand" />
                                    </Link>
                                    {/* single branbd area end */}
                                    {/* single branbd area */}
                                    <Link href="#" className="single-brand">
                                        <Image width={132} height={65} src="/assets/images/brand/02.png" alt="brand" />
                                    </Link>
                                    {/* single branbd area end */}
                                    {/* single branbd area */}
                                    <Link href="#" className="single-brand">
                                        <Image width={132} height={65} src="/assets/images/brand/03.png" alt="brand" />
                                    </Link>
                                    {/* single branbd area end */}
                                    {/* single branbd area */}
                                    <Link href="#" className="single-brand">
                                        <Image width={132} height={65} src="/assets/images/brand/04.png" alt="brand" />
                                    </Link>
                                    {/* single branbd area end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts brand area end */}
            </>

        </div>
    )
}

export default BrandTwo