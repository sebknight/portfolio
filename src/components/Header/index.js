import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 28px 36px 28px 36px;
  width: 100%;
  height: 500px;
  background-color: #f279f6;
  // justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: column;
`

const Heading = styled.h1`
  width: 80%;
  color: white;
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  font-size: 72px;
`

const Subheading = styled.h2`
  width: 80%;
  color: white;
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  font-size: 36px;
`

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

`;

const Header = () => {

  return (
      <Wrapper>
        <Heading>
          Hi! I'm Sebastian.
        </Heading>
        <Subheading>
          I'm a UX-focused front-end developer based in Wellington, New Zealand.
        </Subheading>
        <Buttons>
          <Button content="Contact me"/>
          <Button content="About me"/>
        </Buttons>
      </Wrapper>
  );
}

export default Header;