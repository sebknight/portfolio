import styled from "styled-components";

const Subheading = styled.h2`
  font-family: "Noto Serif", serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

export default Subheading;
