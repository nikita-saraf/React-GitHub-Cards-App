import React from "react";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";

export const Card = () => {
  return (
    <>
      <SearchBar></SearchBar>
      <CardandCaption />
    </>
  );
};

const CardandCaption = () => {
  return (
    <div>
      <br />
      <StyledCard>card</StyledCard>
      <StyledCardCaption>caption</StyledCardCaption>
    </div>
  );
};

const StyledCard = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 5px;
  background-color: blue;
`;

const StyledCardCaption = styled.div`
  width: 200px;
  height: 30px;
  border-radius: 5px;
  background-color: pink;
`;
