import React, { useState } from "react";
import "./Shortener.css";

const Shortener = () => {
    const [error, setError] = useState(false);
    const [inputLink, setInputLink] = useState("");

    // [{ url: str , shortened: str, copied: bool }..]
    const [links, setLinks] = useState([
        {
            url: "https://www.frontendmentor.io/",
            shortened: "https://rel.ink/k4LKyk",
            copied: false
        },
        {
            url: "https://www.frontendmentor.io/",
            shortened: "https://rel.ink/k4LKyk",
            copied: false
        }
    ]);

    const handleShorten = async e => {
        if (!inputLink) {
            setError(prev => true);
            return;
        }

        setError(prev => false);
    };

    const handleOnCopy = (e, i) => {
        const linksCopy = structuredClone(links);
        linksCopy[i] = { ...linksCopy[i], copied: true };
        setLinks(prev => linksCopy);
        navigator.clipboard.writeText(linksCopy[i].shortened);
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

                <div className="shortened-links">
                    {links.map((link, i) => (
                        <div key={i} className="link">
                            <span>{link.url}</span>
                            <span>{link.shortened}</span>

                            {link.copied ? (
                                <button className="green-btn copied">
                                    Copied!
                                </button>
                            ) : (
                                <button
                                    className="green-btn"
                                    onClick={e => handleOnCopy(e, i)}
                                >
                                    Copy
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shortener;
