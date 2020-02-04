import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
  border-radius: 5px;
  background-color: white;
  color: #002733;
  padding: 10px;
  text-align: center;
  margin: 5px;
  font-weight: bold;
  text-transform: lowercase;

  @media(min-width: 768px) {
    font-size: 20px;
  }

  @media(min-width: 1200px) {
    font-size: 24px;
  }
  
  &:hover {
    transition: 0.3s;
    background: #002733;
    color: white;
  }

  &:focus {
    transition: 0.3s;
    background: #002733;
    color: white;
`;

const Button = (props) => {
  const { href, label } = props;

  return (
    <Container
      href={href}
    >
      {label}
    </Container>
  );
};


export default Button;
