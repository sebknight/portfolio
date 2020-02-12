import styled from 'styled-components';

const Subheading = styled.h2`
  font-family: 'Noto Serif', serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0 30px 0;

  @media(min-width: 768px) {
    margin: 40px 0 40px 0;
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    margin: 60px 0 60px 0;
    font-size: 2.5rem;
  }
`;

export default Subheading;
