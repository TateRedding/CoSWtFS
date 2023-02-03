import React from "react";
import { skills } from "../character_constants";

const SkillsStatBlock = ({ char }) => {
    return (
        <div className="stat-block list saves-and-skills">
            <ul>{
                Object.keys(skills).map((skill, index) => {
                    let mod = Math.floor((char.base_stats[skills[skill]] - 10) / 2);
                    if (char.proficiencies.skills.includes(skill)) {
                        mod += char.proficiency_score;
                    };
                    return <li key={index}>{`${mod} ${skill}`}</li>
                })
            }</ul>
            <p>Skills</p>
        </div>
    );
};

export default SkillsStatBlock;