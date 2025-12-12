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

export const PinItems = React.forwardRef(({ max, onChange }, ref) => {
  console.log("🚀 ~ onChange:", onChange);
  const handleKeyUp = (e) => {
    console.log("🚀 ~ e:", e);
    console.log("🚀 ~ e.keyCode:", e.keyCode);
    async function pasteTextFromClipboard() {
      try {
        const clipboardText = await navigator.clipboard.readText();
        console.log("🚀 ~ clipboardText:", clipboardText);
      } catch (error) {
        console.error("Failed to paste", error);
      }
    }
    switch (e.keyCode) {
      case 9:
        //for tab button default behaviour
        e.preventDefault();
        break;

      case 8:
        //for backspace button default behaviour
        e.preventDefault();
        break;

      default:
        onChange(e.target.value);
        pasteTextFromClipboard();
    }
  };
  return (
    <>
      <input
        ref={ref}
        type="text"
        style={style}
        maxLength={max}
        onKeyUp={handleKeyUp}
      />
    </>
  );
});
// export const PinItems = ({ max }) => {
//   return (
//     <>
//       {/* <h1></h1> */}
//       <input type="text" style={style} maxLength={max} />
//     </>
//   );
// };

PinItems.propTypes = {
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
