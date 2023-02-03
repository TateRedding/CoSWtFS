import React from "react";
import { useNavigate } from "react-router-dom";
import characters from "../character_constants";
import "../pc_directory.css"

const PCDirectory = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Player Characters</h1>
            <div className="character-card-container">{
                Object.keys(characters).map((char, index) => {
                    return (
                        <div key={index} className="character-card" onClick={() => navigate(`/players/${char}`)}>
                            <img src={characters[char].portrait} alt={`Portrait of ${char}`} />
                            <h3>{char}</h3>
                        </div>
                    )
                })
            }</div>
        </>
    );
};

export default PCDirectory;