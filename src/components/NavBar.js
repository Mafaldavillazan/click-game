import React from "react";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">The ultimate clicking game</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link">Score: {props.score}</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link">Top Score: </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
