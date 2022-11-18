import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../COMPONENTS/Navbar";
import Footer from "../COMPONENTS/Footer";
import Home from "./Home";
import Error from "./Error404";
import Donations from "./Donations";
export default function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/donations">
          <Donations />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
