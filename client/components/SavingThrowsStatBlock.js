import React from "react";
import { stats } from "../character_constants";

const SavingThrowsStatBlock = ({ char }) => {
    return (
        <div className="stat-block list saves-and-skills">
            <ul>{
                stats.map((stat, index) => {
                    let mod = Math.floor((char.base_stats[stat] - 10) / 2);
                    if (char.proficiencies.saving_throws.includes(stat)) {
                        mod += char.proficiency_score;
                    };
                    return <li key={index}>{`${mod} ${stat}`}</li>
                })
            }</ul>
            <p>Saving Throws</p>
        </div>
    );
};

export default SavingThrowsStatBlock;