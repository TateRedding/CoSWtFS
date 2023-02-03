import React from "react";

const BaseStatBlock = ({ stat, char }) => {
    return (
        <div className="stat-block vertical">
            <p>{char.base_stats[stat]}</p>
            <p className="modifier">{Math.floor((char.base_stats[stat] - 10) / 2)}</p>
            <p>{stat}</p>
        </div>
    );
};

export default BaseStatBlock;