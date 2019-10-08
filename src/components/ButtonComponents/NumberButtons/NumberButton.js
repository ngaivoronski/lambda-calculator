import React from "react";

const NumberButton = (props) => {
  function enterNumber(num) {
    if (parseInt(num) === 0) {
      return (props.number);
    } else {
      return (num + props.number);
    }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => props.setValue(enterNumber(props.value))}>
        {props.number}
      </button>
    </>
  );
};

export default NumberButton;