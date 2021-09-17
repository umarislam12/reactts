// @ts-nocheck
import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,Redirect,
  useParams} from "react-router-dom";
import FilterableProductTable from "../Components/ProductsTable/filterableProductTable";
import { makeStyles } from "@material-ui/core/styles";
import Authenticationforms from "../Components/Authenticaion/authenticationForms";
import "./enter.css";
import Hello from "../hello";
import NotFound from "../Components/notFound";
import {
  AppBar,
  Breadcrumbs,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Invoice from "../Components/Invoicing/Invoice"
import Todos from "../Components/Todos";



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
      <div>
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
          
          </Toolbar>
        </AppBar>

    
        <Switch>
          <Route path="/authentication">
            <Authenticationforms />
          </Route>
          <Route path="/hello">
            <Hello name="umar" />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/invoice">
            <Invoice />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route component={NotFound} />
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
      <h2>types of products </h2>

      <ul>
        <li>
          <Link to={`${match.url}/accessories`}>Accessories</Link>
        </li>
        <li>
          <Link to={`${match.url}/essentials`}>Essentials</Link>
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

  let { productId }: any = useParams();
  {
    if (productId === "accessories") {
      return <FilterableProductTable products={PRODUCTS} />;
    } else {
      return (
        <div>
          <h1>Here is your selected Products</h1>
          <h3>Requested product ID: {productId}</h3>
        </div>
      );
    }
  }
}
type PRODUCTS = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};
export const PRODUCTS: PRODUCTS[] = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

