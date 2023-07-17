import React from "react";


function About() {
    return(
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="about-title">
                        About Me
                    </h1>
                    <div className="underline-border"></div>
                </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about_img">
                            <img src="./nikunj.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about_info">
                            <h1>I am Nikunj.</h1>
                            <div>
                                <p>I am currently in my fourth year of a B.Tech. in information technology. I have experience developing projects using various technologies, including web development using HTML, CSS, JavaScript, and ReactJs, and mobile app development using Flutter and Java. I am also currently exploring the fascinating field of blockchain technology.</p>
                            <div className="about_buttons">
                                <a href="Nikunj Resume 2.pdf" download="Nikunj" className="btn btn-outline">
                                    Download Resume
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;