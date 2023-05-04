import React from 'react'

export default function useForm() {
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    e.preventDefault();
    setInput(prevInput => ({...prevInput, [e.target.name]:e.target.value}));
  }

  return [input,handleChange];
}
