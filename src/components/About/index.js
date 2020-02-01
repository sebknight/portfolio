import React from 'react';
import Subsubheading from '../Subsubheading';
import Paragraph from '../Paragraph';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  height: auto;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px; 
`

const About = () => {

  return (
    <Wrapper>
      <div>
        <Subsubheading content="About me" />
      </div>
      <div>
        <Paragraph content="If I'm not building something, you can find me drawing, hanging out with animals, or enjoying Wellington's vibrant food culture." />
      </div>
    </Wrapper>
  );
}

export default About;