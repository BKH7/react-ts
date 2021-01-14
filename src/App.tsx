import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Sidebar } from "@/layouts";
import { Home, Login, NotFound, NotAuthorization } from "@/pages";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="h-screen flex flex-row flex-wrap">
        <Sidebar />
        <Switch>
          <Route key="home" exact path="/" component={Home} />
          <Route key="user" path="/user" component={Login} />
          <Route path="/not-authorization" component={NotAuthorization} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
