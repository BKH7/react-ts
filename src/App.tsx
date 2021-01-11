import React, { Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Home, Login } from "./pages";

export default function App() {
  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Fragment>
  );
}
