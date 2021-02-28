import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Subheading from "../Subheading";
import Text from "../Text";
import TextLink from "../TextLink";
import Wrapper from "../Wrapper";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";
import { map } from "ramda";

const Container = styled.div`
  display: inline;
  padding: 2rem;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPerson {
        name
        title
        bio {
         raw
        }
      }
    }
  `);

  const renderOptions = {
    renderNode: {
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <TextLink href={data.uri} rel={"noopener noreferrer"}>
          {children}
        </TextLink>
      ),
    },
  };

  return (
    <Wrapper color="#002733">
      <a name="about" aria-label="in-page anchor" href="#" />
      <Subheading>About me</Subheading>
      <Container>
        <Text>
          {console.log(data)}
          {renderRichText(data.contentfulPerson.bio, renderOptions)}
        </Text>
      </Container>
    </Wrapper>
  )
};

export default About;
