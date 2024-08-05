import React from "react";
import "./Hero.css";
import heroImg from "../../images/illustration-working.svg";

const Hero = () => {
    return (
        <div className="container">
            <div className="Hero">
                <div className="hero-left">
                    <h1>More than just shorter links</h1>
                    <p>
                        Build your brand's recognition and get detailed insights
                        on how your links are performing
                    </p>
                    <button className="green-btn">Get Started</button>
                </div>
                <div className="hero-right">
                    <img src={heroImg} alt="working-img" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
