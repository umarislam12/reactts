import {
  AppBar,
 
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Navabar() {
   const classes = useStyles();
return(
  <AppBar position="static">
  <Toolbar>
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
    >
      {/* <MenuIcon /> */}
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      My first Application
    </Typography>
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
    <Button>
      {" "}
      <Link style={{ color: "white" }} to="/game">
       Game
      </Link>
    </Button>
  </Toolbar>
</AppBar>
)


}