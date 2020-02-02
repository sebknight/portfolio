import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
import Paragraph from '../Paragraph';

const Container = styled.div`
  display: flex;  
  align-items: stretch;
  flex-flow: column wrap;
  background-color: #f279f6;
  padding: 25px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;

  &:hover {
    transition: 0.5s;
    background: #002733;
    color: white;
  }
`;

const Title = styled.h3`
  font-family: 'Noto Serif', serif;
  font-weight: bold;
  font-size: 24px;
  text-align: center;

  @media(min-width: 768px) {
    font-size: 28px;
  }

  @media(min-width: 1200px) {
    font-size: 32px;
  } 
`;

const ImageContainer = styled.div`
  padding-bottom: 25px;
  display: flex;
  align-items: flex-start;
`;

const Card = (props) => {
  const {
    height, src, width, content, title,
  } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <ImageContainer>
        <Image height={height} src={src} width={width} />
      </ImageContainer>
      <Paragraph>{content}</Paragraph>
    </Container>
  );
};

Card.propTypes = {
  content: PropTypes.string,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired,
};


export default Card;
