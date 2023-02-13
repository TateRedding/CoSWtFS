import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from './components/Header';
import Home from './components/Home';
import PCDirectory from "./components/PCDirectory";
import SessionNotesDirectory from "./components/SessionNotesDirectory";
import CharacterSheet from './components/CharacterSheet';
import Box from "@mui/material/Box";

const App = () => {

    const theme = createTheme({
        palette: {
            black: {
                main: "#000000"
            },
            primary: {
                main: "#231230"
            },
            secondary: {
                main: "#582c51"
            },
            tertiary: {
                main: "#a08a99"
            },
            neutral: {
                main: "#b5b5b5"
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{ backgroundColor: "black.main" }} >
                <Header theme={theme} />
                <Box
                    sx={{
                        mt: "70px",
                        mr: "auto",
                        ml: "auto",
                        pt: 5,
                        width: "85vw",
                        minHeight: "calc(100vh - 70px)",
                        backgroundColor: "tertiary.main",
                        borderLeft: 30,
                        borderRight: 30,
                        borderColor: "primary.main"
                    }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/players" element={<PCDirectory />} />
                        <Route path="/players/:name" element={<CharacterSheet />} />
                        <Route path="/session-notes" element={<SessionNotesDirectory />} />
                    </Routes>
                </Box>
            </Box>
        </ThemeProvider>
    )
};

const container = document.getElementById("root");
export const root = createRoot(container);
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);

export default App;