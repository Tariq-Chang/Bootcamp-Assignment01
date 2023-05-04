import React, { useContext } from "react";
import { Context } from "./App";
function ComponentC() {
  const theme = useContext(Context);
  return (
    <div><h1>{theme}</h1></div>


    // old context api 
    // <Context.Consumer>{(theme) => <h1>{theme}</h1>}</Context.Consumer>
  );
}

export default ComponentC;
