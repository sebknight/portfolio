import React from 'react';
import CardHolder from '../CardHolder';
import Subheading from '../Subheading';
import Wrapper from '../Wrapper';

const Work = () => {
  const height = '100%';
  const width = '100%';
  const size = '250px';
  const gti = `${process.env.PUBLIC_URL}/assets/going-through-it.png`;
  const runaway = `${process.env.PUBLIC_URL}/assets/runaway.png`;

  const cards = [
    {
      id: 1,
      alt: 'Person holding an iPad with the going through it app',
      src: gti,
      height: height,
      width: width,
      content: 
      'A React SPA for users to locate nearby mental health resources utilising the Google Places API. It also features Google Charts displaying information about the use of mental health services in New Zealand. I designed and researched this project, and built the first prototype in collaboration with Tashina Jacobs and Daniel Rhodes. I recently rebuilt it using functional components.',
      title: 'Going Through It?',
      hrefA: 'https://going-through-it.netlify.com',
      labelA: 'View live site',
      hrefB: 'https://github.com/sebknight/going-through-it',
      labelB: 'View on GitHub',
    },
    {
      id: 2, 
      alt: 'A computer screen showing the WordPress theme',
      src: runaway, 
      height: height, 
      width: width, 
      content: 
      'A clean, minimal, customisable WordPress theme originally designed for a freelance videographer. The demo site is just full of dogs. It\'s suited to anyone offering creative services -- it features a portfolio, services offered, and client testimonial sections, as well as a custom contact form so users can view enquiries directly within WordPress.', 
      title: 'Runaway WordPress Theme',
      hrefA: 'https://sebastianmaddox.com/wordpress/',
      labelA: 'View live site',
      hrefB: 'https://github.com/sebknight/runaway-wordpress',
      labelB: 'View on GitHub',
    },
    {
      id: 3, 
      // src: viszla, 
      height: size,
      width: size,
      content: 
      'A fun little app utilising the Fetch, Dog, and Wikipedia APIs. Click the button to get a random dog image, and you will receive a snippet of information about the breed. Done entirely in vanilla JS, and needed a surprising amount of engineering due to several edge cases.', 
      title: 'Fetch!',
      hrefA: 'https://sebknight.github.io/fetch/',
      labelA: 'View live site',
      hrefB: 'https://github.com/sebknight/fetch',
      labelB: 'View on GitHub',
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
