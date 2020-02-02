import styled from 'styled-components';


const Button = styled.a`
  border-right: solid 3px;
  border-bottom: solid 4px;
  border-radius: 5px;
  background: ${(props) => props.background};
  border-color: ${(props) => props.borderColor};
  width: 100px;
  text-align: center;
  margin: 20px;
  font-weight: bold;
  text-transform: lowercase;

  &:hover {
    transition: 0.3s;
    background-color: ${(props) => props.hoverColor};
    border-color: ${(props) => props.hoverBorder};
  }

  &:focus {
    transition: 0.3s;
    background-color: ${(props) => props.hoverColor};
    border-color: ${(props) => props.hoverBorder};
  }
`;

export default Button;
