import React from "react";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const CharacterAboutSection = ({ char, name }) => {
    let charClassName = '';
    (char.subclass) ? charClassName = `${char.subclass} ${char.class}` : charClassName = char.class;

    return (
        <Box
            sx={{
                width: {sm: "333px", md: "999px"},
                ml: "auto",
                mr: "auto",
                display: "flex",
                flexDirection: {sm: "column", md: "row"},
                backgroundColor: "neutral.main"
            }}>
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <img src={char.portrait} alt={`Portrait of ${char.name}`} />
            </Box>
            <Box sx={{ flex: 2 }}>
                <Stack
                    sx={{
                        textAlign: "center",
                        mt: 1,
                        mb: 1
                    }}
                    spacing={1}>
                    <Typography variant="h3">{name}</Typography>
                    <Typography variant="h5">{char.player}</Typography>
                </Stack>
                <Grid
                    container
                    rowSpacing={{ sm: 1, md: 3 }}
                    textAlign="center">
                    <Grid item sm={12} md={4}>
                        <Typography>{char.level}</Typography>
                        <Typography variant="caption">Level</Typography>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Typography>{char.species}</Typography>
                        <Typography variant="caption">Species</Typography>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Typography>{charClassName}</Typography>
                        <Typography variant="caption">Class</Typography>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Typography>{char.alignment}</Typography>
                        <Typography variant="caption">Alignment</Typography>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Typography>{char.background}</Typography>
                        <Typography variant="caption">Background</Typography>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Typography>{char.age}</Typography>
                        <Typography variant="caption">Age</Typography>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Typography>{char.height}</Typography>
                        <Typography variant="caption">Height</Typography>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Typography>{char.weight}</Typography>
                        <Typography variant="caption">Weight</Typography>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Typography textTransform="capitalize">{char.eyes}</Typography>
                        <Typography variant="caption">Eyes</Typography>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Typography textTransform="capitalize">{char.hair}</Typography>
                        <Typography variant="caption">Hair</Typography>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Typography textTransform="capitalize">{char.skin}</Typography>
                        <Typography variant="caption">Skin</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default CharacterAboutSection;