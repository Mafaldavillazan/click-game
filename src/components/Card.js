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
        count: 0,
        winningCount: 0,
        selectedValues: [],
        message: ""
    };


    checkClick = id => {
        let arr = this.state.selectedValues

        if (!arr.length) {
            this.setState({ arr: this.state.selectedValues.push(id) });
            this.setState({ count: this.state.count + 1 });
            this.shuffleImages(imagesData)
        }
        else {
            const state = this.state
            if (arr.includes(id)) {
                this.setState({ selectedValues: [] });
                this.setState({ count: state.count - state.count });
                if (state.count > state.winningCount) {
                    this.setState({ winningCount: state.count })
                }
                this.setState({ message: "YOU LOOSE" })
                
            }
            else {

                this.setState({ count: state.count + 1 });
                this.setState({ arr: state.selectedValues.push(id) });

            }
        }
    };

    shuffleImages = (imagesData) => imagesData.sort(() => Math.random() - 0.5);


    render() {
        return (
            <div>
                <NavBar message={this.state.message} score={this.state.count} winningScore={this.state.winningCount} />
                <Jumbotron />
                <Wrapper>
                    {this.state.imagesData.map(results => (
                        <ImageCard
                            key={results.id}
                            checkClick={this.checkClick}
                            {...results}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }

}

export default CardDisplay;
