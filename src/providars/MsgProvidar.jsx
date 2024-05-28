import React, { useState } from 'react'
import MesContext from '../context/MsgContext'

const MsgProvidar = ({children}) => {

  const [count, setCount] = useState(0);

  return <MesContext.Provider value={{count, setCount}} >{children}</MesContext.Provider>
}

export default MsgProvidar;
