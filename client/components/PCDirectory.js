import React from "react";
import Box from "@mui/system/Box";
import CharacterCard from "./CharacterCard";
import Typography from "@mui/material/Typography";
import characters from "../character_constants";

const PCDirectory = () => {
    return (
        <>
            <Typography textAlign="center" variant="h2">Player Characters</Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "center"
            }}>{
                    Object.keys(characters).map((char, index) => {
                        return (
                            <CharacterCard key={index} char={char} />
                        );
                    })
                }
            </Box>
        </>
    );
};

export default PCDirectory;