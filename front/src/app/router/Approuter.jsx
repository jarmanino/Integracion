import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Home from "../components/pages/home"
import Catalogo from "../components/pages/catalogo"
import Admin from "../components/pages/Admin"
import Us from "../components/pages/Us"
import"../App.css";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Catalogo" element={<Catalogo/>} />
                    <Route path="/admin" element={<Admin/>} />
                </Routes>
            </div>
        </Router>
    );
}

