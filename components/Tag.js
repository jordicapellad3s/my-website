import React from "react";

export default function Tag({ children, color }) {
  return (
    <span
      className={`p-1 mx-1 font-semibold text-white bg-${color}-300 rounded-md`}
    >
      {children}
    </span>
  );
}
