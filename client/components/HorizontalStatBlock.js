import React from "react";

const HorizontalStatBlock = ({ stat, name }) => {
    return (
        <div className="stat-block horizontal">
            <p>{stat}</p>
            <p>{name}</p>
        </div>
    );
};

export default HorizontalStatBlock;