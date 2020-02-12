import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Grid = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 25px;
    justify-items: center;
  }
`;

const CardHolder = (props) => {
  const { cards } = props;
  // Dynamically output cards based on card array
  const mapCards = cards.map((card) => (
    <Card
      key={card.id}
      src={card.src}
      height={card.height}
      width={card.width}
      content={card.content}
      title={card.title}
      labelA={card.labelA}
      labelB={card.labelB}
      hrefA={card.hrefA}
      hrefB={card.hrefB}
    />
  ));

  return (
    <Grid>
      {mapCards}
    </Grid>
  );
};

CardHolder.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardHolder;
