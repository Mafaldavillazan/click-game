import React from "react";
import imagesData from "../paints.json";
import ImageCard from "./ImageCard";
import Wrapper from "./Wrapper";
import NavBar from "./NavBar.js";
import Jumbotron from "./Jumbotron.js";


//Creating a class that changes from something to random
class CardDisplay extends React.Component {
    state = {
        imagesData,
        count: 0
    };


    addScore = () => {
        this.setState({ count: this.state.count + 1 });
        //How can I call the element outside to change it
        console.log(this.state.count)
    };

    render() {
        return (
            <div>
                <NavBar score={this.state.count} />
                <Jumbotron />
                <Wrapper>
                    {this.state.imagesData.map(results => (
                        <ImageCard
                            {...results}
                            key={results.id}
                            onClick={this.addScore}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }

}

export default CardDisplay;
