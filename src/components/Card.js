import React from "react";
import imagesData from "../paints.json";
import ImageCard from "./ImageCard";
import Wrapper from "./Wrapper";



//Creating a class that changes from something to random
class CardDisplay extends React.Component {
    state = {
        imagesData
    };
    // selectRandom = () => {
    //     // We always use the setState method to update a component's state
    //     this.setState({ count: Math.floor((Math.random() * 10) + 1) });  
    // };
    render() {
        return (
          <Wrapper>
            {this.state.imagesData.map(results => (
              <ImageCard
                {...results}
                />
            ))}
          </Wrapper>
        );
      }

}

export default CardDisplay;
