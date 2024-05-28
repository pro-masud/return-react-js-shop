import { useState } from 'react'
import NextCounter from '../context/NextCounter'

const NextProvider = ({children}) => {
    const [nextCount, setNextCount] = useState(0);

  return <NextCounter.Provider value={{nextCount, setNextCount}} >{children}</NextCounter.Provider>
}

export default NextProvider
