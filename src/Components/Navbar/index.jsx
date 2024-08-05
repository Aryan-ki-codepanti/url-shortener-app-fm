import React from "react";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="container">
            <div className="Navbar">
                <div className="logo">
                    <span>Shortly</span>
                </div>

                <div className="nav-links">
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Resources</a>
                </div>

                <div className="login-sign">
                    <a href="#">Login</a>
                    <button className="green-btn">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
