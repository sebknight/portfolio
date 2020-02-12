import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
import Paragraph from '../Paragraph';
import Button from '../Button';

const Container = styled.div`
  display: grid;  
  grid-template-columns: 1;
  grid-gap: 2rem;
  align-items: stretch;
  padding: 0rem;
  width: 100%;
  margin: 0 auto;
  border-radius: 0px;
  border: 2px dotted rgba(35, 201, 255, 1);

  @media (min-width: 768px) {
    &:hover {
      transition: 0.3s;
      box-shadow: 10px 10px #23c9ff;
    }
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Title = styled.h3`
  background: white;  
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  font-family: 'Noto Serif', serif;
  text-align: center;
  padding-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
`;

const ContentContainer = styled.div`
  background: white;
  // display: flex;
  // flex-flow: column wrap;
  padding: 2rem;
  border-radius: 5px;
  border-bottom: 2px dotted rgba(35, 201, 255, 1);


  @media (min-width: 1200px) {
    border-bottom: 0;
    border-right: 2px dotted rgba(35, 201, 255, 1);
  }
`;

const Card = (props) => {
  const {
    alt, height, src, width, content, title, labelA, labelB, hrefA, hrefB,
  } = props;

  return (
    <Container>
      <ContentContainer>
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
        <ButtonContainer>
          <Button
            href={hrefA}
            label={labelA}
          />
          <Button
            href={hrefB}
            label={labelB}
          />
        </ButtonContainer>
      </ContentContainer>
      <Image alt={alt} height={height} src={src} width={width} />
    </Container>
  );
};

Card.propTypes = {
  content: PropTypes.string,
  height: PropTypes.string.isRequired,
  hrefA: PropTypes.string,
  hrefB: PropTypes.string,
  labelA: PropTypes.string,
  labelB: PropTypes.string,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired,
};


export default Card;
