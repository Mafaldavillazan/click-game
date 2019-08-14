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
        selectedValues: []
    };

    checkClick = id => {
        let arr = this.state.selectedValues

        if (!arr.length) {
            this.setState({ arr: this.state.selectedValues.push(id) });
            this.setState({ count: this.state.count + 1 });
        }
        else {
            const state = this.state
            if (arr.includes(id)) {
                this.setState({ arr: [] });
                this.setState({ count: state.count - state.count });
                this.setState({ winningCount: state.count})

            }
            else {
                this.setState({ count: state.count + 1 });
                this.setState({ arr: state.selectedValues.push(id) });
            }
        }
    };

    // shuffleImages = imagesData => {
    //     let i = imagesData.length - 1
    //     while (i > 0) {
    //         //Get random number and change its position
    //         const a = Math.floor(Math.random()* (i+1));
    //         let randomSituation = imagesData[i];
    //         imagesData[i]= imagesData[a];
    //         randomSituation
    //         i--
    //     }
    //     return imagesData
    // }

    render() {
        return (
            <div>
                <NavBar score={this.state.count} winningScore={this.state.winningCount} />
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
