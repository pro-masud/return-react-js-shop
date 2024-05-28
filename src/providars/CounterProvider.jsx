import React, { useState } from 'react'
import CounterContext from '../context/CounterContext';

const CounterProvider = ({children}) => {
  const [text, setText] = useState("This is a Text");
  return <CounterContext.Provider value={{text, setText}}>{children}</CounterContext.Provider>;
}

export default CounterProvider;
