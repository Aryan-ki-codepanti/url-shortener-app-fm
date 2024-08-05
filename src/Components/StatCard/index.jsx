import React from "react";
import "./StatCard.css";

const StatCard = ({ imgSrc, head, para }) => {
    return (
        <div className="StatCard">
            <div>
                <img src={imgSrc} alt={`${head}-icon`} />
            </div>
            <h2>{head}</h2>
            <p>{para}</p>
        </div>
    );
};

export default StatCard;
