"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import FooterInner from '@/component/footer/FooterInner';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Home() {

    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs.send(
            'your_service_id',        // replace with your EmailJS service ID
            'your_template_id',       // replace with your EmailJS template ID
            {
                name: formData.name,
                phone: formData.phone,
                message: formData.message,
            },
            'your_public_key'         // replace with your EmailJS public key
        ).then(() => {
            setStatus('Message sent successfully!');
            setFormData({ name: '', phone: '', message: '' });
        }).catch((error) => {
            console.error('Error sending message:', error);
            setStatus('Failed to send message.');
        });
    };

    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Contact Us" activeLink="Contact Us" />

            <div className="contact-info-area-start rts-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top">
                                <h2 className="title">Contact Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--0 g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="left-contact">
                                <p className="top mb--30">Innovat Interior &amp; Architecture Firm</p>
                                <p className="disc mb--20">
                                    An architecture firm is a professional organization that is our
                                    specializes in providing architectural services are typically
                                    comprised of a team of architects, designers, engineers and other
                                    professionals.
                                </p>
                                <a href="#">Hot Line: +23 656 665 455</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pl--50 pl_md--15 pl_sm--15">
                            <div className="contact-info-mid">
                                <p className="top-contact mb--20">Contact Details</p>
                                <div className="single-information mt--30">
                                    <span>Address:</span>
                                    <p className="address" style={{ textDecoration: "underline" }}>
                                        1058 Helton Ave, Stky <br />
                                        Berlin, Germany
                                    </p>
                                </div>
                                <div className="single-information">
                                    <span>Phone:</span>
                                    <a href="Tel:123-456-7890">+23 5825-32535</a>
                                </div>
                                <div className="single-information">
                                    <span>Mail:</span>
                                    <a href="mailto:webmaster@example.com">inno@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <form action="#" className="contact-form-conatct-page" onSubmit={handleSubmit}>
                                <p className="top-contact mb--20">Contact Form</p>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <textarea
                                    placeholder="Your message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                <button className="rts-btn btn-primary mt--30" type="submit">
                                    Send Now
                                </button>
                                <p>{status}</p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container mt--120">
                    <div className="row">
                        <div className="col-lg-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8254.021045171208!2d-95.11818240981121!3d29.563301798292883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sbd!4v1697535735266!5m2!1sen!2sbd"
                                width={600}
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <FooterInner />
            <BackToTop />
        </div >
    );
}
