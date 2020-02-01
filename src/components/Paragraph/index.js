import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// const Wrapper = styled.div`
//   width: 100%;
//   margin-top: 10px;
// `

const Text = styled.p`
  color: white;
  font-family: 'Helvetica', sans-serif;
  font-size: 16px;

  @media(min-width: 768px) {
    font-size: 20px;
  }

  @media(min-width: 1200px) {
    font-size: 24px;
  }
`

const Paragraph = props => {
  const { content } = props;

  return (  
    // <Wrapper>
      <Text>{content}</Text>
    // </Wrapper>
  );
}

Paragraph.propTypes = {
  content: PropTypes.string,
}

export default Paragraph;