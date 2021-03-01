import styled from "styled-components";

const Column = styled.div`
  display: flex;
  background: ${(props) => props.background};
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  height: auto;
  width: 80%;
  margin: 0 auto;
  padding: 0 1rem;
  border-radius: 5px;

  @media (min-width: 768px) {
    padding: 0 0.5rem;
  }
`;

export default Column;
