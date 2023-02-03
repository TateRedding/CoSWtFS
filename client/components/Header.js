import React from "react";
import { useNavigate } from "react-router-dom";
import "../header.css"

const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <nav>
                <button className="home" onClick={() => navigate('/')}>Home</button>
                <button className="pcs" onClick={() => navigate("/players")}>Player Characters</button>
                <button className="notes" onClick={() => navigate("/session-notes")}>Session Notes</button>
            </nav>
        </header>
    )
};

export default Header