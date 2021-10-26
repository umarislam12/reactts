//@ts-nocheck
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material/";
import AppleIcon from '@mui/icons-material/Apple';
import { makeStyles } from "@mui/material/";
import { Nav, StyledNavbar } from "../Components/styles/Navbar.styled";
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));
export default function Navabar() {
  // const classes = useStyles();

  return (
    <>
      {/* <StyledNavbar> */}
      {/* <AppBar position="static"> */}
      <Nav>
        {/* <Toolbar> */}
          <IconButton edge="start" color="inherit" aria-label="menu">
            <AppleIcon />
          </IconButton>
          <Typography variant="h6">My first Application</Typography>
          <Button>
            {" "}
            <Link style={{ color: "white" }} to="/form">
              Form
            </Link>
          </Button>
          <Button>
            {" "}
            <Link style={{ color: "white" }} to="/hello">
              Hello
            </Link>
          </Button>
          <Button>
            {" "}
            <Link style={{ color: "white" }} to="/authentication">
              signup
            </Link>
          </Button>
          <Button>
            {" "}
            <Link style={{ color: "white" }} to="/products">
              Products
            </Link>
          </Button>
          <Button>
            {" "}
            <Link style={{ color: "white" }} to="/invoice">
              Invoice
            </Link>
          </Button>

          <Button>
            {" "}
            <Link style={{ color: "white" }} to="/todos">
              Todos
            </Link>
          </Button>
          <Button>
            {" "}
            <Link style={{ color: "white" }} to="/leaves">
              Leaves
            </Link>
          </Button>
          <Button
            // onMouseOver={handleOpenMenu}
            aria-controls="menu"
          >
            {" "}
            <Link style={{ color: "white" }} to="/game">
              Game
            </Link>
          </Button>
          <Button
            // onMouseOver={handleOpenMenu}
            aria-controls="menu"
          >
            {" "}
            <Link style={{ color: "white" }} to="/flashcard">
              Flash cards
            </Link>
          </Button>
          <Button
            // onMouseOver={handleOpenMenu}
            aria-controls="menu"
          >
            {" "}
            <Link style={{ color: "white" }} to="/currencyexchange">
              Currency exchange
            </Link>
          </Button>
          <Button
            // onMouseOver={handleOpenMenu}
            aria-controls="menu"
          >
            {" "}
            <Link style={{ color: "white" }} to="/landingpage">
              Landing page
            </Link>
          </Button>
        {/* </Toolbar> */}
      </Nav>
      {/* </AppBar> */}
      {/* <Menu id='menu' anchorEl={anchorEl}
onClose={handleMenuClose}
open={Boolean(anchorEl)}>
<MenuList></MenuList>
</Menu> */}

      {/* </StyledNavbar> */}
    </>
  );
}
