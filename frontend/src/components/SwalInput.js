import React from "react";
import Input from "./Input";

function SwalInput({ value, label, name, handleChange, disabled = false }) {
  return (
    <div className="mt-3 text-left">
      <label className="text-white" htmlFor={label}>{`${label}:`}</label>
      <Input
        onChange={(e) => handleChange(e)}
        name={label}
        value={value}
        disabled={disabled}
      ></Input>{" "}
    </div>
  );
}

export default SwalInput;
