import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Subheading from '../Subheading';
import Wrapper from '../Wrapper';
import Paragraph from '../Paragraph';
import styled from 'styled-components';
import TextLink from '../TextLink';
import { path, pipe, map, values } from 'ramda';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES } from '@contentful/rich-text-types';

const Title = styled.h3`
  background: white;  
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  font-family: 'Noto Serif', serif;
  text-align: center;
  padding-bottom: 2rem;
`;

const renderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <TextLink
        href={data.uri}
        rel={'noopener noreferrer'}
      >{children}</TextLink>
    )
  },
};




const mapProjects = map(project => renderProject(project.node));

const renderProject = (project) => 
    <>
      <Title>
        {project.title}
      </Title>
      <Paragraph>
        {renderRichText(project.description, renderOptions)}
      </Paragraph>
    </> 


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
          }
        }
      }
    }
  `);

  return (
    <Wrapper color="#002733">
      <Subheading>Projects</Subheading>
      {mapProjects(data.allContentfulProject.edges)}
      {console.log(data.allContentfulProject)}
    </Wrapper>
  );
};

export default Work;
