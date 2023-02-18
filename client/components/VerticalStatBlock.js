import React from "react";
import Typography from "@mui/material/Typography";
import StatBlock from "./StatBlock";

const VerticalStatBlock = ({ stat, name }) => {
    return (
        <StatBlock
            sx={{
                flexDirection: "column",
                alignItems: "center"
            }}>
            <Typography variant="h6">{stat}</Typography>
            <Typography variant="caption" textTransform="capitalize">{name}</Typography>
        </StatBlock>
    );
};

export default VerticalStatBlock;