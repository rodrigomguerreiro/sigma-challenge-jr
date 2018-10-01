// @flow

import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home";
import Presidentes from "./Presidentes";
import Governador from "./Governador";
import Senador from "./Senador";

import "tabler-react/dist/Tabler.css";
import DepFederal from "./DepFederal";
import DepEstadual from "./DepEstadual";


function Main() {
  return (

    <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/presidente" component={Presidentes} />
    <Route exact path="/governador" component={Governador} />
    <Route exact path="/senador" component={Senador} />
    <Route exact path="/dep-federal" component={DepFederal} />
    <Route exact path="/dep-estadual" component={DepEstadual} />
    <Redirect from="/" to="/home" />
  </Switch>

   
  );
}

export default Main;
