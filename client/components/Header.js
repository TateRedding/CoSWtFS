import React from "react";
import Home, { root } from "../app";
import PlayerCharacters from "./PlayerDirectory";
import SessionNotesDirectory from "./SessionNotesDirectory";
import "../../public/header.css"

const Header = () => {
    return (
        <header>
            <nav>
                <button className="home" onClick={() => root.render(<Home />)}>Home</button>
                <button className="pcs" onClick={() => root.render(<PlayerCharacters />)}>Player Characters</button>
                <button className="notes" onClick={() => root.render(<SessionNotesDirectory />)}>Session Notes</button>
            </nav>
        </header>
    )
};

export default Header