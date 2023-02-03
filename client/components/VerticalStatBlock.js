import React from "react";

const VerticalStatBlock = ({ stat, name }) => {
    return (
        <div className="stat-block vertical">
            <p>{stat}</p>
            <p>{name}</p>
        </div>
    );
};

export default VerticalStatBlock;