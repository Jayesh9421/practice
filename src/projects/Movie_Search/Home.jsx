import React, { useContext } from "react";
import { AppContext } from "./context";

const Home = () => {
  const {name} = useContext(AppContext);

  return (
    <div>
      <div>my home page</div>
      <p>my name is {name}</p>
    </div>
  );
};

export default Home;
