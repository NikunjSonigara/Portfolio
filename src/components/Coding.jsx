import React from 'react'

function Coding() {
    return (
        <div className="coding">
            <div className="container">
                <div className="common">
                    <h1 className="about-title">
                        Coding Profile
                    </h1>
                    <div className="underline-border"></div>
                </div>
                <div className="row">
                    <div className="col-6 coding_c">
                        {/* <div className="header_content"> */}
                        <div className="header-section coding_p">
                            <p>I have successfully solved over 1200 coding problems across various platforms, including LeetCode, GeeksforGeeks (GFG), CodeStudio, CodeChef, and HackerRank. <br /> <br /> Through my consistent hard work and dedication, I was able to secure my first rank at Uka Tarsadia University in GeeksforGeeks practice session. This is a statement about my passion for coding and my drive to continuously improve my skills.</p>
                            {/* </div> */}
                        </div>
                    </div>
                    {/* <div className=""> */}
                    <div className="w-right colm">
                        <div className="w-mainCircle">
                            <div className="rotate-circle">
                                <div className="w-secCircle1 w-secCircle">
                                    <a href="https://leetcode.com/Nikunj2002/">
                                    <img src="leetcode1.png" alt="" /></a>
                                </div>
                                <div className="w-secCircle2 w-secCircle">
                                    <a href="https://www.codechef.com/users/nikunj2002">
                                    <img src="codechef.png" alt="" />
                                    </a>
                                </div>
                                <div className="w-secCircle3 w-secCircle black">
                                    <a href="https://www.hackerrank.com/nikunjsonigara91?hr_r=1">
                                    <img src="HackerRank.png" alt="" />
                                    </a>
                                </div>
                                <div className="w-secCircle4 w-secCircle">
                                <a href="https://www.codingninjas.com/studio/profile/183_Nikunj">
                                    <img src="codestudioc.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="w-secCircle5 w-secCircle">
                                <a href="https://auth.geeksforgeeks.org/user/nikunj_sonigara/practice">
                                    <img src="gfg.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Coding