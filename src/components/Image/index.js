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
`

const Img = styled.div`
  background-image: url(${props => props.src});
  height: ${props => props.height};
  width: ${props => props.width};
  background-size: cover;
`;

const Image = props => {
  const { height, src, width } = props;

  return (
    <Wrapper>
      <Img src={src} height={height} width={width}/>
    </Wrapper>
  );
}

export default Image;