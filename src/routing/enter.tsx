// @ts-nocheck
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import { FilterableProductTable } from "../Components/ProductsTable/filterableProductTable";
import Authenticationforms from "../Components/Authenticaion/authenticationForms";
import "./enter.css";
import Hello from "../hello";
import NotFound from "../Components/Home/notFound";

import Invoice from "../Components/Invoicing/Invoice";
import Todos from "../Components/Todo/Todos";
import Leaves from "../Leaves/Leaves";
import Product from "../Components/ProductsTable/product";
import Navbar from "./navbar";
import Game from "../Components/Game/Game";
import FlashCard from "../Components/Game/FlashCard";
import Form from "../Components/Form/Form";
export default function Enter() {
  const [login, setLogin] = useState(false)
  return (
    <Router>
      <div>
        <Navbar />
<button onClick={()=>setLogin(!login)}>{login?"logout":"login"}</button>
        <Switch>
          <Route path="/authentication">
            <Authenticationforms />
          </Route>
          <Route path="/form">
            <Form name="umar" />
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
          <Route path="/leaves">
            <Leaves />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/flashcard">
            <FlashCard />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
function Products() {
  let match = useRouteMatch();

  // console.log("routeMatch in Products",match);

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

      {/* The Products page has its own <Switch> with more routes
          that build on the /Products URL path. You can think of the
          2nd <Route> here as an "index" page for all product types, or
          the page that is shown when no product type is selected */}
      <Switch>
        <Route path={`${match.path}/:productId`}>
          <ProductType />
        </Route>

        <Route path={match.path}>
          <h3>Please select a category</h3>
        </Route>
      </Switch>
    </div>
  );
}
function ProductType() {
  // console.log(useParams())

  let { productId }: any = useParams();
  let location: any = useLocation();
  let match = useRouteMatch();
  // console.log("params",productId);
  console.log("location", location);
  // console.log("userouteMatch in productType",match)
  if (productId === "accessories") {
    return (
      <div>
        <Switch>
          <Route exact path={`${match.path}`}>
            <FilterableProductTable products={products} productId={productId} />
          </Route>
          <Route exact path={`${match.path}/:productName`}>
            <ProductName />
          </Route>
        </Switch>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Here is your selected Products</h1>
        <h3>Requested product ID: {productId}</h3>
      </div>
    );
  }
}
function ProductName() {
  return (
    <div>
      <Product />
    </div>
  );
}
interface PRODUCT {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}
export const products: PRODUCT[] = [
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
