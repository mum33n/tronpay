import React from "react";

function Input({ id, className, ...props }) {
  return (
    <input
      className={`h-10 block w-full flex-1 mx-auto bg-gray-600 outline-0 focus:bg-slate-900 outline px-5 text-white focus:outline-1 focus:outline-red-400 border-0 rounded ${className}`}
      id={id}
      {...props}
    ></input>
  );
}

export default Input;
