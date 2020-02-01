import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Heading from '../Heading';
import Subheading from '../Subheading';

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 28px 36px 28px 36px;
  width: 100vw;
  min-height: 33vh;
  background-color: #f279f6;
  align-items: baseline;
  flex-flow: column wrap;
`

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100px;
  margin-left: -20px;
`;

const Header = () => {

  return (
      <Wrapper>
        <Heading content="Hi! I'm Sebastian." />
        <Subheading content="I'm a UX-focused front-end developer based in Wellington, New Zealand."/>
        <Buttons>
          <Button content="About me"/>
          <Button content="Contact me"/>
        </Buttons>
      </Wrapper>
  );
}

export default Header;