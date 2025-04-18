import React from 'react'

function ContactOnePage() {
    return (
        <div>
            <>
                {/* contact onepage */}
                <div className="contact-onepage" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rts-about-right-area-eight bottom-1 rts-section-separator-right">
                                    <div className="title-style-left mb--30">
                                        <div className="pre-title-area">
                                            <img src="assets/images/about/02.png" alt="about" />
                                            <span className="pre-title">Get In Touch</span>
                                        </div>
                                        <h3 className="title animated fadeIn">Contact Me</h3>
                                    </div>
                                    <form action="#" className="form-8">
                                        <input type="text" placeholder="Your Name" />
                                        <input type="text" placeholder="Your Number" />
                                        <input type="text" placeholder="Service Type" />
                                        <textarea placeholder="Write Message" defaultValue={""} />
                                        <button className="rts-btn btn-border">Send Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact onepage end */}
            </>

        </div>
    )
}

export default ContactOnePage