import React from "react";

export const useToggle = (defaultVal) => {
  const [value, setValue] = React.useState(defaultVal);

  function toggleValue(val) {
    if (typeof val != "boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  }
  return [value, toggleValue];
};
