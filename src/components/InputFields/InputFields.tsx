//InputFields
import React, { JSXElementConstructor, useState } from "react";

interface InputProps {
  inputType: string;
}

const InputFields: JSXElementConstructor<InputProps> = (props) => {
  const [valState, setValState] = useState("");

  const updateValState = (ev: any) => {
    setValState(ev.target.value);
  };

  return (
    <div className="Input-Container">
      <label className="Input-Label" htmlFor={props.inputType}>
        {props.inputType}:
      </label>
      <input
        className="Input-Field"
        id={props.inputType}
        type={props.inputType}
        onChange={updateValState}
        value={valState}
      />
    </div>
  );
};

export default InputFields;
