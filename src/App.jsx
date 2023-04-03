import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const { name } = useSelector((state) => state.movie);
  
  return <div>{name}</div>;
};

export default App;
