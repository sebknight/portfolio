import List from '../List';
import React from 'react';
import Subsubheading from '../Subsubheading';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  height: auto;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px; 
`

const Skills = () => {
  const skills = [
    { id: 1, content: 'UX design and research' },
    { id: 2, content: 'HTML and CSS (SCSS, UI frameworks, styled-components)' },
    { id: 3, content: 'JavaScript (ES6, React, Node.js, Redux, Lodash, Ramda)' },
    { id: 4, content: 'PHP'},
    { id: 5, content: 'CMS (SilverStripe, WordPress, Hubspot)'},
    { id: 6, content: 'Agile (ICAgile certified, with experience in kanban and retrospective facilitation)'},
    { id: 7, content: 'AWS (Business Essentials, Technical Essentials, and Developing on AWS courses)'},
    { id: 8, content: 'RESTful APIs'},
    { id: 9, content: 'Build tools, release management, and version control (Webpack, Babel, Jenkins, Git)'}
  ]

  return (
    <Wrapper>
      <Subsubheading content="My skills" />
      <List items={skills}/>
    </Wrapper>
  );
}

export default Skills;