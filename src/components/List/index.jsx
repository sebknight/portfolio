import PropTypes from "prop-types";
import React from "react";
import ListItem from "../ListItem";

const List = (props) => {
  const { items } = props;
  // Dynamically output list items based on list item array
  const listItems = items.map((item) => (
    <ListItem key={item.id} item={item.content} />
  ));

  return <ul>{listItems}</ul>;
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
