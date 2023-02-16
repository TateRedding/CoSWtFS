import React from "react";
import { useParams } from "react-router-dom";
import characters from "../character_constants";
import CharacterAboutSection from "./CharacterAboutSection";
import BaseStatBlock from "./BaseStatBlock";
import Box from "@mui/material/Box";
import HorizontalStatBlock from "./HorizontalStatBlock";
import SavingThrowsStatBlock from "./SavingThrowsStatBlock";
import SkillsStatBlock from "./SkillsStatBlock";
import VerticalStatBlock from "./VerticalStatBlock";
import ProficienciesStatBlock from "./ProficienciesStatBlock";
import ListStatBlock from "./ListStatBlock";
import { ThemeProvider } from "@mui/material/styles";
import "../character_sheet.css"

const CharacterSheet = ({ theme }) => {
    const { name } = useParams();
    const char = characters[name];

    return (
        <ThemeProvider theme={theme} >
            <CharacterAboutSection
                char={char}
                name={name}
                theme={theme} />
            <Box
                sx={{
                    width: {sm: "333px", md: "999px"},
                    ml: "auto",
                    mr: "auto",
                    display: "flex",
                    flexDirection: {sm: "column", md: "row"},
                    backgroundColor: "neutral.main"
                }}>
                <div className="left-column">
                    <div className="stat-column">{
                        Object.keys(char.base_stats).map((stat, index) => {
                            return <BaseStatBlock
                                key={index}
                                stat={stat}
                                char={char} />
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
            </Box>
        </ThemeProvider>
    );
};

export default CharacterSheet