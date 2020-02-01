import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Text = styled.h3`
  color: white;
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  font-size: 16px;
  text-decoration: underline wavy #23c9ff;

  @media(min-width: 768px) {
    font-size: 24px;
  }

  @media(min-width: 1200px) {
    font-size: 36px;
  }
`

const Subsubheading = props => {
  const { content } = props;

  return (  
      <Text>{content}</Text>
  );
}

Subsubheading.propTypes = {
  content: PropTypes.string,
}

export default Subsubheading;