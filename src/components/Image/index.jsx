import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Img = styled.div`
  background-image: url(${(props) => props.src});
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-size: cover;
  `;

const Image = (props) => {
  const { height, src, width } = props;

  return (
    <Img height={height} src={src} width={width} />
  );
};

Image.propTypes = {
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Image;
