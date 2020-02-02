import React from 'react';
import styled from 'styled-components';
import Subheading from '../Subheading';
import Paragraph from '../Paragraph';
import Wrapper from '../Wrapper';

const Container = styled.div`
  margin: 0 auto;

  // @media (min-width: 1200px) {
  //   width: 80%;
  // }
`;

const About = () => (
  <Wrapper color="#002733">
    <div>
      <a name="about" href="#" />
      <Subheading content="About me" />
    </div>
    <Container>
      <Paragraph content="I currently work at BNZ Digital as a front-end developer.
        If I'm not building something, you can find me drawing, hanging out with animals,
        or enjoying Wellington's vibrant food culture."
      />
      <br />
      <Paragraph content="Got a project? Drop me a line at sekm @ protonmail dot com." />
    </Container>
  </Wrapper>
);

export default About;
