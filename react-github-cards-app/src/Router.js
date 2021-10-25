import React from "react";
import { Route } from "react-router-dom";
import { Card } from "./Components/Card";

export const Routes = () => {
  return (
    <>
      <Route path="/card" component={Card} />
    </>
  );
};
