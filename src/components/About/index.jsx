import React from "react";
import styled from "styled-components";
import Subheading from "../Subheading";
import Text from "../Text";
import TextLink from "../TextLink";
import Wrapper from "../Wrapper";

const Container = styled.div`
  display: inline;
  padding: 2rem;
`;

const About = () => (
  <Wrapper color="#002733">
    <a name="about" aria-label="in-page anchor" href="#" />
    <Subheading>About me</Subheading>
    <Container>
      <Text>
        I&apos;m a web designer and developer with a strong understanding of UX
        principles and a focus on accessibility. I believe in approaching
        problems with empathy, resilience, and a sense of humour.
        <br />
        <br />
        If I&apos;m not building something, you can find me drawing, hanging out
        with animals, or enjoying Wellington&apos;s vibrant food culture.
      </Text>
      <br />
      <Text>
        Got a project? Drop me a line at sebastian @ sebastianmaddox dot com, or
        contact me on{" "}
        <TextLink href="https://nz.linkedin.com/in/sebastian-maddox-ab213216b">
          LinkedIn.
        </TextLink>
      </Text>
    </Container>
  </Wrapper>
);

export default About;
