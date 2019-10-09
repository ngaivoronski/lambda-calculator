import React from "react";

const SpecialButton = (props) => {
  function applySpecial(num) {
    if (props.button === "C") {
      return(0);
    } 
    else if (props.button === "+/-") {
      return num*(-1);
    }
    else if (props.button === "%") {
      return num*0.01;
    }
    else {
      return num;
    }
  }

  function specialButton() {
    if (props.button === "C") {
      props.setValue(0);
      props.setValue2("unused");
      props.setOperator("num");
    }
    else if (props.button === "+/-" && props.value2 === "unused" && props.operator === "num") {
      props.setValue(props.value*(-1));
    }
    else if (props.button === "+/-" && props.value2 !== "unused") {
      props.setValue2(props.value2*(-1));
    }
    else if (props.button === "%" && props.value2 === "unused" && props.operator === "num") {
      props.setValue(props.value*0.01);
    }
    else if (props.button === "%" && props.value2 !== "unused") {
      props.setValue2(props.value2*0.01);
    }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button class="button special-button" onClick={specialButton}>
        {props.button}
      </button>
    </>
  );
};

export default SpecialButton;