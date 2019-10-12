import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  h1 {
    color: blue;
  }
  h2 {
    color: skyblue;
  }
`;
const Header = () => (
  <StyledHeader>
    <h1>Calendar App</h1>
    <h2>Jobsity Coding Challenge</h2>
  </StyledHeader>
);

export default Header;
