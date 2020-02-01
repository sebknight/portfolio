// import PropTypes from 'prop-types';
import React from 'react';
import ListItem from '../ListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  height: auto;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px; 
`;

const List = props => {

  const listItems = props.items.map((item) => 
    <ListItem key={item.id} item={item.content} />
  )

  return (
    <Wrapper>
      <ul>
        {listItems}
      </ul>
    </Wrapper>
  )
}

// List.propTypes = {
//   items: PropTypes.string,
// }

export default List;