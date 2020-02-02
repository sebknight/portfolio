import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 25px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
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
