import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  color: white;
  border: solid 2px white;
  border-radius: 5px;
  background-color: #23c9ff;
  width: 200px;
  height: 38px;
  text-align: center;

  &:hover {
    transition: 0.3s;
    background: white;
    color: #23c9ff;
    border-color: #23c9ff;
  }
`;

const Content = styled.p`
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  text-transform: lowercase;
`;

const Button = props => {
  const { content } = props;

  return (
    <Container>
      <Content>{content}</Content>
    </Container>
  )}

  Button.propTypes = {
    content: PropTypes.string,
  }

export default Button;