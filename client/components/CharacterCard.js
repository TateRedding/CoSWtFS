import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import characters from "../character_constants";

const CharacterCard = ({ char }) => {
    const navigate = useNavigate();
    const [hovering, setHovering] = useState(false);

    return (
        <Paper
            elevation={hovering ? 24 : 3}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                ml: 1,
                mr: 2,
            }}
            onClick={() => navigate(`/players/${char}`)}
            onMouseOver={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            <img src={characters[char].portrait} alt={`Portrait of ${char}`} />
            <Typography variant="h5">{char}</Typography>
        </Paper>
    );
};

export default CharacterCard;