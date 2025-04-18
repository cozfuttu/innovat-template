import React from 'react'
import Image from 'next/image';
function BrandThree() {
    return (
        <div>
            <div className="rts-client-area rts-section-gap2Bottom bg-3">
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
                    <div className="row mt--60">
                        <div className="col-lg-12">
                            {/* brand style three */}
                            <div className="brand-style-three">
                                <Image width={132} height={65} src="/assets/images/brand/01.png" alt="brnad" />
                                <Image width={132} height={65} src="/assets/images/brand/02.png" alt="brnad" />
                                <Image width={132} height={65} src="/assets/images/brand/03.png" alt="brnad" />
                                <Image width={132} height={65} src="/assets/images/brand/04.png" alt="brnad" />
                            </div>
                            {/* single brand end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandThree