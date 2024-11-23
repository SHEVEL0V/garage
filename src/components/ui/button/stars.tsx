/** @format */
"use client";

import React, { useState } from "react";

const star = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
  >
    <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
  </svg>
);

const unit = [1, 2, 3, 4, 5];

export default function ButtonStars() {
  const [color, setColor] = useState(0);

  return (
    <div className="flex ">
      {unit.map((n) => (
        <button
          key={n}
          className={color >= n ? "fill-amber-400" : "fill-gray-400"}
          onClick={() => setColor(n)}
        >
          {star}
        </button>
      ))}
    </div>
  );
}
