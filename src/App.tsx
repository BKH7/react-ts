import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header, Sidebar } from "./layouts";
import { Home, Login } from "./pages";

export default function App() {
  return (
    <>
      <Header />
      <div className="h-screen flex flex-row flex-wrap">
        <Sidebar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/user" component={Login} />
        </Switch>
      </div>
    </>
  );
}
