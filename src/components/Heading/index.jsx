import styled from 'styled-components';

const Heading = styled.h1`
  font-family: 'Noto Serif', serif;
  font-weight: bold;
  font-size: 36px;
  text-shadow: 3px 3px #002733;

  @media(min-width: 768px) {
    font-size: 48px;
  }

  @media(min-width: 1200px) {
    font-size: 72px;
  }
`;

export default Heading;
