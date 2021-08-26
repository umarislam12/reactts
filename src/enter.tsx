import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Hello from "./hello";


export default function Enter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Enter</Link>
            </li> */}
            <li>
              <Link to="/hello">Hello</Link>
            </li>
           
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/">
            <Entered/>
          </Route> */}
          <Route path="/hello">
            <Hello name="umar"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

