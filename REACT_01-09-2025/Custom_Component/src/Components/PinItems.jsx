import PropTypes from "prop-types";
import React from "react";

const style = {
  width: "50px",
  height: "50px",
  border: "2px solid gray",
  margin: "10px",
  padding: "10px",
  textAlign: "center",
};

export const PinItems = ({ max }) => {
  return (
    <>
      {/* <h1></h1> */}
      <input type="text" style={style} maxLength={max} />
    </>
  );
};

PinItems.propTypes = {
  max: PropTypes.number.isRequired,
};
