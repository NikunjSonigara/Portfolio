import React from "react";

function Contact() {
    return (
        <div className="contactme">
            <div className="contact">
                <div className="common">
                    <h1 className="about-title">
                        Contact Me
                    </h1>
                    <div className="underline-border"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="contact_content top">
                                <div className="header-section">
                                    <h3 class = "pad">Get in Touch</h3>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eos dolore ipsum.</p> */}
                                    <div className="col">
                                        {/* <div className="row">
                                            <div className="i">
                                                <img src="icons8-person-100.png" alt="" />
                                            </div>
                                            <div className="col">
                                                <h4>Name</h4>
                                                <p>Nikunj Sonigara</p>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="i">
                                                <img src="location.png" alt="" />
                                            </div>
                                            <div className="col">
                                                <h4>Address</h4>
                                                <p><a href="https://goo.gl/maps/pTHKFaxaZmkyF7gV6">Surat, Gujarat, India</a></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="i">
                                                <img src="icons8-mail-100.png" alt="" />
                                            </div>
                                            <div className="col">
                                                <h4>Email</h4>
                                                <p><a href="mailto: nikunjsonigara987@gmail.com">nikunjsonigara987@gmail.com</a></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="i">
                                                <img src="icons8-phone-100.png" alt="" />
                                            </div>
                                            <div className="col">
                                                <h4>Contact No</h4>
                                                <p><a href="+91-7405321660">+91-7405321660</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="contact_content top">
                                <div className="header-section">
                                    <h3 class = "pad">Social Media</h3>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eos dolore ipsum.</p> */}
                                    <div className="col">
                                        <div className="row">
                                            <div className="i">
                                                <img src="linkedin.png" alt="" />
                                            </div>
                                            <div className="col">
                                                <h4>LinkedIn</h4>
                                                <p><a href="https://www.linkedin.com/in/nikunj-sonigara-471620222/">Nikunj Sonigara</a></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="i">
                                                <img src="github.png" alt="" />
                                            </div>
                                            <div className="col">
                                                <h4>GitHub</h4>
                                                <p><a href="https://github.com/NikunjSonigara">NikunjSonigara</a></p>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="i">
                                                <img src="logo192.png" alt="" />
                                            </div>
                                            <div className="col">
                                                <h4>Contact No</h4>
                                                <p><a href="+91-7405321660">+91-7405321660</a></p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;