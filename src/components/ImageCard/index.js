import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card" onClick={() => props.checkClick(props.id)}>
      <div className="img-container" >
        <img id={props.id} key={props.id} alt={props.name} src={props.image}/>
      </div>
    </div>
  );
}

export default ImageCard;
