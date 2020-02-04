import React from 'react';
import styled from 'styled-components';
import Column from '../Column';
import Button from '../Button';
import Heading from '../Heading';
import Subheading from '../Subheading';
import Wrapper from '../Wrapper';

const Buttons = styled.nav`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-items: space-evenly;
`;

const Container = styled(Column)`
  margin-top: 25px;
  text-align: left;
`;

const HeaderSubheading = styled(Subheading)`
  text-shadow: 2px 2px #002733;
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
      <HeaderSubheading>I&apos;m a front-end developer based in Pōneke, Aotearoa (Wellington, New Zealand). </HeaderSubheading>
      <Buttons>
        <Button background="#f279f6" hoverColor="#002733" href="#about" label="About me" />
        <Button background="#f279f6" hoverColor="#002733" href="#about" label="Contact me" />
        <Button
          background="#f279f6"
          hoverColor="#002733"
          href="https://github.com/sebknight"
          target="_blank"
          title="GitHub link"
          rel="noopener"
          label="GitHub"
        />
      </Buttons>
    </Container>
  </Wrapper>
);

export default Header;
