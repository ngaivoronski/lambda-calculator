import React, {useState} from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
import { numbers } from '../../../data';

export default function Numbers(props) {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {numberState.map((number) => (
        <NumberButton number={number} value={props.value} setValue={props.setValue} value2={props.value2} setValue2={props.setValue2} operator={props.operator} setOperator={props.setOperator} />
      ))}
    </div>
  );
};
