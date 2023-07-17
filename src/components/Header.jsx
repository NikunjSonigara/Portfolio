import React from "react";

function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header-section">
                                <h2>Hello, I Am</h2>
                                <h1>Nikunj Sonigara</h1>
                                <p>I am pursuing my last year of B.Tech. in Information technology.</p>
                                <div className="header_buttons">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScf3r-4rFxervg1Erm--lr93p4PSGfKqqNuNVaPuQJiez7Zvg/viewform?usp=sf_link" className="btn-outline">
                                        Hire Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="./Hotpot.png" alt="" className="image" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;