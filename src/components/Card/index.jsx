import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
import Paragraph from '../Paragraph';
import Button from '../Button';

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
    transition: 0.3s;
    box-shadow: 5px 5px #23c8fe;
  }
`;

const Title = styled.h3`
  background: white;  
  border-radius: 5px;
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
  padding: 25px 0 25px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  margin-top: 25px;
`;

const ContentContainer = styled.div`
  background: white;
  padding: 25px;
  border-radius: 5px;
`;

const Card = (props) => {
  const {
    height, src, width, content, title, label, href,
  } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <ImageContainer>
        <Image height={height} src={src} width={width} />
      </ImageContainer>
      <ContentContainer>
        <Paragraph>{content}</Paragraph>
      </ContentContainer>
      <ButtonContainer>
        <Button
          href={href}
          label={label}
          target="_blank"
          rel="noopener"
        />
      </ButtonContainer>
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
