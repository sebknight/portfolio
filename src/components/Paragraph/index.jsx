import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 16px;
  text-align: left;
  max-width: 60ch;
  margin: 0 auto;

  @media(min-width: 768px) {
    font-size: 20px;
  }

  @media(min-width: 1200px) {
    font-size: 24px;
  }
`;

const Paragraph = (props) => {
  const { content } = props;

  return (
    <Text>{content}</Text>
  );
};

Paragraph.propTypes = {
  content: PropTypes.string,
};

export default Paragraph;
