import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Home from './components/Home';
import PCDirectory from "./components/PCDirectory";
import SessionNotesDirectory from "./components/SessionNotesDirectory";
import CharacterSheet from './components/CharacterSheet';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path="/players" element={<PCDirectory />} />
                    <Route path="/players/:name" element={<CharacterSheet />} />
                    <Route path="/session-notes" element={<SessionNotesDirectory />} />
                </Routes>
            </main>
        </>
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