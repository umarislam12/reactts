import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Signup from "../functionalComponents/signup";
import "./enter.css"
import Hello from "../hello";
import NotFound from '../functionalComponents/notFound'
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
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

export default function Enter() {
  const classes = useStyles();
  return (
    <Router>
      <div >


      <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      {/* <MenuIcon /> */}
    </IconButton>
    <Typography variant="h6" className={classes.title}>
     My first Application
    </Typography>
    <Button  variant="outlined" color="secondary"> <Link  to="/hello" >Hello</Link></Button>
    <Button variant="outlined" color="secondary"> <Link to="/signup">SignUp</Link></Button>
    <Button variant="outlined" color="secondary"> <Link to="/Products">Products</Link></Button>
  </Toolbar>
</AppBar>
        {/* <nav>
          <ul className="nav">
           
       <button>
             
              </button>
            <li>
              <Link to="/signup">signup</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/hello">
            <Hello name="umar"/>
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}
function Products() {
  let match = useRouteMatch();
console.log(match); 
  return (
    <div>
      <h2>Topics </h2>

      <ul>
        <li>
          <Link to={`${match.url}/accessories`}>Accessories</Link>
        </li>
        <li>
          <Link to={`${match.url}/essentials`}>
            Essentials
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:productId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a category</h3>
        </Route>
      </Switch>
    </div>
  );
}

 function Topic() {
  // console.log(useParams())
  let { productId }:any = useParams();
  return <div>
    <h1>Here is your selected Products</h1>
    <h3>Requested product ID: {productId}</h3></div>;
}

