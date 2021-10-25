import React from "react";
import { Logo, Nav } from "../styles/Navbar.styled";
import { Container } from "../styles/Container.styled";
import { Button } from "../styles/Button.styled";

function Header() {
  return (
    <Nav>
      <Container>
        <Nav>
          <Logo src="./images/telescope.png" alt="" />
          <Button>Try it Free</Button>
        </Nav>
      </Container>
    </Nav>
  );
}

export default Header;
