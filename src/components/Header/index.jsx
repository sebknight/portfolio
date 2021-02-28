import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Heading from "../Heading";
import Subheading from "../Subheading";
import Wrapper from "../Wrapper";

const Buttons = styled.nav`
  display: flex;
  flex-flow: row wrap;
  padding-bottom: 2rem;
`;

const Container = styled.section`
  display: flex;
  width: 100%;
  text-align: left;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  min-height: 85vh;
  background: linear-gradient(
    180deg,
    rgba(35, 201, 255, 1) 0%,
    rgba(242, 121, 246, 1) 100%
  );
`;

const Content = styled.div`
  width: 80%;
  padding-top: 1rem;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const ShadowedSubheading = styled(Subheading)`
  text-shadow: 2px 2px #002733;
`;

const Header = () => (
  <Wrapper color="white">
    <Container>
      <Content>
        <Heading>
          Hi! I&apos;m Sebastian.{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>{" "}
        </Heading>
        <ShadowedSubheading>
          I&apos;m a front-end developer based in Pōneke, Aotearoa (Wellington,
          New Zealand).{" "}
        </ShadowedSubheading>
        <Buttons>
          <Button
            background="#f279f6"
            hoverColor="#002733"
            href="#about"
            label="about me"
            aria-labelledby="in-page link"
          />
          <Button
            background="#f279f6"
            hoverColor="#002733"
            href="https://github.com/sebknight"
            title="GitHub link"
            label="GitHub"
          />
        </Buttons>
      </Content>
    </Container>
  </Wrapper>
);

export default Header;
