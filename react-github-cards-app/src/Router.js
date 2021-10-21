import React from "react";
import { Route } from "react-router-dom";
import { FirstComponent } from "./Components/FirstComponent";
import { SecondComponent } from "./Components/SecondComponent";

export const Routes = () => {
  return (
    <>
      <Route path="/first" component={FirstComponent} />
      <Route path="/second" component={SecondComponent} />
    </>
  );
};
