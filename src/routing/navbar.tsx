//@ts-nocheck
import {
  AppBar,
 
  Button,
  IconButton,
  Toolbar,

  Typography,
  
} from "@mui/material/";
import { makeStyles } from "@mui/material/";

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
   
return(
  <>
  <AppBar position="static">
  <Toolbar>
    <IconButton
      edge="start"
     
      color="inherit"
      aria-label="menu"
    >
      {/* <MenuIcon /> */}
    </IconButton>
    <Typography variant="h6" >
      My first Application
    </Typography>
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
    aria-controls='menu'>
      {" "}
      <Link style={{ color: "white" }} to="/game">
       Game
      </Link>
    </Button>
    <Button 
    // onMouseOver={handleOpenMenu}
    aria-controls='menu'>
      {" "}
      <Link style={{ color: "white" }} to="/flashcard">
       Flash cards
      </Link>
      
      
    </Button>
    <Button 
    // onMouseOver={handleOpenMenu}
    aria-controls='menu'>
      {" "}
    <Link style={{ color: "white" }} to="/currencyexchange">
       Currency exchange
      </Link>
      </Button>
  </Toolbar>
</AppBar>
{/* <Menu id='menu' anchorEl={anchorEl}
onClose={handleMenuClose}
open={Boolean(anchorEl)}>
<MenuList></MenuList>
</Menu> */}
</>
)


}
