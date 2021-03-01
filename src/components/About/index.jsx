import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Subheading from "../Subheading";
import Text from "../Text";
import TextLink from "../TextLink";
import Wrapper from "../Wrapper";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

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
      <Text>
        {renderRichText(data.contentfulPerson.bio, renderOptions)}
      </Text>
    </Wrapper>
  )
};

export default About;
