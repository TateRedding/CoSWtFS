import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Curse of Strahd with the FoCo Squad</h1>
                <h2>Welcome to the official website for our Curse of Strahd campaign!</h2>
            </main>
        </>
    )
};

const container = document.getElementById("root");
export const root = createRoot(container);
root.render(<Home />);

export default Home;