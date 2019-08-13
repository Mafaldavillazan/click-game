import React from "react";
import NavBar from "./NavBar.js";
import Jumbotron from "./Jumbotron.js";
import Card from "./Card";

function BootstrapRender() {
    return (
        <div className="container">
            < NavBar />
            <Jumbotron />
            <Card />
        </div>
    );
}

export default BootstrapRender;
