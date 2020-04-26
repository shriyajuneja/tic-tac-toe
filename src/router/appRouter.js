import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../views/HomePage";
import ChooseSide from "../views/ChooseSide";
import GameScreen from "../views/GameScreen";

function Container() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/choose-side" component={ChooseSide} />
      <Route exact path="/game" component={GameScreen} />
    </Switch>
  );
}
export default Container;
