import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Text = styled.h2`
  font-family: 'Noto Serif', serif;
  font-weight: bold;
  font-size: 28px;
  margin: 20px 0 20px 0;

  @media(min-width: 768px) {
    font-size: 36px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media(min-width: 1200px) {
    font-size: 48px;
    margin-bottom: 60px;
  }
`;

const Subheading = (props) => {
  const { content } = props;

  return (
    <Text>{content}</Text>
  );
};

Subheading.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Subheading;
