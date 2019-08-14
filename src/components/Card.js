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
        for (let i = 0; i < arr.length; i++) {
            console.log(id)
            console.log(arr)
            if (id !== arr[i]) {
                this.setState({ count: this.state.count + 1 });
                this.setState({ selectedValues: this.state.selectedValues.push(id) })
            }
            else {
                this.setState({ count: this.state.count * 0 });
                this.setState({ selectedValues: this.state.selectedValues.empty() })
            }
        }
    };

    render() {
        return (
            <div>
                <NavBar score={this.state.count} />
                <Jumbotron />
                <Wrapper>
                    {this.state.imagesData.map(results => (
                        <ImageCard
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
