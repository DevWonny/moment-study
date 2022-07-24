// react
import React from "react";

// styled
import styled from "styled-components";

const Header = () => {
  return <Title>Header</Title>;
};

export default Header;

const Title = styled.div`
  width: 100%;
  height: 100px;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
`;
