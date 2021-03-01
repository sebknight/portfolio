import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Button from '../Button';
import Img from 'gatsby-image';
import Subheading from "../Subheading";
import Wrapper from "../Wrapper";
import Text from "../Text";
import Divider from '../Divider';
import styled from "styled-components";
import TextLink from "../TextLink";
import { map } from "ramda";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

const Container = styled.div`
  margin: 0 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 0 auto;
  padding-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h3`
  background: white;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  font-family: "Noto Serif", serif;
  text-align: center;
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

const renderProject = (project) => (
  <Container key={project.title}>
    <ImgContainer>
      <Img fluid={project.image.fluid} alt={project.image.description} />
    </ImgContainer>
    <Title>{project.title}</Title>
    <Text>{renderRichText(project.description, renderOptions)}</Text>
    <ButtonContainer>
      <Button href={project.links.sourceLink} label={project.links.sourceLabel} />
      <Button href={project.links.liveLink} label={project.links.liveLabel} />
    </ButtonContainer>
    <br />
    <Divider />
  </Container>
);

const mapProjects = map((project) => renderProject(project.node));

const Projects = () => {
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
              fluid(maxWidth: 600) {
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

export default Projects;
