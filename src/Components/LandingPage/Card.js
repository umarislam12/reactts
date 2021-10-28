import React from "react";
import { StyledCard } from "../styles/Card.styled";

import Illustration from "./images/Illustration-mockups.svg";
import biker from "./images/biker.svg";
import paperish from "./images/paperish.svg";
function Card({ item: { id, title, body, image } }) {
  // console.log(src)
  // console.log(paperish)
  // const src=`./images/${image}`
  console.log(`${image}`);
  // const {biker,paperish}=source;
  //const g=image.forEach(i=>i);
  return (
    <StyledCard layout={id%2===0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        {image === "biker.svg" ? (
          <img src={biker} height="100px" width="100px" />
        ) : image === "paperish.svg" ? (
          <img src={paperish} height="100px" width="100px" />
        ) : image === "Illustration-mockups.svg" ? (
          <img src={Illustration} height="100px" width="100px" />
        ) : (
          ""
        )}
        {/* <img src={src} height="20px" width="20px"/> */}
      </div>
    </StyledCard>
  );
}

export default Card;
