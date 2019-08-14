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
        selectedValues: []
    };


    checkClick = id => {
        let arr = this.state.selectedValues


        //Why is not getting though the for loop

        if (!arr.length) {
            this.setState({ arr: arr.push(id) });
            this.setState({ count: this.state.count + 1 });
        }
        else {
            for (let i = 0; i < arr.length; i++) {
            
                if (id !== arr[i]) {
                    console.log("Not there")
                    console.log(this.state.count)
                    this.setState({ count: this.state.count + 1 });
                    this.setState({ arr: this.state.selectedValues.push(id) });
                }
                else {
                    console.log("Click two times")
                    console.log(this.state.count)
                    this.setState({ count: this.state.count * 0 });
                    this.setState({ arr: [] });
                }
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
                <NavBar score={this.state.count} />
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
