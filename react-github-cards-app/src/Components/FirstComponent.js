import React from "react";
import styled from "styled-components";
import { GetGitHubProfile } from "../API/GitHubGet";

export const FirstComponent = () => {
  var userProfile = GetGitHubProfile("nikita-saraf");
  return <H1>This is the first component</H1>;
};

const H1 = styled.h1``;
