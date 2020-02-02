import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  font-family: 'Noto Serif', serif;
  font-weight: bold;
  font-size: 36px;

  @media(min-width: 768px) {
    font-size: 48px;
  }

  @media(min-width: 1200px) {
    font-size: 72px;
  }
`;

const Heading = (props) => {
  const { content } = props;
  return (
    <Text>{content}</Text>
  );
};

Heading.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Heading;