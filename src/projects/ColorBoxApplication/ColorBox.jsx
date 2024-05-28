// src/ColorBox.js
import React, { useState } from "react";

const ColorBox = () => {
  const [color, setColor] = useState(null);

  const randomColor = () => {
    const letter = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letter[Math.floor(Math.random() * 16)];

      setColor(newColor);
    }
  };

  return (
    <div className="text-center mt-12">
      <h1 className="text-2xl font-bold mb-6">Color Box</h1>
      <div
        className="w-48 h-48 mx-auto border-2 border-black"
        style={{ backgroundColor: color }}
      />
      <button
        onClick={randomColor}
        className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
      >
        Change Color
      </button>
    </div>
  );
};

export default ColorBox;
