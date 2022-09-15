import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const stage = document.getElementById("stage");
const appRoot = ReactDOM.createRoot(stage);

appRoot.render(
    <Router>
        <App />
    </Router>
)