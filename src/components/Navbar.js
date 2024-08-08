import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };

    return (
        <div className={click ? "header active" : "header"}>
            <Link to="/">
                <h1 className="name">P A D I A.</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/" onClick={() => setClick(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={() => setClick(false)}>Projects</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? <FaTimes size={25} /> :
                    <FaBars size={25}  />}
            </div>
        </div>
    );
}; 

export default Navbar;