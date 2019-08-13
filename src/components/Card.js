import React from "react";

function Card() {
    return (
        <div className="card mb-4">
            <div className="card-header">
                <h3>Card title</h3>
            </div>
            <div className="card-body">
                < Random/>
            </div>
        </div>
    );
}

//Creating a class that changes from something to random
class Random extends React.Component {
    state = {
        count: 0
    };
    selectRandom = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: Math.floor((Math.random() * 10) + 1) });
        
    };


    // The render method returns the JSX that should be rendered
    render() {
        return (
            <div className="card text-center">
                <div className="card-header bg-primary text-white">
                    Click Counter!
                </div>
                <div className="card-body">
                    <p className="card-text">Click Count: {this.state.count}</p>
                    <button className="btn btn-primary" onClick={this.selectRandom}>
                        Increment
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;
