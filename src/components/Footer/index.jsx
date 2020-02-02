import React from 'react';
import styled from 'styled-components';

const Subtext = styled.p`
  font-size: 16px;
  display: inline-block;
`;

const Container = styled.div`
  width: 100%;
  background-color: #f279f6;
  padding: 10px;
  text-align: center;
  margin: 0 auto;
  color: #002733;
`;


const Footer = () => (
  <Container>
    <Subtext>© Sebastian Maddox 2020. Built with React.</Subtext>
  </Container>

);

export default Footer;
