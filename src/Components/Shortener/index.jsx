import React, { useState } from "react";
import "./Shortener.css";

const Shortener = () => {
    const [error, setError] = useState(false);
    const [inputLink, setInputLink] = useState("");

    const handleShorten = e => {
        if (!inputLink) {
            setError(prev => true);
            return;
        }
        setError(prev => false);
    };

    return (
        <div className="Shortener">
            <div className="container">
                <div className="shortener-app">
                    <input
                        className={error ? "error" : ""}
                        type="text"
                        placeholder="Shorten a link here..."
                        value={inputLink}
                        onChange={e => setInputLink(prev => e.target.value)}
                    />
                    <button onClick={handleShorten} className="green-btn">
                        Shorten It!
                    </button>
                    {error && <span>Please add a link</span>}
                </div>

                <div className="shortened-links"></div>
            </div>
        </div>
    );
};

export default Shortener;
