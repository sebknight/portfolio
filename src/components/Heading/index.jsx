import styled from 'styled-components';

const Heading = styled.h1`
  font-family: 'Noto Serif', serif;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 3px 3px #002733;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1200px) {
    font-size: 4rem;
  }
`;

export default Heading;
