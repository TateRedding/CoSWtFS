import React from "react";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const OverviewTab = ({ char, name }) => {
    let charClassName = '';
    (char.subclass) ? charClassName = `${char.subclass} ${char.class}` : charClassName = char.class;

    const GridItem = ({ stat, label }) => {
        return (
            <>
                <Typography variant="h6" 
                sx={{
                    textTransform: "capitalize",
                    width: "100%",
                    borderBottom: 1,
                    borderColor: "divider"
                }}>{stat}</Typography>
                <Typography variant="caption">{label}</Typography>
            </>
        );
    };

    return (
        <Box
            sx={{
                width: { sm: "400px", md: "1200px" },
                ml: "auto",
                mr: "auto",
                p: 3,
                display: "flex",
                flexDirection: { sm: "column", md: "row" },
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
                    <Typography variant="h3">{char.player}</Typography>
                    <Typography variant="h5">Player</Typography>
                </Stack>
                <Grid
                    container
                    rowSpacing={{ sm: 1, md: 3 }}
                    textAlign="center">
                    <Grid item sm={12} md={4}>
                        <GridItem stat={char.level} label="Level" />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <GridItem stat={char.species} label="Species" />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <GridItem stat={charClassName} label="Class" />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <GridItem stat={char.alignment} label="Alignment" />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <GridItem stat={char.background} label="Background" />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <GridItem stat={char.age} label="Age" />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <GridItem stat={char.height} label="Height" />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <GridItem stat={char.weight} label="Weight" />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <GridItem stat={char.eyes} label="Eyes" />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <GridItem stat={char.hair} label="Hair" />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <GridItem stat={char.skin} label="Skin" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default OverviewTab;