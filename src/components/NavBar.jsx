import React from "react";
// import Header from './Header';
// import Coding from "./Coding";
// import {Link, NavLink} from 'react-router-dom';
import {FaAlignJustify} from 'react-icons/fa';

function NavBar(){
    const [state, setState] = React.useState(true);
    return(
        <nav className="navbar">
            <div className="container">
                <div className="navbar_container">
                    <ul className="navbar_left">
                        <div className="navbar_left-logo">
                            <img src="./nikunj_logo.png" alt="logo" />
                        </div>
                    </ul>
                    {state ? (
                        // <NavMenu><NavLink></NavLink></NavMenu>
                        <ul className="navbar_right">
                            <li><a href="Header">Home</a></li>
                            {/* <li><a href="Services">Services</a></li> */}
                            <li><a href="About">About</a></li>
                            <li><a href="New">Technology</a></li>
                            <li><a href="Coding">Coding Profile</a></li>
                            <li><a href="Contact">Contact</a></li>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify/>
            </div>
        </nav>
    )
}

export default NavBar;
