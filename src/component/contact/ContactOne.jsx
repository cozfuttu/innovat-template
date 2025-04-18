import React from 'react'

function ContactOne() {
    return (
        <div>
            {/* rts contact area start */}
            <div className="rts-contact-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contct-thumbnail-left move-right">
                                <img data-aos="move-right" data-aos-delay="100"
                                    className="iamge"
                                    src="assets/images/contact/01.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 pl--60 pr--100 pl_md--15 pl_sm--15 mt_md--50 mt_sm--50">
                            <div className="easy-appoinment-area">
                                <div className="title-left-style-seven-wrapper">
                                    <span className="pre">Feature Services</span>
                                    <h2 className="title">have any questions</h2>
                                </div>
                                <form action="#">
                                    <input type="text" placeholder="Your Name" required="" />
                                    <input type="text" placeholder="Your Number" required="" />
                                    <textarea placeholder="Send Message" defaultValue={""} />
                                    <button className="rts-btn btn-primary">Send Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts contact area end */}
        </div>
    )
}

export default ContactOne