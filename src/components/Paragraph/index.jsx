import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 16px;
  text-align: left;
  max-width: 60ch;
  margin: 0 auto;

  @media(min-width: 768px) {
    font-size: 20px;
  }

  @media(min-width: 1200px) {
    font-size: 24px;
  }
`;

export default Paragraph;
