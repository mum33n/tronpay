import React from "react";

function Button({ children, className, ...prop }) {
  return (
    <button
      className={
        "bg-red-500 hover:bg-red-600 py-2.5 px-6 shadow-md hover:shadow-lg focus:shadow-lg focus:bg-red-600 rounded flex gap-3 items-center justify-center font-medium text-md transition ease-in-out duration-150 text-white " +
        className
      }
      {...prop}
    >
      {children}
    </button>
  );
}

export default Button;
