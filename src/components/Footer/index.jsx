import React from "react";
import styled from "styled-components";
import TextLink from "../TextLink";

const Subtext = styled.p`
  font-size: 16px;
  display: inline-block;
`;

const Container = styled.div`
  width: 100%;
  background-color: #f279f6;
  text-align: center;
  margin: 0 auto;
  color: #002733;
`;

const Footer = () => (
  <Container>
    <Subtext>
      © Sebastian Maddox 2021.{" "} 
      <TextLink
        href="https://github.com/sebknight/portfolio"
        target="_blank"
        rel="noopener"
        footer
      >
        View source on GitHub.
      </TextLink>
    </Subtext>
  </Container>
);

export default Footer;
