import React, { createContext, useState } from "react";
import ComponentA from "./ComponentA";
import UseRefExample from "./UseRefExample";
import useForm from "./useForm";
const Context = createContext();
function App() {
  const [theme, setTheme] = useState("dark");

  //custom hook
  const [values, handleChange] = useForm();

  return (
    <Context.Provider value={theme}>
      {/* Use Context Example */}
      <ComponentA />

      {/* useRef Example */}
      <UseRefExample></UseRefExample>

      {/* custome hook example */}
      <h1>
        Hello {values.firstName} {values.lastName}
      </h1>
      <label>FirstName</label>
      <input
        type="text"
        name="firstName"
        value={values.name}
        onChange={handleChange}
      />
      <label htmlFor="">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={values.name}
        onChange={handleChange}
      />
    </Context.Provider>
  );
}

export {Context}
export default App;
