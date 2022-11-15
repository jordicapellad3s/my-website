import React from "react";

export default function Tag({ bg, children }) {
  return (
    <span className={`px-2 mx-1 font-semibold ${bg} text-white rounded-md`}>
      {children}
    </span>
  );
}
