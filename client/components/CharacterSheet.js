import React, { useState } from "react";
import { useParams } from "react-router-dom";
import characters from "../character_constants";
import BaseStatBlock from "./BaseStatBlock";
import Box from "@mui/material/Box";
import HorizontalStatBlock from "./HorizontalStatBlock";
import OverviewTab from "./OverviewTab";
import PropTypes from "prop-types";
import SavingThrowsStatBlock from "./SavingThrowsStatBlock";
import Stack from "@mui/material/Stack";
import SkillsStatBlock from "./SkillsStatBlock";
import VerticalStatBlock from "./VerticalStatBlock";
import ProficienciesStatBlock from "./ProficienciesStatBlock";
import ListStatBlock from "./ListStatBlock";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import "../character_sheet.css"

const CharacterSheet = ({ theme }) => {
    const { name } = useParams();
    const char = characters[name];
    const [tab, setTab] = useState(0);

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                {...other} >
                {
                    value === index && (
                        <Box sx={{ p: 3 }}>
                            <Box>{children}</Box>
                        </Box>
                    )
                }
            </div>
        );
    };

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    return (

        <ThemeProvider theme={theme}>
            <Typography variant="h3" textAlign="center">{name}</Typography>
            <Box sx={{ width: '100%' }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderBottom: 1,
                    borderColor: "divider"
                }}>
                    <Tabs value={tab} onChange={(event, newValue) => setTab(newValue)} aria-label="character sheet tabs">
                        <Tab label="Overview" />
                        <Tab label="Stats" />
                        <Tab label="Proficiencies" />
                        <Tab label="Traits" />
                        <Tab label="Features & Spells" />
                    </Tabs>
                </Box>
                <TabPanel value={tab} index={0}>
                    <OverviewTab char={char} name={name} />
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={tab} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={tab} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={tab} index={4}>
                    Item Five
                </TabPanel>
            </Box>
        </ThemeProvider>
        // <ThemeProvider theme={theme} >
        //     <CharacterAboutSection
        //         char={char}
        //         name={name}
        //         theme={theme} />
        //     <Box
        //         sx={{
        //             width: { sm: "333px", md: "999px" },
        //             ml: "auto",
        //             mr: "auto",
        //             pl: 2,
        //             pr: 2,
        //             display: "flex",
        //             flexDirection: { sm: "column", md: "row" },
        //             backgroundColor: "neutral.main"
        //         }}>
        //         <Box sx={{ display: "flex", flex: 1 }}>
        //             <Stack justifyContent="space-between" sx={{ flex: 1 }}>{
        //                 Object.keys(char.base_stats).map((stat, index) => {
        //                     return <BaseStatBlock
        //                         key={index}
        //                         stat={stat}
        //                         char={char} />
        //                 })
        //             }</Stack>
        //             <Box 
        //             sx={{ 
        //                 display: "flex",
        //                 flex: 2,
        //                 flexDirection: "column",
        //                 justifyContent: "space-between"
        //                 }}>
        //                 <HorizontalStatBlock
        //                     stat={char.proficiency_score}
        //                     name="proficiency" />
        //                 <SavingThrowsStatBlock char={char} />
        //                 <SkillsStatBlock char={char} />
        //             </Box>
        //         </Box>
        //         <Box 
        //             sx={{ 
        //                 display: "flex",
        //                 flexDirection: "column",
        //                 justifyContent: "space-between"
        //                 }}>
        //             <Stack direction="row" alignItems="space-between">
        //                 <VerticalStatBlock
        //                     stat={char.armor_class}
        //                     name="armor class" />
        //                 <VerticalStatBlock
        //                     stat={Math.floor((char.base_stats["dexterity"] - 10) / 2)}
        //                     name="initiative" />
        //                 <VerticalStatBlock
        //                     stat={char.speed}
        //                     name="speed" />
        //             </Stack>
        //             <VerticalStatBlock
        //                 stat={char.hp}
        //                 name="max hit points" />
        //             <HorizontalStatBlock
        //                 stat={(char.proficiencies.skills.includes("perception") ?
        //                     10 + Math.floor((char.base_stats["wisdom"] - 10) / 2) + char.proficiency_score :
        //                     10 + Math.floor((char.base_stats["wisdom"] - 10) / 2))}
        //                 name={"passive perception"} />
        //             <ProficienciesStatBlock char={char} />
        //         </Box>
        //         <Box 
        //             sx={{ 
        //                 display: "flex",
        //                 flex: 1,
        //                 flexDirection: "column",
        //                 justifyContent: "space-between"
        //                 }}>
        //             <>{
        //                 Object.keys(char.traits).map((traitList, index) => {
        //                     return <ListStatBlock
        //                         key={index}
        //                         list={char.traits[traitList]}
        //                         name={traitList} />
        //                 })
        //             }</>
        //             <ListStatBlock
        //                 list={char.features}
        //                 name="Features" />
        //         </Box>
        //     </Box>
        // </ThemeProvider>
    );
};

export default CharacterSheet