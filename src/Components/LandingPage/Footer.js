import { Flex } from "../styles/Flex.styled";
import Logan from "./images/Logan";
import { Container } from "../styles/Container.styled";
import {StyledFooter} from "../styles/Footer.styled"
import SocialIcons from "./SocialIcons";
const Footer = () => {
  return (
    <StyledFooter>
    <Container>
      <Logan className="logo-spin" />
      <Flex>
        <ul>
          <li>Generate meaningful discussions with your audience and build a strong, loyal community. </li>
          <li>+1-545-122-123</li>
          <li>abc@gmail.cm</li>
        </ul>
        <ul>
          <li>About us</li>
          <li> what we do</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
        <SocialIcons/>
      </Flex>
      <p>&copy; 2021 umardevapps. all rights reserved</p>
    </Container>
    </StyledFooter>
  );
};

export default Footer;
