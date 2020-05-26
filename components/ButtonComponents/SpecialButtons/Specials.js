import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import {specials} from '../../../data';

export default function Specials(props) {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {specialState.map((button) => (
        <SpecialButton button={button} value={props.value} setValue={props.setValue} value2={props.value2} setValue2={props.setValue2} operator={props.operator} setOperator={props.setOperator}/>
      ))}
    </div>
  );
};
