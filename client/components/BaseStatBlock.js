import React from "react";
import Typography from "@mui/material/Typography";
import StatBlock from "./StatBlock";

const BaseStatBlock = ({ stat, char }) => {
    return (
        <StatBlock
            sx={{
                flexDirection: "column",
                alignItems: "center"
            }}>
            <Typography variant="h6">{char.base_stats[stat]}</Typography>
            <Typography
                sx={{
                    width: 5,
                    padding: 1,
                    textAlign: "center",
                    border: "1px solid black",
                    borderRadius: "50%"
                }}>{Math.floor((char.base_stats[stat] - 10) / 2)}</Typography>
            <Typography variant="caption" textTransform="capitalize">{stat}</Typography>
        </StatBlock>
    );
};

export default BaseStatBlock;