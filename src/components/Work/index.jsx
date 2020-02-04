import React from 'react';
import CardHolder from '../CardHolder';
import Subheading from '../Subheading';
import Wrapper from '../Wrapper';

const Work = () => {
  const size = '250px';
  const viszla = `${process.env.PUBLIC_URL}/assets/viszla.jpg`;
  const cards = [
    {
      id: 1,
      src: viszla,
      height: size,
      width: size,
      content: 'A React app for users to locate nearby mental health resources, and which provides information about mental health generally. \n\r I designed and researched this project, and built it in collaboration with Tashina Jacobs and Daniel Rhodes.',
      title: 'Going through it',
      href: 'https://www.google.com',
    },
    {
      id: 2, src: viszla, height: size, width: size, content: 'A digital ordering system.', title: 'Project 2',
    },
    {
      id: 3, src: viszla, height: size, width: size, content: 'I love to laugh and have fun', title: 'Project 3',
    },
    {
      id: 4, src: viszla, height: size, width: size, content: 'I love to laugh and have fun', title: 'Project 4',
    },
  ];


  return (
    <Wrapper color="#002733">
      <Subheading>Projects</Subheading>
      <CardHolder cards={cards} />
    </Wrapper>
  );
};

export default Work;
