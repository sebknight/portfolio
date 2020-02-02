import styled from 'styled-components';

const Subheading = styled.h2`
  font-family: 'Noto Serif', serif;
  font-weight: bold;
  font-size: 28px;
  margin: 20px 0 20px 0;

  @media(min-width: 768px) {
    font-size: 36px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media(min-width: 1200px) {
    font-size: 48px;
  }
`;

export default Subheading;
