import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  color: white;
  border-right: solid 3px white;
  border-bottom: solid 4px white;
  border-radius: 5px;
  background-color: #23c9ff;
  width: 200px;
  height: 38px;
  text-align: center;
  margin: 20px;

  &:hover {
    transition: 0.3s;
    background: #002733;
    color: white;
    border-color: #23c9ff;
  }

  &:focus {
    transition: 0.3s;
    background: #002733;
    color: white;
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