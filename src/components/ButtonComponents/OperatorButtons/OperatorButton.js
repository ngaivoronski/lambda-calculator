import React from "react";

const OperatorButton = (props) => {
  function operatorButton() {
    if (props.value2 === "unused" && props.button.char !== "=") {
      props.setOperator(props.button.char);
    } else if (props.value2 !== "unused" && props.button.char === "=") {
      props.setValue(evaluate[props.operator](props.value,props.value2));
      console.log(props.button.char);
      props.setValue2("unused");
      props.setOperator("num");
    } else if (props.value2 !== "unused" && props.button.char !== "=") {
      props.setValue(evaluate[props.operator](props.value,props.value2));
      props.setValue2("unused");
      props.setOperator(props.button.char);
    }
    
  }

  var evaluate = {
    '+': function (x, y) { return Number(x) + Number(y) },
    '-': function (x, y) { return x - y },
    'x': function (x, y) { return x * y },
    '/': function (x, y) { return x / y }
}

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button class="button operator-button" onClick={operatorButton}>
        {props.button.char}
      </button>
    </>
  );
};

export default OperatorButton;