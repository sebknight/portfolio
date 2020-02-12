import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  `;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
`;

const Image = (props) => {
  const {
    alt, height, src, width,
  } = props;

  return (
    <ImageContainer height={height} width={width}>
      <Img alt={alt} src={src} />
    </ImageContainer>
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Image;
