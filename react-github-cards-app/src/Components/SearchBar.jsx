import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSearchAlt as SearchIcon } from "react-icons/bi";
import { GetGitHubProfile } from "../API/GitHubGet";

export const SearchBar = () => {
  const [userData, setUserData] = useState();

  const ProfileData = async () => {
    var { data } = await GetGitHubProfile("nikita-saraf");
    return data;
  };

  const handleOnClick = () => {
    //ToDo : add logic to add userData to card
    console.log(userData);
  };

  useEffect(() => {
    (async () => {
      var data = await ProfileData();
      setUserData(data);
    })();
  }, []);

  return (
    <SearchBarContainer>
      <StyledSearchBar></StyledSearchBar>
      <button onClick={handleOnClick}>
        <StyledSearchIcon></StyledSearchIcon>
      </button>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly; ;
`;

const StyledSearchBar = styled.input`
  height: 100%;
  border-radius: 5px;
  border: 0px;
  background-color: grey;
`;

const StyledSearchIcon = styled(SearchIcon)`
  height: 100%;
`;
