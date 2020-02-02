import React from 'react';
import styled from 'styled-components';
import List from '../List';
import Subheading from '../Subheading';
import Wrapper from '../Wrapper';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 25px;
  margin-top: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }

`;

const Skills = () => {
  const skills1 = [
    { id: 1, content: 'UX design and research' },
    { id: 2, content: 'HTML and CSS' },
    { id: 3, content: 'JavaScript (ES6, React, Node.js, Redux)' },
    { id: 4, content: 'Testing (Cypress, Jest, PHPUnit)' },
    { id: 5, content: 'PHP' },
  ];

  const skills2 = [
    { id: 6, content: 'CMS (SilverStripe, WordPress, Hubspot)' },
    { id: 7, content: 'Agile (ICAgile certified)' },
    { id: 8, content: 'Build tools, release management, version control (Jenkins, Git)' },
    { id: 9, content: 'AWS' },
    { id: 10, content: 'RESTful APIs' },
  ];
  return (
    <Wrapper color="#002733">
      <Subheading>Skills</Subheading>
      <ListContainer>
        <List items={skills1} />
        <List items={skills2} />
      </ListContainer>
    </Wrapper>
  );
};

export default Skills;
