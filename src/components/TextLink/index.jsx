import styled, { css } from "styled-components";

const TextLink = styled.a`
  font-size: inherit;
  color: #2fc4fe;
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

  ${(props) =>
    props.footer &&
    css`
      color: inherit;
    `}
`;

export default TextLink;
