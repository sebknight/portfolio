import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  font-size: 16px;
  text-align: left;
  margin-bottom: 0.5em;

  @media(min-width: 768px) {
    font-size: 20px;
  }

  @media(min-width: 1200px) {
    font-size: 24px;
  }

  ::before {
    content: "♥ ";
    color: #23c9ff;
  }
`;

const ListItem = (props) => {
  const { item } = props;
  return (
    <Item>
      {item}
    </Item>
  );
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ListItem;
