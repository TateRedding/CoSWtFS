import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

const Header = ({ theme }) => {
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100vw",
                    height: "70px",
                    pl: "5vw",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "secondary.main",
                    "& .MuiButton-root": {
                        ml: 1,
                        mr: 1
                    }
                }} >
                <Button variant="contained" color="tertiary" onClick={() => navigate('/')}>Home</Button>
                <Button variant="contained" color="tertiary" onClick={() => navigate("/players")}>Player Characters</Button>
                <Button variant="contained" color="tertiary" onClick={() => navigate("/session-notes")}>Session Notes</Button>
            </Box>
        </ThemeProvider>
    );
};

export default Header