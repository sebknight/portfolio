import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  background: ${(props) => props.background};
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  height: auto;
  width: 95%;
  margin: 0 auto;
  padding: 0 25px 25px 25px;
  border-radius: 5px;

  @media (min-width: 768px) {
    padding: 0 50px 50px 50px; 
    width: 80%
  }
`;

export default Column;
