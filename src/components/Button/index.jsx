import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.a`
  border-radius: 5px;
  border: solid 2px #002733;
  background-color: transparent;
  color: #002733;
  padding: 0.5rem 1rem;
  margin: 0.75rem 0.75rem 0.75rem 0;
  text-align: center;
  font-weight: bold;
  text-transform: lowercase;
  text-decoration-line: none;
  // width: 12rem;

  @media(min-width: 768px) {
    font-size: 1.25rem;
  }

  @media(min-width: 1200px) {
    font-size: 1.5rem;
  }
  
  &:hover {
    transition: 0.3s;
    background: #002733;
    border-color: #23c9ff;
    color: white;
  }

  &:focus {
    transition: 0.3s;
    background: #002733;
    border-color: #23c9ff;
    color: white;
`;

const Button = (props) => {
  const { href, label } = props;

  return <Container href={href}>{label}</Container>;
};

export default Button;

Button.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
};
