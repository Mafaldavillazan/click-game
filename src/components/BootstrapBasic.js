import React from "react";
import NavBar from "./NavBar.js";
import Jumbotron from "./Jumbotron.js";
import Card from "./Card.js";

function BootstrapRender() {
    return (
        <div className="container">
            < NavBar />
            <Jumbotron />
            <Card />
            <Card />
        </div>
    );
}

export default BootstrapRender;
