import React from 'react';
import styled from 'styled-components';
import Subheading from '../Subheading';
import Paragraph from '../Paragraph';
import TextLink from '../TextLink';
import Wrapper from '../Wrapper';

const Container = styled.div`
  display: inline;
`;

const About = () => (
  <Wrapper color="#002733">
    <a name="about" href="#" />
    <Subheading>About me</Subheading>
    <Container>
      <Paragraph>
        I currently work at BNZ Digital as a front-end developer.
        <br />
        <br />
        If I&apos;m not building something, you can find me drawing, hanging out with animals,
        or enjoying Wellington&apos;s vibrant food culture.
      </Paragraph>
      <br />
      <Paragraph>
        Got a project? Drop me a line at sekm @ protonmail dot com, or contact me on
        {' '}
        <TextLink
          href="https://nz.linkedin.com/in/sebastian-maddox-ab213216b"
          target="_blank"
          rel="noopener"
        >
        LinkedIn.
        </TextLink>
      </Paragraph>
    </Container>
  </Wrapper>
);

export default About;
