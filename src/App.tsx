import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Routes, Route} from "react-router";
import {publicRoutes} from "./routes/routes";
function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Routes>
                {publicRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={route.element}/>
                ))}
            </Routes>
        </div>
    );
}

export default App;
