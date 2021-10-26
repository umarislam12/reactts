import React from "react";
import { Image, Logo, Nav } from "../styles/Navbar.styled";
import { Container } from "../styles/Container.styled";
import { Button } from "../styles/Button.styled";
import { Flex } from "../styles/Flex.styled";

import { MdCloseFullscreen } from "react-icons/md";

function Header() {
  return (
    <Nav>
      <Container>
        <Nav>
          {/* // <MdCloseFullscreen /> */}
          {/* <Logo src="./images/logo.svg" alt="" /> */}

          <Logo src="./images/logo.svg" height="87" width="100" alt="" />

          <Button>Try it Free</Button>
        </Nav>
        {/* Align something side by side */}
        <Flex>
          {/* first flex item */}
          <div>
            <h1>Build a community your fans will love</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <Button bg="#ff0099" color="#fff">
              {" "}
              Get started for free
            </Button>
          </div>
          {/* second flex item */}
          <Image
            src="./images/illustration-mockups.svg"
            alt=""
            height="400px"
            width="400px"
          />
        </Flex>
      </Container>
    </Nav>
  );
}

export default Header;
