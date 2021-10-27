import React from "react";
import { StyledCard } from "../styles/Card.styled";
import src from "./images/biker.svg"
import biker from "./images/biker.svg"
import paperish from "./images/paperish.svg"
function Card({ item: { id, title, body, image } }) {
  // const src=`./images/${image}`
// console.log(`./images/${image}`)
// const {biker,paperish}=source;
  //const g=image.forEach(i=>i);
  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={src} height="20px" width="20px"/>
      </div>
    </StyledCard>
  );
}

export default Card;
