import React, { useState } from "react";
import headImage from "../../assets/head.jpg"; // Assuming the paths are correct
import tailImage from "../../assets/tail.jpg";

const Coin = () => {
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);
  const [count, setcount] = useState(0);
  const randomCoin = () => {
    const newResult = Math.random() < 0.5 ? "Head" : "Tail";
    setResult(newResult);
    setcount(count+1);
    setImage(newResult === "Head" ? headImage : tailImage);
  };

  return (
    <div>
      <h1>Coin Flipper</h1>
      <div>
        {image && <img src={image} alt="coin" />}
      </div>
      <div>{result}</div>
      <button onClick={randomCoin}>Flip</button>
      <div>{count}</div>
    </div>
  );
};

export default Coin;
