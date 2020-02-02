import styled from 'styled-components';

const TextLink = styled.a`
  font-size: inherit;
  color: inherit;
  text-decoration: underline dotted 2px;
  
  &:hover {
    background: #23c9ff;
    text-decoration-color: #f279f6;
    color: white;
  }

  &:focus {
    background: #23c9ff;
    text-decoration-color: #f279f6;
    color: white;
  }
`;

export default TextLink;
