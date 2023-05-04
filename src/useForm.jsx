import React from 'react'
import { useState } from "react";

export default function useForm(initialState = {}) {
  const [input, setInput] = useState(initialState);
  const handleChange = (e) => {
    e.preventDefault();
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return [input, handleChange];
}
