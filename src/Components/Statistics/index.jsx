import React from "react";
import "./Statistics.css";
import brandImg from "../../images/icon-brand-recognition.svg";
import recImg from "../../images/icon-detailed-records.svg";
import custImg from "../../images/icon-fully-customizable.svg";
import StatCard from "../StatCard";

const Statistics = () => {
    const stats = [
        {
            imgSrc: brandImg,
            head: "Brand Recognition",
            para: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        },
        {
            imgSrc: recImg,
            head: "Detailed Records",
            para: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        },
        {
            imgSrc: custImg,
            head: "Fully Customizable",
            para: "Improve brand awareness and content discoverability through customizable links. supercharging audience engagement."
        }
    ];

    return (
        <div className="container">
            <div className="Statistics">
                <h1>Advanced Statistics</h1>
                <p>
                    Track how your links are performing across the web with
                    <br />
                    our advanced statistics dashboard.
                </p>

                <div className="StatCard-Wrapper">
                    <div className="StatCards">
                        {stats.map((stat, i) => (
                            <StatCard {...stat} key={i} />
                        ))}
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Statistics;
