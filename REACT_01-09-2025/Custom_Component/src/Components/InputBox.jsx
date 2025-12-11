import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { PinItems } from "./PinItems";

export const InputBox = ({ label, length, perBox }) => {
  //   console.log("🚀 ~ label:", typeof label, typeof length);
  const [data, setData] = useState(new Array(length).fill(""));

  const handleFunc = () => {};
  return (
    <>
      {/* <h1>{label}</h1> */}
      {data &&
        data.map((el, index) => {
          return <PinItems max={perBox} key={index} onChange={handleFunc} />;
        })}
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number.isRequired,
};
