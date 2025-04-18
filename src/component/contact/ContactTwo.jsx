"use client"
import AOS from 'aos';
import { useEffect } from 'react';
function ContactTwo() {
    useEffect(() => {
        AOS.init({
            duration: 1200,  // Animation duration in ms
            once: true,
            offset: 0, // Whether animation should happen only once
        });
    }, []);
    return (
        <div>

            {/* contact area start */}
            <div className="rts-contact-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contct-thumbnail-left" data-aos="move-left">
                                <img
                                    src="assets/images/contact/01.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 pl--60 pr--100 pr_md--10 pr_sm--10 pl_sm--10 pl_md--10 pt_md--50 pt_sm--50">
                            <div className="easy-appoinment-area">
                                <div className="title-left-style-seven-wrapper">
                                    <span className="pre">Feature Services</span>
                                    <h2 className="title">have any questions</h2>
                                </div>
                                <form action="#">
                                    <input type="text" placeholder="Your Name" />
                                    <input type="text" placeholder="Your Number" />
                                    <textarea placeholder="Send Message" defaultValue={""} />
                                    <button className="rts-btn btn-primary">Send Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact area start */}


        </div>
    )
}

export default ContactTwo