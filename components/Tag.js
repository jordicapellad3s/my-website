import React from "react";

export default function Tag({ children, color }) {
  return (
    <span
      className={`px-2 mx-1 font-semibold text-white bg-${color}-300 rounded-md`}
    >
      {children}
    </span>
  );
}
