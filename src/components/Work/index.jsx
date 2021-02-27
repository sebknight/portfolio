import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Subheading from '../Subheading';
import Wrapper from '../Wrapper';
import Text from '../Text';
import styled from 'styled-components';
import TextLink from '../TextLink';
import Image from '../Image';
import { map, where } from 'ramda';
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
    <div key={project.title}>
        <Image
        alt={project.image.description}
        src={project.image.fluid.src}
      />
      <Title>
        {project.title}
      </Title>
      <Text>
        {renderRichText(project.description, renderOptions)}
      </Text>
    </div> 


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
            image: image {
              title
              description
              fluid (maxWidth: 1000) {
                src
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
      {console.log(data)}
      {mapProjects(data.allContentfulProject.edges)}
    </Wrapper>
  );
};

export default Work;
