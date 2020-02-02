import React from 'react';
import styled from 'styled-components';
import Column from '../Column';
import Button from '../Button';
import Heading from '../Heading';
import Subheading from '../Subheading';
import Wrapper from '../Wrapper';

const Buttons = styled.nav`
  margin-left: -20px;
`;

const Container = styled(Column)`
  margin-top: 25px;
  text-align: left;
`;

const Header = () => (
  <Wrapper color="white">
    <Container>
      <Heading>
        Hi! I&apos;m Sebastian.
        {' '}
        <span role="img" aria-label="wave emoji">👋</span>
        {' '}
      </Heading>
      <Subheading>I&apos;m a front-end developer based in Pōneke, Aotearoa (Wellington, New Zealand). </Subheading>
      <Buttons>
        <Button background="#f279f6" hoverColor="#002733" href="#about">About me</Button>
        <Button background="#f279f6" hoverColor="#002733" href="#about">Contact me</Button>
        <Button
          background="#f279f6"
          hoverColor="#002733"
          href="https://github.com/sebknight"
          target="_blank"
          title="GitHub link"
          rel="noopener"
        >
GitHub
        </Button>
      </Buttons>
    </Container>
  </Wrapper>
);

export default Header;
