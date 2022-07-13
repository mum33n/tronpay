import React from "react";
import Input from "./Input";

function SwalInput({ value, label, name, changeHandler, disabled = false }) {
  return (
    <div className="mt-3 text-left">
      <label htmlFor={label}>{`${label}:`}</label>
      <Input
        onChange={(e) => changeHandler(e)}
        name={name}
        value={value}
        disabled={disabled}
      ></Input>{" "}
    </div>
  );
}

export default SwalInput;
