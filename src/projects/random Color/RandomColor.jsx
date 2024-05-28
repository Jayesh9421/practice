import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOf, setTypeOf] = useState("");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor)
  };

  const handleCreateRandomRGBColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOf === "rgb") handleCreateRandomRGBColor();
    else handleCreateRandomHexColor();
  }, [typeOf]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div className="flex justify-center items-center space-x-10 mt-10">
        <button className="button" onClick={() => setTypeOf("hex")}>
          Create HEX Color
        </button>
        <button
          className="button"
          onClick={() =>
            setTypeOf(
              typeOf === "hex"
                ? handleCreateRandomHexColor()
                : handleCreateRandomRGBColor()
            )
          }
        >
          Random Color
        </button>
        <button className="button" onClick={() => setTypeOf("rgb")}>
          Create RGB Color
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#ffff",
            fontSize: "30px",
            gap: "20px",
            marginTop: "100px",
          }}
        >
          <h3>{typeOf === "hex" ? "HEX Color" : "RGB Color"}</h3>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
