/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { PinItems } from "./PinItems";
import { useRef } from "react";

export const InputBox = ({ label, length, perBox }) => {
  //   console.log("🚀 ~ label:", typeof label, typeof length);
  const [data, setData] = useState(new Array(length).fill(""));
  const element = useRef(new Array(length).fill(0));

  const handleAddFunc = (values, index) => {
    const val = [...data];
    val[index] = values;
    setData(val);
    if (index < length - 1) {
      element.current[index + 1]?.focus();
    }
  };
  console.log("🚀 ~ data:", data);
  return (
    <>
      {/* <h1>{label}</h1> */}
      {data &&
        data.map((el, index) => {
          return (
            <PinItems
              ref={(n) => (element.current[index] = n)}
              max={perBox}
              key={index}
              //   onChange={handleFunc}
              onChange={(values) => handleAddFunc(values, index)}
            />
          );
        })}
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number.isRequired,
};
