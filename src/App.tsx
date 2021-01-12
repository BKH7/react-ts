import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Home, Login } from "./pages";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}
