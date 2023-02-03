import React from "react";
import Header from "./Header";
import characters from "../character_constants";
import { root } from "../app";
import CharacterSheet from "./CharacterSheet";
import "../../public/player_directory.css"

const CharacterCard = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Player Characters</h1>
                <div className="character-card-container">{
                    Object.keys(characters).map((char, index) => {
                        return (
                            <div key={index} className="character-card" onClick={() => root.render(<CharacterSheet name={char} />)}>
                                <img src={characters[char].portrait} alt={`Portrait of ${char}`} />
                                <h3>{char}</h3>
                            </div>
                        )
                    })
                }</div>
            </main>
        </>
    );
};

export default CharacterCard;