import React from "react";
import Header from "./Header";
import characters from "../character_constants";
import CharacterAboutSection from "./CharacterAboutSection";
import BaseStatBlock from "./BaseStatBlock";
import HorizontalStatBlock from "./HorizontalStatBlock";
import SavingThrowsStatBlock from "./SavingThrowsStatBlock";
import SkillsStatBlock from "./SkillsStatBlock";
import VerticalStatBlock from "./VerticalStatBlock";
import ProficienciesStatBlock from "./ProficienciesStatBlock";
import ListStatBlock from "./ListStatBlock";
import "../../public/character_sheet.css"

const CharacterSheet = ({ name }) => {
    const char = characters[name];
    return (
        <>
            <Header />
            <main>
                <CharacterAboutSection 
                    char={char} 
                    name={name}/>
                <section className="character-details">
                    <div className="left-column">
                        <div className="stat-column">{
                            Object.keys(char.base_stats).map((stat, index) => {
                                return <BaseStatBlock 
                                            key={index} 
                                            stat={stat} 
                                            char={char}/>
                            })
                        }</div>
                        <div className="stat-column">
                            <HorizontalStatBlock 
                                stat={char.proficiency_score} 
                                name="proficiency" />
                            <SavingThrowsStatBlock char={char} />
                            <SkillsStatBlock char={char} />
                        </div>
                    </div>
                    <div className="stat-column">
                        <div className="stat-row">
                            <VerticalStatBlock
                                stat={char.armor_class}
                                name="armor class" />
                            <VerticalStatBlock
                                stat={Math.floor((char.base_stats["dexterity"] - 10) / 2)}
                                name="initiative" />
                            <VerticalStatBlock
                                stat={char.speed}
                                name="speed" />
                        </div>
                        <VerticalStatBlock
                                stat={char.hp}
                                name="max hit points" />
                        <HorizontalStatBlock
                            stat={(char.proficiencies.skills.includes("perception") ?
                                    10 + Math.floor((char.base_stats["wisdom"] - 10) / 2) + char.proficiency_score :
                                    10 + Math.floor((char.base_stats["wisdom"] - 10) / 2))}
                            name={"passive perception"} />
                        <ProficienciesStatBlock char={char} />
                    </div>
                    <div className="stat-column">
                        <>{
                            Object.keys(char.traits).map((traitList, index) => {
                                return <ListStatBlock
                                            key={index}
                                            list={char.traits[traitList]}
                                            name={traitList} />
                            })
                        }</>
                        <ListStatBlock
                            list={char.features}
                            name="Features" />
                    </div>
                </section>
            </main>
        </>
    );
};

export default CharacterSheet