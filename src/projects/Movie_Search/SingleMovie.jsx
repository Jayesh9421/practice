import React from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();

  return <div>Our Single Movie <span className="text-4xl">{id}</span></div>;
};

export default SingleMovie;
