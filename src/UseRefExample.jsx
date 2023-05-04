import { useState, useEffect, useRef } from "react";

function UseRefExample() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
    const prevInputValue = useRef("");
  useEffect(() => {
    count.current = count.current + 1;
    prevInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>{console.log("prevInputValue: " + prevInputValue.current)}</h1>
      <h1>{console.log("render no: " + count.current)}</h1>
    </>
  );
}

export default UseRefExample;