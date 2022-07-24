// react
import React from "react";

// styled
import styled from "styled-components";

const Footer = () => {
  return <FooterTitle>Footer</FooterTitle>;
};

export default Footer;

const FooterTitle = styled.div`
  width: 100%;
  height: 80px;
  font-size: 30px;
  position: absolute;
  bottom: 0;
  text-align: center;
  line-height: 80px;
  border-top: 1px solid gray;
  box-sizing: border-box;
`;
