import React from "react";

const CharacterAboutSection = ({ char, name}) => {
    let charClassName = '';
    (char.subclass) ? charClassName = `${char.subclass} ${char.class}` : charClassName = char.class;
    return (
        <section>
            <div className="portrait">
                <img src={char.portrait} alt={`Portrait of ${char.name}`} />
            </div>
            <div className="general-information">
                <div className="names">
                    <h1>{name}</h1>
                    <h2>{char.player}</h2>
                </div>
                <div className="demographic">
                    <div>
                        <div>
                            <p>{char.level}</p>
                            <p>Level</p>
                        </div>
                        <div>
                            <p>{char.species}</p>
                            <p>Species</p>
                        </div>
                        <div>
                            <p>{charClassName}</p>
                            <p>Class</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>{char.alignment}</p>
                            <p>Alignment</p>
                        </div>
                        <div>
                            <p>{char.background}</p>
                            <p>Background</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>{char.age}</p>
                            <p>Age</p>
                        </div>
                        <div>
                            <p>{char.height}</p>
                            <p>Height</p>
                        </div>
                        <div>
                            <p>{char.weight}</p>
                            <p>Weight</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>{char.eyes}</p>
                            <p>Eyes</p>
                        </div>
                        <div>
                            <p>{char.hair}</p>
                            <p>Hair</p>
                        </div>
                        <div>
                            <p>{char.skin}</p>
                            <p>Skin</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CharacterAboutSection;