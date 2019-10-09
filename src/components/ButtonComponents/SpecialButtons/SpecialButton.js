import React from "react";

const SpecialButton = (props) => {
  function specialButton() {
    if (props.button === "C") {
      return(0);
    } 
    else if (props.button === "+/-") {
      return props.value*(-1);
    }
    else if (props.button === "%") {
      return props.value*0.01;
    }
    else {
      return props.value;
    }
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button class="button special-button" onClick={() => props.setValue(specialButton(props.value))}>
        {props.button}
      </button>
    </>
  );
};

export default SpecialButton;