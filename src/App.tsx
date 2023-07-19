import React, { useState } from 'react';

import { Card } from "./components/Card";

import './App.css';

function App() {
    const [checked, setChecked] = useState(false)
    const LABEL = 'Flood zone 3'


    return (
        <div className="App">
            <Card checked={checked} onChange={setChecked} label={LABEL}/>
        </div>
    );
}

export default App;
