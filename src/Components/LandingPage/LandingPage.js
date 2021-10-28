import React from "react";
import Header from "./Header";
import content from "./content";
import Card from "./Card";
import { Container } from "../styles/Container.styled";
import Footer from "./Footer"
export default function LandingPage() {
  return (
    <div>
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}

      </Container>
      <Footer/>
    </div>
  );
}
