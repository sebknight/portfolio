// import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  color: white;
  font-family: 'Helvetica', sans-serif;
  font-size: 16px;
  margin-bottom: 0.5em;

  @media(min-width: 768px) {
    font-size: 20px;
  }

  @media(min-width: 1200px) {
    font-size: 24px;
  }

  ::before {
    content: "♥ ";
    color: #f279f6;
  }
`

const ListItem = props => {
  return (
    <Item>
      {props.item}
    </Item>
  )}

export default ListItem;