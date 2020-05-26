import React from "react";

const NumberButton = (props) => {

  function numberButton() {
    if (props.value2 === "unused" && props.operator === "num") {
      props.setValue(enterNumber(props.value));
    } else if (props.value2 === "unused" && props.operator !== "num") {
      props.setValue2(props.number);
    } else if (props.value2 !== "unused" && props.operator !== "num") {
      props.setValue2(enterNumber(props.value2));
    }
    
  }
  
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
      <button class="button number-button" onClick={numberButton}>
        {props.number}
      </button>
    </>
  );
};

export default NumberButton;