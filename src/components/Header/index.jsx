import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Button from "../Button";
import Heading from "../Heading";
import Subheading from "../Subheading";
import Wrapper from "../Wrapper";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";
import { map } from "ramda";

const Buttons = styled.nav`
  display: flex;
  flex-flow: column wrap;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Container = styled.section`
  display: flex;
  width: 100%;
  text-align: left;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  min-height: 90vh;
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

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHeader {
        heading {
          raw
        }
        subheading 
        links {
          githubLink
          githubLabel
          linkedinLink
          linkedinLabel
        }
      }
    } 
  `);

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: children => 
        <span role="img" aria-label="wave emoji">{children}</span>
    },
  };

  return (
    <Wrapper color="white">
      <Container>
        <Content>
          <Heading>
            {renderRichText(data.contentfulHeader.heading, renderOptions)}
          </Heading>
          <ShadowedSubheading>
            {data.contentfulHeader.subheading}
          </ShadowedSubheading>
          <Buttons>
            <Button
              href="#about"
              label="about me"
              aria-labelledby="in-page link"
            />
            <Button
              href={data.contentfulHeader.links.githubLink}
              label={data.contentfulHeader.links.githubLabel}
            />
            <Button
              href={data.contentfulHeader.links.linkedinLink}
              label={data.contentfulHeader.links.linkedinLabel}
            />
          </Buttons>
        </Content>
      </Container>
    </Wrapper>
  )
};

export default Header;
