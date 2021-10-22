import React from "react";
import { Route } from "react-router-dom";
import { Card } from "./Components/Card";
import { SecondComponent } from "./Components/SecondComponent";

export const Routes = () => {
  return (
    <>
      <Route path="/second" component={SecondComponent} />
      <Route path="/card" component={Card} />
    </>
  );
};
