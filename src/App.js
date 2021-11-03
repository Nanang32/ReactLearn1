import React from 'react';
import Router from "./router";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="container">
            <Navbar/>
            <Router/>
        </div>
    );
}

export default App;