import React, {useState} from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState("unused");
  const [operator, setOperator] = useState("num");
  const [display, setDisplay] = useState(value);
  
  function updateDisplay() {
    setTimeout(function() {
      if (operator === "num" && (String(value).length > 8)) {
        setDisplay(parseFloat(value).toExponential(3));
      } 
      else if (operator === "num") {
        setDisplay(value);
      }
      else if (operator !== "num" && value2 === "unused") {
        setDisplay(operator);
      } 
      else if (value2 !== "unused" && (String(value2).length > 8)) {
        setDisplay(parseFloat(value2).toExponential(3));
      }
      else if (value2 !== "unused") {
        setDisplay(value2);
      }
      
    }, 10)
  }
  updateDisplay();
  
  return (
    <div className="container">
      <div className="logo-div">
        <Logo />
      </div>
      
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <div className="display-div">
          <Display display={display}/>
        </div>
        <div className="buttons-div">
          <div className="left-buttons">
            <div className="special-buttons">
              <Specials value={value} setValue={setValue} value2={value2} setValue2={setValue2} operator={operator} setOperator={setOperator}/>
              
            </div>
            <div className="number-buttons">
              <Numbers value={value} setValue={setValue} value2={value2} setValue2={setValue2} operator={operator} setOperator={setOperator}/>
            </div>
          </div>
          <div className="right-buttons">
            <Operators value={value} setValue={setValue} value2={value2} setValue2={setValue2} operator={operator} setOperator={setOperator}/>
          </div>
        </div>     
      </div>
    </div>
  );
}

export default App;
