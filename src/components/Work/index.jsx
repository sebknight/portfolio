import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Button from '../Button';
import Img from 'gatsby-image';
import Subheading from "../Subheading";
import Wrapper from "../Wrapper";
import Text from "../Text";
import styled from "styled-components";
import TextLink from "../TextLink";
import { map } from "ramda";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

const Title = styled.h3`
  background: white;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  font-family: "Noto Serif", serif;
  text-align: center;
  padding-bottom: 2rem;
`;

const renderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <TextLink href={data.uri} rel={"noopener noreferrer"}>
        {children}
      </TextLink>
    ),
  },
};

const mapProjects = map((project) => renderProject(project.node));

const renderProject = (project) => (
  <div key={project.title}>
    {console.log(project)}
    <Img fluid={project.image.fluid} alt={project.image.description} />
    <Title>{project.title}</Title>
    <Text>{renderRichText(project.description, renderOptions)}</Text>
    <Button href={project.links.sourceLink} label={project.links.sourceLabel} />
    <Button href={project.links.liveLink} label={project.links.liveLabel} />
  </div>
);

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            title
            description {
              raw
            }
            links {
              sourceLabel
              sourceLink
              liveLabel
              liveLink
            }
            image: image {
              title
              description
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper color="#002733">
      <Subheading>Projects</Subheading>
      {mapProjects(data.allContentfulProject.edges)}
    </Wrapper>
  );
};

export default Work;
