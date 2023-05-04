import React, { createContext, useState } from "react";
import ComponentA from "./ComponentA";
import UseRefExample from "./UseRefExample";
import useForm from "./useForm";
const Context = createContext();
function App() {
  const [theme, setTheme] = useState('dark');
  const [input, handleChange] = useForm();
  return (
    <Context.Provider value={theme}>
      {/* Use Context Example */}
      <ComponentA/>

      {/* useRef Example */}
      <UseRefExample></UseRefExample>

    {/* custome hook example */}
    <h1>{console.log(input)}</h1>
    <input type="text" name="firstName" onChange={handleChange} />
    <input type="text" name="lastName" onChange={handleChange}/>
    </Context.Provider>
  
    
  );
}

export {Context}
export default App;
