import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container"  onClick={props.onClick}>
        <img key={props.id} alt={props.name} src={props.image}/>
      </div>
    </div>
  );
}

export default ImageCard;
