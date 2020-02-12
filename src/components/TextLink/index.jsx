import styled from 'styled-components';

const TextLink = styled.a`
  font-size: inherit;
  color: inherit;
  text-decoration: underline 1px;
  text-decoration-line: underline;
  
  &:hover {
    background: #002733;
    color: white;
  }

  &:focus {
    background: #002733;
    color: white;
  }
`;

export default TextLink;
