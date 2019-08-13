import React from "react";
import imagesData from "../paints.json";
import ImageCard from "./ImageCard";
import Wrapper from "./Wrapper";


//Creating a class that changes from something to random
class CardDisplay extends React.Component {
    state = {
        imagesData,
        count:0
    };

    //Every time you click it out increments
    addScore = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count)
    };

    render() {
        return (
          <Wrapper>
            {this.state.imagesData.map(results => (
              <ImageCard
                {...results}
                onClick={this.addScore}
                />
            ))}
          </Wrapper>
        );
      }

}

export default CardDisplay;
