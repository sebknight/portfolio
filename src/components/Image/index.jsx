import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  height: auto;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px; 
`;

const Img = styled.div`
  background-image: url(${(props) => props.src});
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-size: cover;
  clip-path: circle(125px at center);
  `;

const Image = (props) => {
  const { height, src, width } = props;

  return (
    <Wrapper>
      <Img height={height} src={src} width={width} />
    </Wrapper>
  );
};

Image.propTypes = {
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Image;
